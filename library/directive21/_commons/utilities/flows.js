import path from "path";

import {
  EXTENSIONS,
  reExportNotSameMessageId,
  importBreaksCommentedImportRulesMessageId,
  noCommentedDirective,
  commentedDirectiveVerificationFailed,
  importNotStrategized,
  exportNotStrategized,
} from "../../../_commons/constants/bases.js";
import {
  USE_SERVER_LOGICS,
  USE_CLIENT_LOGICS,
  USE_AGNOSTIC_LOGICS,
  USE_SERVER_COMPONENTS,
  USE_CLIENT_COMPONENTS,
  USE_AGNOSTIC_COMPONENTS,
  USE_SERVER_FUNCTIONS,
  USE_CLIENT_CONTEXTS,
  USE_AGNOSTIC_CONDITIONS,
  USE_AGNOSTIC_STRATEGIES,
  commentedDirectives_VerificationReports,
  // currentFileCommentedDirective,
  // importedFileCommentedDirective,
  commentedDirectiveMessage,
  specificViolationMessage,
  specificFailure,
} from "../constants/bases.js";

import { resolveImportPath } from "../../../_commons/utilities/helpers.js";
import {
  getCommentedDirectiveFromCurrentModule,
  getVerifiedCommentedDirective,
  getCommentedDirectiveFromImportedModule,
  isImportBlocked,
  makeMessageFromCommentedDirective,
  findSpecificViolationMessage,
  getStrategizedDirective,
} from "./helpers.js";

// TEST START
import fs from "fs";
// import { SourceCode } from "eslint";
import { Linter } from "eslint";
import tseslint from "typescript-eslint";
import { defineConfig } from "eslint/config";
// TEST END

/* currentFileFlow */

/**
 * The flow that begins the import rules enforcement rule, retrieving the valid directive of the current file before comparing it to upcoming valid directives of the files it imports.
 * @param {Readonly<import('@typescript-eslint/utils').TSESLint.RuleContext<typeof reExportNotSameMessageId | typeof importBreaksCommentedImportRulesMessageId | typeof noCommentedDirective | typeof commentedDirectiveVerificationFailed | typeof importNotStrategized | typeof exportNotStrategized, []>>} context The ESLint rule's `context` object.
 * @returns {{skip: true; verifiedCommentedDirective: undefined;} | {skip: undefined; verifiedCommentedDirective: USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS | USE_AGNOSTIC_STRATEGIES;}} Returns either an object with `skip: true` to disregard or one with the non-null `verifiedCommentedDirective`.
 */
export const currentFileFlow = (context) => {
  // GETTING THE EXTENSION OF THE CURRENT FILE
  const currentFileExtension = path.extname(context.filename);

  // fails if the file is not JavaScript (TypeScript)
  const iscurrentFileJS = EXTENSIONS.some(
    (ext) => currentFileExtension === ext
  );
  if (!iscurrentFileJS) {
    console.error(
      "ERROR. Linted files for this rule should only be in JavaScript (TypeScript)."
    );
    return { skip: true };
  }

  // gets the commented directive from the current file
  const commentedDirective = getCommentedDirectiveFromCurrentModule(context);

  // reports if there is no directive or no valid directive (same, but eventually no directive could have defaults)
  if (!commentedDirective) {
    context.report({
      loc: {
        start: { line: 1, column: 0 },
        end: { line: 1, column: context.sourceCode.lines[0].length },
      },
      messageId: noCommentedDirective,
    });
    return { skip: true };
  }

  const verifiedCommentedDirective = getVerifiedCommentedDirective(
    commentedDirective,
    currentFileExtension
  );

  // reports if the verification failed
  if (!verifiedCommentedDirective) {
    context.report({
      loc: {
        start: { line: 1, column: 0 },
        end: { line: 1, column: context.sourceCode.lines[0].length },
      },
      messageId: commentedDirectiveVerificationFailed,
      data: {
        [specificFailure]:
          commentedDirectives_VerificationReports[commentedDirective],
      },
    });
    return { skip: true };
  }

  return {
    verifiedCommentedDirective,
  };
};

/* importedFileFlow */

/**
 * The flow that is shared between import and re-export traversals to obtain the import file's commented directive.
 * @param {Readonly<import('@typescript-eslint/utils').TSESLint.RuleContext<typeof reExportNotSameMessageId | typeof importBreaksCommentedImportRulesMessageId | typeof noCommentedDirective | typeof commentedDirectiveVerificationFailed | typeof importNotStrategized | typeof exportNotStrategized, []>>} context The ESLint rule's `context` object.
 * @param {import('@typescript-eslint/types').TSESTree.ImportDeclaration} node The ESLint `node` of the rule's current traversal.
 * @returns {{skip: true; importedFileCommentedDirective: undefined;} | {skip: undefined; importedFileCommentedDirective: USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS;}} Returns either an object with `skip: true` to disregard or one with the non-null `importedFileCommentedDirective`.
 */
const importedFileFlow = (context, node) => {
  // finds the full path of the import
  const resolvedImportPath = resolveImportPath(
    path.dirname(context.filename),
    node.source.value,
    context.cwd
  );

  // console.log({ node, resolvedImportPath });

  // does not operate on paths it did not resolve
  if (resolvedImportPath === null) return { skip: true };
  // does not operate on non-JS files
  const isImportedFileJS = EXTENSIONS.some((ext) =>
    resolvedImportPath.endsWith(ext)
  );
  if (!isImportedFileJS) return { skip: true };

  /* GETTING THE DIRECTIVE (or lack thereof) OF THE IMPORTED FILE */
  let importedFileCommentedDirective =
    getCommentedDirectiveFromImportedModule(resolvedImportPath);

  // returns early if there is no directive or no valid directive (same, but eventually no directive could have defaults)
  if (!importedFileCommentedDirective) {
    console.warn(
      "The imported file, whose path has been resolved, has no directive. It is thus ignored since the report on that circumstance is available on the imported file itself."
    );
    return { skip: true };
  }

  /* GETTING THE CORRECT DIRECTIVE INTERPRETATION OF STRATEGY FOR AGNOSTIC STRATEGIES MODULES IMPORTS. 
  (The Directive-First Architecture does not check whether the export and import Strategies are the same at this time, meaning a @clientLogics strategy could be wrongly imported and interpreted as a @serverLogics strategy. 
  
  NOW IT WILL TRY TO.
  
  However, Strategy exports are planned to be linting in the future within their own Agnostic Strategies Modules to ensure they respect import rules within their own scopes. It may also become possible to check whether the export and import Strategies are the same in the future when identifiers are defined and the same, especially for components modules where a convention could be to for all non-type export to be named and PascalCase.) */
  if (importedFileCommentedDirective === USE_AGNOSTIC_STRATEGIES) {
    const importingFileCommentedDirective = getStrategizedDirective(
      context,
      node
    );
    // FOR NOW
    importedFileCommentedDirective = importingFileCommentedDirective;

    if (importingFileCommentedDirective === null) {
      context.report({
        node,
        messageId: importNotStrategized,
      });
      return { skip: true };
    }

    // TEST START

    // OK!
    /* Let's recap: 
    We have the importingFileCommentedDirective. 
    Now we need to look at each the node's specifiers to address whether they have their match(es) on the importedFile. 
    For that, we immediately begin by creating a common instance of Linter:
    `const linter = new Linter();`
    We'll also need to immediately instantiate a messagesIds array that goes with it.
    Right below there will be instantiated the following arrays: 
    - importSpecifierLintMessages
    - importDefaultSpecifierLintMessages
    - importNamespaceSpecifierLintMessages
    Which will hold the linting messages, if any from each specifier type.
    Now, for each specifier...
    `node.specifiers.forEach((e) => {`
    ...we'll be addressing each of the specifier depending on their type:
    - "ImportSpecifier"
    - "ImportDefaultSpecifier"
    - "ImportNamespaceSpecifier"
    The kicker is, we're thus going to need a nested plugin to operate on the linter, with three rules for each specifier:
    - "ImportSpecifier" - verify-specifier-import-export-same-strategy
    - "ImportDefaultSpecifier" - verify-default-import-export-same-strategy
    - "ImportNamespaceSpecifier" - verify-namespace-import-some-strategy
    If there is an issue, each rules will report and that will be captured within the right LintMessages array
    - importSpecifierLintMessages = linter.verify( ... )
    - importDefaultSpecifierLintMessages = linter.verify( ... )
    - importNamespaceSpecifierLintMessages = linter.verify( ... )
    Then, if these array aren't empty, then push into the messagesIds the id, already on the top rule enforce-commented-directives-import-rules, that corresponds, without needing to surface any further details:
    - If there's a report on ImportSpecifier, that means the strategy weren't matching. Push the idea of the "strategies weren't matching, ImportSpecifier ver." message.
    - If there's a report on ImportDefaultSpecifier, that means the strategy weren't matching. Push the idea of the "strategies weren't matching, ImportDefaultSpecifier ver." message.
    - If there's a report on ImportNamespaceSpecifier, that means none of the strategy was exported in the imported file. Push the "none of the strategy were exported" message.
    We now have the messagesIds array. If it is empty, we do nothing, everything's fine. If it isn't, for each of its ids, we report the full node, with the id as messageId.

    And that's it. This is how we do a nested lint, then surface the errors so that they can be correctly shown on the parent rule.
    And so... The first thing first will be to create the plugin, and to create the three rules, and to not forget that each rule takes the importingFileCommentedDirective as its option, and also the name of the import in the case of ImportSpecifier.
    */

    // Get identifier name from node.
    // console.log({ nodeSpecifiers: node.specifiers });
    node.specifiers.forEach((e) => {
      switch (e.type) {
        case "ImportSpecifier":
          {
            console.log("ImportSpecifier");
            // console.log({ ImportSpecifier: e });
            console.log({ ImportSpecifier: e.imported.name });
            if (!e.imported.name) {
              console.log("This ImportSpecifier has no name.");
              break;
            }
          }
          break;
        case "ImportDefaultSpecifier":
          {
            console.log("ImportDefaultSpecifier");
            console.log({ ImportDefaultSpecifier: e });
          }
          break;
        case "ImportNamespaceSpecifier":
          {
            console.log("ImportNamespaceSpecifier");
            console.log({ ImportNamespaceSpecifier: e });
            // So here is what I want to do here.
            // import /* @agnosticComponents */ * as AgnosticComponents_Locals from "./components";
            // I want this line above to only import @agnosticComponents strategies from "./components". This is a feature that will ought to be tackled at the framework level, but this is the ultimate feature that makes it so that you could import all @agnosticComponents or all @clientComponents all the way to the root level of the application, safely.
            // Now, here, what I want to do, is simply to scan all exported namespaces, and find if any of them have the relevant strategy. If not, I can warn.
            // So that means it is still important to handle the ImportNamespaceSpecifier case.
            // And so, whereas it doesn't matter if no name was found on the imported file for ImportSpecifier, here it will warn if no same strategy is found on the exports.
          }
          break;

        default:
          break;
      }
    });

    // Find identifier in code.

    // Now we need the real importedFileCommentedDirective

    // IF THE IMPORT IS STRATEGIZED...
    // NOW WE CAN START LOOKING INTO LINTING THE IMPORT FILE DYNAMICALLY.

    // console.log("If the import is strategized...");
    // const eslint = new ESLint({
    //   overrideConfigFile: true,
    // });

    // ...and that shit is async, of course, it has to.
    // const results = eslint.lintFiles(filePaths);
    // so I'm going to have to do it manually in a synchronous way.

    const importedFileContent = fs.readFileSync(resolvedImportPath, "utf8");
    // const lines = SourceCode.splitLines(importedFileContent);
    // console.log({ lines });

    const linter = new Linter();

    const myPlugin = {
      rules: {
        "extract-ast": {
          meta: {
            schema: [
              {
                enum: ["option1", "option2", "option3"],
              },
            ],
            messages: {
              test: "This is a test.",
            },
          },
          create: (context) => {
            const options = context.options;
            // console.log({ options });
            // console.log(context.sourceCode.ast);
            // console.log(context.sourceCode.ast.body);
            // This is effectively reporting into nothingness, since this rule is virtual. If I am to report, I am to do so in the parent rule. ACTUALLY! Capturing this is the results (messages of linter.verify) makes this surface.
            context.report({
              loc: {
                start: { line: 1, column: 0 },
                end: { line: 1, column: context.sourceCode.lines[0].length },
              },
              messageId: "test",
            });
            return {};
          },
          //   ({
          //   Program(node) {
          //     // ast = node; // Capture the AST
          //     console.log({ node });
          //   },
          // }),
        },
      },
    };

    const messages = linter.verify(
      importedFileContent,
      // Let me get this straight.
      // That's a config.
      // That takes a plugin.
      // Which takes rules.
      // So the hierarchy is: config > plugin > rule.
      // But it may be circular.
      // this package is a plugin, with configs that utilize the plugin's rules
      // this package has configs and rules
      // the configs utilize its rules
      // now this one rule has a nested config, which has its nested plugin...
      // ...What this means as a whole is, I'm going to need to come up with a new file structure.
      // Here... Voilà.
      // _commons will house the top configs in a configs folder.
      // configs/agnostic20.js, configs/directive21.js
      // Then in this case, directive21 will have its own configs folder.
      // There it will have "cross strategy check" config. But also:
      // - constants
      // - rules (especially)
      // - utilities
      // Meaning agnostic20 and directive21 are the configs of common
      // "cross strategy check" config is the config of directive21
      // ... if needed we can keep on nesting.
      // What if I remove commons, since the library is a plugin?
      // library/constants, library/rules, library/utilities, library/configs
      // library/configs/agnostic20.js, library/configs/directive21.js
      // library/agnostic20, library/directive21
      // library/directive21/constants, library/directive21/rules, library/directive21/utilities, library/directive21/configs,
      // library/directive21/configs/acrossStrategies.js,
      // library/directive21/acrossStrategies
      // library/directive21/acrossStrategies/constants, library/directive21/acrossStrategies/rules, library/directive21/acrossStrategies/utilities

      // No need for a plugins folder. The plugin will be defined at library/directive21/configs/acrossStrategies.js (since that's the only place where it matters within the config), and imported in library/directive21/utilities/flows.js.
      // Actually it will be: {plugins: {rule1name: rule1, rule2name: rule2, rule3name: rule3}, ... }
      // But plugin needs a name.
      // So there will indeed be library/directive21/acrossStrategies/plugins

      // Ou alors, _commons remains, but all folders have their _commons.
      // library/directive21/_commons, library/directive21/acrossStrategies, library/directive21/acrossStrategies/_commons, library/directive21/acrossStrategies/config.js
      // And therefore all should also have an index.js. Let's keep config.js to make explicit that the folders are for configs.
      // No config folder, but indeed a folder for plugins.

      // ...Il est 20:00, ce sera pour une autre fois. :D
      // And I'm actually done so it's OK.
      // library,
      // library/index.js,
      // library/_commons, library/agnostic20, library/directive21
      // library/agnostic20/config.js, library/directive21/config.js
      // library/agnostic20/_commons, library/directive21/_commons, library/directive21/strategies
      // library/directive21/acrossStrategies/config.js
      // library/directive21/acrossStrategies/_commons
      // library/directive21/acrossStrategies/_commons/constants, library/directive21/acrossStrategies/_commons/plugins, library/directive21/acrossStrategies/_commons/rules, library/directive21/acrossStrategies/_commons/utilities,
      // library/directive21/acrossStrategies
      // (And its a rare time where I use camelCase for folder names, because here they actually represent JavaScript entities.)
      defineConfig({
        plugins: {
          myPlugin, // plugin ID is the object key
        },
        rules: {
          "myPlugin/extract-ast": ["warn", "option3"],
        },
        languageOptions: {
          // for compatibility with .ts and .tsx
          parser: tseslint.parser,
        },
        // rules: {
        //   "extract-ast": "warn",
        // },
      })
    );
    // console.log(ast);

    console.log({ messages });

    // Since I'm doing so nested linting, I need to manually included the tseslint.parser as a dependency.
    // TEST END
  }

  return { importedFileCommentedDirective };
};

/* importsFlow */

/**
 * The full flow for import traversals to enforce effective directives import rules.
 * @param {Readonly<import('@typescript-eslint/utils').TSESLint.RuleContext<typeof reExportNotSameMessageId | typeof importBreaksCommentedImportRulesMessageId | typeof noCommentedDirective | typeof commentedDirectiveVerificationFailed | typeof importNotStrategized | typeof exportNotStrategized, []>>} context The ESLint rule's `context` object.
 * @param {import('@typescript-eslint/types').TSESTree.ImportDeclaration} node The ESLint `node` of the rule's current traversal.
 * @param {USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS | USE_AGNOSTIC_STRATEGIES} currentFileCommentedDirective The current file's commented directive.
 * @returns Returns early if the flow needs to be interrupted.
 */
export const importsFlow = (context, node, currentFileCommentedDirective) => {
  // does not operate on `import type`
  if (node.importKind === "type") return;

  const result = importedFileFlow(context, node);

  if (result.skip) return;
  const { importedFileCommentedDirective } = result;

  if (
    isImportBlocked(
      currentFileCommentedDirective,
      importedFileCommentedDirective
    )
  ) {
    context.report({
      node,
      messageId: importBreaksCommentedImportRulesMessageId,
      data: {
        [commentedDirectiveMessage]: makeMessageFromCommentedDirective(
          currentFileCommentedDirective
        ),
        [specificViolationMessage]: findSpecificViolationMessage(
          currentFileCommentedDirective,
          importedFileCommentedDirective
        ),
      },
    });
  }
};

/* allExportsFlow */

/**
 * The full flow for export traversals, shared between `ExportNamedDeclaration`, `ExportAllDeclaration`, and `ExportDefaultDeclaration`, to ensure same commented directive re-exports in modules that aren't Agnostic Strategies Modules, and enforce strategized exports specifically in Agnostic Strategies Modules.
 * @param {Readonly<import('@typescript-eslint/utils').TSESLint.RuleContext<typeof reExportNotSameMessageId | typeof importBreaksCommentedImportRulesMessageId | typeof noCommentedDirective | typeof commentedDirectiveVerificationFailed | typeof importNotStrategized | typeof exportNotStrategized, []>>} context The ESLint rule's `context` object.
 * @param {import('@typescript-eslint/types').TSESTree.ExportNamedDeclaration | import('@typescript-eslint/types').TSESTree.ExportAllDeclaration | import('@typescript-eslint/types').TSESTree.ExportDefaultDeclaration} node The ESLint `node` of the rule's current traversal.
 * @param {USE_SERVER_LOGICS | USE_CLIENT_LOGICS | USE_AGNOSTIC_LOGICS | USE_SERVER_COMPONENTS | USE_CLIENT_COMPONENTS | USE_AGNOSTIC_COMPONENTS | USE_SERVER_FUNCTIONS | USE_CLIENT_CONTEXTS | USE_AGNOSTIC_CONDITIONS | USE_AGNOSTIC_STRATEGIES} currentFileCommentedDirective The current file's commented directive.
 * @returns Returns early if the flow needs to be interrupted.
 */
export const allExportsFlow = (
  context,
  node,
  currentFileCommentedDirective
) => {
  // does not operate on `export type`
  if (node.exportKind === "type") return;

  if (node.source) {
    const result = importedFileFlow(context, node);

    if (result.skip) return;
    const { importedFileCommentedDirective } = result;

    // ignores if this is NOT an Agnostic Strategies Module
    // verifies current node export strategy if "use agnostic strategies"
    if (currentFileCommentedDirective === USE_AGNOSTIC_STRATEGIES) {
      const exportStrategizedDirective = getStrategizedDirective(context, node);

      if (exportStrategizedDirective === null) {
        context.report({
          node,
          messageId: exportNotStrategized,
        });
        return;
      }

      currentFileCommentedDirective = exportStrategizedDirective;
    }

    if (currentFileCommentedDirective !== importedFileCommentedDirective) {
      context.report({
        node,
        messageId: reExportNotSameMessageId,
        data: {
          // currentFileCommentedDirective
          currentFileCommentedDirective,
          // importedFileCommentedDirective
          importedFileCommentedDirective,
        },
      });
      return;
    }
  } else {
    // ignores if this is NOT an Agnostic Strategies Module
    // verifies current node export strategy if "use agnostic strategies"
    if (currentFileCommentedDirective === USE_AGNOSTIC_STRATEGIES) {
      const exportStrategizedDirective = getStrategizedDirective(context, node);

      if (exportStrategizedDirective === null) {
        context.report({
          node,
          messageId: exportNotStrategized,
        });
        return;
      }

      // just to emphasize that this is the same short flow from above
      currentFileCommentedDirective = exportStrategizedDirective;
    }
  }
};
