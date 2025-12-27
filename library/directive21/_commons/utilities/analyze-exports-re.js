/**
 * @typedef {import("../../../../types/_commons/typedefs.js").SourceCode} SourceCode
 * @typedef {import("../../../../types/_commons/typedefs.js").ImportDeclaration} ImportDeclaration
 * @typedef {import("../../../../types/_commons/typedefs.js").ExportAllDeclaration} ExportAllDeclaration
 * @typedef {import("../../../../types/_commons/typedefs.js").ExportNamedDeclarationWithSource} ExportNamedDeclarationWithSource
 * @typedef {import("../../../../types/_commons/typedefs.js").ExportNamedDeclarationWithoutSourceWithMultiple} ExportNamedDeclarationWithoutSourceWithMultiple
 * @typedef {import("../../../../types/_commons/typedefs.js").ExportNamedDeclarationWithoutSourceWithSingle} ExportNamedDeclarationWithoutSourceWithSingle
 * @typedef {import("../../../../types/_commons/typedefs.js").ExportDefaultDeclaration} ExportDefaultDeclaration
 */

import { walkAST } from "../../../_commons/utilities/walk-ast.js";

/**
 * Analyzes a source code's exports to detect re-exports.
 * @param {SourceCode} sourceCode The `SourceCode` to analyze.
 * @returns An object with the `reExportsWithSource` key tracking the direct re-exports from an imported source in an array and the `reExportsViaLocal` key tracking the indirect re-exports from an imported source in an array.
 */
export const analyzeExportsForReExports = (sourceCode) => {
  /** @type {Map<string, {source: string, importNode: ImportDeclaration}>} */
  const importMap = new Map();

  /** @type {{node: ExportAllDeclaration | ExportNamedDeclarationWithSource, source: string}[]} */
  const reExportsWithSource = [];

  /** @type {{identifier: string, node: ExportNamedDeclarationWithoutSourceWithMultiple | ExportNamedDeclarationWithoutSourceWithSingle | ExportDefaultDeclaration, importNode: ImportDeclaration, source: string}[]} */
  const reExportsViaLocal = [];

  walkAST(sourceCode, (node) => {
    if (node.type === "ImportDeclaration") {
      const moduleName = node.source?.value;
      if (moduleName) {
        for (const spec of node.specifiers) {
          importMap.set(spec.local.name, {
            source: moduleName,
            importNode: node,
          });
        }
      }
    }

    if (
      node.type === "ExportAllDeclaration" &&
      node.exportKind === "value" &&
      node.source
    ) {
      reExportsWithSource.push({ node, source: node.source.value });
    }

    if (
      node.type === "ExportNamedDeclaration" &&
      node.exportKind === "value" &&
      node.source
    ) {
      reExportsWithSource.push({ node, source: node.source.value });
    }

    if (
      node.type === "ExportNamedDeclaration" &&
      node.exportKind === "value" &&
      node.source === null &&
      node.specifiers?.length
    ) {
      for (const spec of node.specifiers) {
        const local = spec.local?.name;
        if (importMap.has(local)) {
          const info = importMap.get(local);
          reExportsViaLocal.push({
            identifier: local,
            exportNode: node,
            importNode: info.importNode,
            source: info.source,
          });
        }
      }
    }

    if (
      node.type === "ExportDefaultDeclaration" &&
      node.exportKind === "value" &&
      node.declaration.type === "Identifier"
    ) {
      const name = node.declaration.name;
      if (importMap.has(name)) {
        const info = importMap.get(name);
        reExportsViaLocal.push({
          identifier: name,
          exportNode: node,
          importNode: info.importNode,
          source: info.source,
        });
      }
    }
  });

  return { reExportsWithSource, reExportsViaLocal };
};
