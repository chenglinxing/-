class binarySearchTree {
  constructor(key) {
    this.root = null;
    this.left = null;
    this.right = null;
    this.key = key;
  }

  //给树新增节点
  insert(key) {
    //根据key创建节点
    const newNode = new binarySearchTree(key);
    if (this.root == null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  //新增节点的递归方法
  insertNode(node, newNode) {
    //向左查找
    if (newNode.key < node.key) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  //树的遍历方式
  //1.先序遍历
  preOrderTraversal(handler) {
    this.preOrderTraversalNode(this.root, handler);
  }

  preOrderTraversalNode(node, handler) {
    if (node != null) {
      //1.处理经过的节点
      handler(node);
      //2.处理经过的左子节点
      this.preOrderTraversalNode(node.left, handler);
      //3.处理经过的右子节点
      this.preOrderTraversalNode(node.right, handler);
    }
  }

  //2.中序遍历
  inorderTraversal(handler) {
    this.inorderTraversalNode(this.root, handler);
  }

  inorderTraversalNode(node, handler) {
    if (node != null) {
      //1.先处理根节点的左子节点
      this.inorderTraversalNode(node.left, handler);
      //2.处理根节点
      handler(node);
      //3.处理根节点的右子节点
      this.inorderTraversalNode(node.right, handler);
    }
  }

  //3.后序遍历
  postorderTraversal(handler) {
    this.postorderTraversalNode(this.root, handler);
  }

  postorderTraversalNode(node, handler) {
    if (node != null) {
      //1.先处理根节点的左子节点
      this.postorderTraversalNode(node.left, handler);

      //2.处理根节点的右子节点
      this.postorderTraversalNode(node.right, handler);

      //3.处理根节点
      handler(node);
    }
  }

  //获取最大值
  max() {
    //获取根节点
    let node = this.root;
    //依次向右查找直至null
    while (node.right != null) {
      node = node.right;
    }
    return node.key;
  }
}

const bst = new binarySearchTree();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(6);
// console.log(bst);

let resultString = "";
bst.postorderTraversal(function (key) {
  resultString += key.key + "--";
});
console.log(resultString);
