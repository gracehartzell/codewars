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

  printBreadthFirst() {
    const queue = [this.root];
    let node,
      results = [];

    while (queue.length > 0) {
      node = queue.shift();
      results.push(node.value);

      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return results;
  }
}

module.exports = Tree;
