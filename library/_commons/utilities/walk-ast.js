/**
 * @typedef {import("../../../types/_commons/typedefs.js").SourceCode} SourceCode
 * @typedef {import("../../../types/_commons/typedefs.js").VisitorKeys} VisitorKeys
 * @typedef {import("../../../types/_commons/typedefs.js").Node} Node
 */

/**
 * Walks an AST with a given callback.
 * @param {SourceCode} sourceCode
 * @param {(node: Node, parent: Node | null) => void} callback
 */
export const walkAST = (sourceCode, callback) => {
  const ast = sourceCode.ast;
  const visitorKeys = sourceCode.visitorKeys;

  visitNode(ast, null, visitorKeys, callback);
};

/**
 * Recursively visits an AST node with a given callback.
 * @param {Node} node
 * @param {Node | null} parent
 * @param {VisitorKeys} visitorKeys
 * @param {(node: Node, parent: Node | null) => void} callback
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
