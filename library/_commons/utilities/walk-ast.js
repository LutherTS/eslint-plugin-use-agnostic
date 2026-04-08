/**
 * @typedef {import("../../../types/_commons/typedefs.js").SourceCode} SourceCode
 * @typedef {import("../../../types/_commons/typedefs.js").VisitorKeys} VisitorKeys
 * @typedef {import("../../../types/_commons/typedefs.js").Node} Node
 */

/**
 * $COMMENT#JSDOC#DEFINITIONS#WALKAST
 * @param {SourceCode} sourceCode $COMMENT#JSDOC#PARAMS#SOURCECODEA
 * @param {(node: Node, parent: Node | null) => void} callback $COMMENT#JSDOC#PARAMS#CALLBACK
 */
export const walkAST = (sourceCode, callback) => {
  const ast = sourceCode.ast;
  const visitorKeys = sourceCode.visitorKeys;

  visitNode(ast, null, visitorKeys, callback);
};

/**
 * $COMMENT#JSDOC#DEFINITIONS#VISITNODE
 * @param {Node} node $COMMENT#JSDOC#PARAMS#NODEB
 * @param {Node | null} parent $COMMENT#JSDOC#PARAMS#PARENT
 * @param {VisitorKeys} visitorKeys $COMMENT#JSDOC#PARAMS#VISITORKEYS
 * @param {(node: Node, parent: Node | null) => void} callback $COMMENT#JSDOC#PARAMS#CALLBACK
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
