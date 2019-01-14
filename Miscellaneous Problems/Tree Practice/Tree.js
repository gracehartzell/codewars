// ==============================
// PLEASE READ THE USAGE BELOW BEFORE WRITING CODE
// The goal is for you to write the code for the Tree structure
// so that it can be used by others in the examples below:
// ==============================

// Creating the tree && connecting nodes
// ==================
// let myTree = new Tree(5);
// myTree.addNode(1);
// myTree.addNode(10);

// VISUAL:     5
//            / \
//           1   10

// Adding grand children:
// ==================
// myTree.addNode(-5)
// myTree.addNode(2)
// myTree.addNode(8)
// myTree.addNode(50)
//
// VISUAL:        5
//             /    \
//            1      10
//          /  \    /  \
//        -5    2   8   50

//printBreadthFirst:
//==================
// VISUAL:        5
//             /    \
//            1      10
//          /  \    /  \
//        -5    2   8   50
//myTree.printBreadthFirst()
//5,1,10,-5,2,8,50

// Removing children:
// ==================
// VISUAL:        5
//             /    \
//            1      10
//          /  \    /  \
//        -5    2  8    50

// myTree.removeNode(10)
// VISUAL:       5
//             /   \
//            1     8
//          /  \     \
//        -5    2     50

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(value) {
    this.root = {
      value: value,
      left: null,
      right: null
    };
  }
  addNode(value) {
    const nodeToAdd = new Node(value);
    if (this.root === null) this.root = nodeToAdd;
    else this.nodeInsertLocation(this.root, nodeToAdd);
  }

  nodeInsertLocation(node, nodeToAdd) {
    if (nodeToAdd.value < node.value) {
      if (node.left === null) node.left = nodeToAdd;
      else this.nodeInsertLocation(node.left, nodeToAdd);
    } else {
      if (node.right === null) node.right = nodeToAdd;
      else this.nodeInsertLocation(node.right, nodeToAdd);
    }
  }

  // printBreadthFirst()

  removeChild(value) {
    this.root = this.removeNode(this.root, value);
  }

  removeNode(node, value) {
    if (node === null) return null;
    else if (value < node.value) {
      node.left = this.removeNode(node.left, value);
      return node;
    } else if (value > node.value) {
      node.right = this.removeNode(node.right, value);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      const current = this.findMinimumNode(node.right);
      node.value = current.value;

      node.right = this.removeNode(node.right, current.value);
      return node;
    }
  }

  findMinimumNode(node) {
    node.left === null ? node : this.findMinimumNode(node.left);
  }
}

module.exports = Tree;
