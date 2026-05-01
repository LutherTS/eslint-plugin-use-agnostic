/**
 * @typedef {import("../../../types/_commons/typedefs.js").SourceCode} SourceCode
 * @typedef {import("../../../types/_commons/typedefs.js").VisitorKeys} VisitorKeys
 * @typedef {import("../../../types/_commons/typedefs.js").Node} Node
 */

/**
 * Walks an AST with a given callback.
 * @param {SourceCode} sourceCode The `SourceCode` where the AST comes from.
 * @param {(node: Node, parent: Node | null) => void} callback The callback that runs during the walk.
 */
export const walkAST = (sourceCode, callback) => {
  const ast = sourceCode.ast;
  const visitorKeys = sourceCode.visitorKeys;

  visitNode(ast, null, visitorKeys, callback);
};

/**
 * Recursively visits an AST node with a given callback.
 * @param {Node} node The node being visited.
 * @param {Node | null} parent The parent of the node being visited.
 * @param {VisitorKeys} visitorKeys The visitor keys of the node being visited.
 * @param {(node: Node, parent: Node | null) => void} callback The callback that runs during the walk.
 */
const visitNode = (node, parent, visitorKeys, callback) => {
  callback(node, parent);

  const keys = visitorKeys[node.type];
  if (!keys) return;

  for (const key of keys) {
    const val = node[key];
    if (!val) continue;

    if (Array.isArray(val)) {
      for (const child of val) {
        if (child && typeof child.type === "string") {
          visitNode(child, node, visitorKeys, callback);
        }
      }
    } else if (val && typeof val.type === "string") {
      visitNode(val, node, visitorKeys, callback);
    }
  }
};
