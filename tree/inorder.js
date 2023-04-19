//中序遍历

// 对根节点的左子树进行
// 访问根节点
// 对根节点的右子树进行
const bt = require("./binaryTree");

const inorder = (root) => {
  if (!root) return;
  inorder(root.left);
  console.log(root.val);
  inorder(root.right);
};

inorder(bt);
