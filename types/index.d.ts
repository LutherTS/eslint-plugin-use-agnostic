import type { ESLint } from "eslint";

declare const plugin: ESLint.Plugin;

export default plugin;

// must be manually maintained
export const useAgnosticPluginName: "use-agnostic";
export const agnostic20ConfigName: "agnostic20";
export const directive21ConfigName: "directive21";
export const enforceEffectiveDirectivesRuleName: "enforce-effective-directives-import-rules";
export const enforceCommentedDirectivesRuleName: "enforce-commented-directives-import-rules";
