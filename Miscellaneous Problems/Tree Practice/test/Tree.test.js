const expect = require("chai").expect;
const Tree = require("../Tree");

describe("Tree testing", () => {
  describe("Creation of tree", () => {
    it("should create a new instance of Tree with given value", () => {
      let myTree = new Tree(5);

      expect(myTree.root.value).to.eql(5);
    });
  });

  describe("Adding nodes", () => {
    it("should create a child node on tree", () => {
      let myTree = new Tree(5);
      myTree.addNode(1);
      myTree.addNode(10);

      expect(myTree.root.left.value).to.eql(1);
      expect(myTree.root.right.value).to.eql(10);
    });
    it("should create a grandchild node on tree", () => {
      let myTree = new Tree(5);
      myTree.addNode(1);
      myTree.addNode(10);
      myTree.addNode(-5);
      myTree.addNode(2);
      myTree.addNode(8);
      myTree.addNode(50);

      expect(myTree.root.left.value).to.eql(1);
      expect(myTree.root.right.value).to.eql(10);
      expect(myTree.root.left.left.value).to.eql(-5);
      expect(myTree.root.left.right.value).to.eql(2);
      expect(myTree.root.right.left.value).to.eql(8);
      expect(myTree.root.right.right.value).to.eql(50);
    });
    it("should take appropriate shape", () => {
      let myTree = new Tree(5);
      myTree.addNode(1);
      myTree.addNode(10);
      myTree.addNode(-5);
      myTree.addNode(2);
      myTree.addNode(8);
      myTree.addNode(50);

      expect(myTree.root.left).to.eql({
        value: 1,
        left: { value: -5, left: null, right: null },
        right: { value: 2, left: null, right: null }
      });
      expect(myTree.root.right).to.eql({
        value: 10,
        left: { value: 8, left: null, right: null },
        right: { value: 50, left: null, right: null }
      });
      expect(myTree.root.right.left).to.eql({
        value: 8,
        left: null,
        right: null
      });
    });
  });

  describe("Breadth First Search", () => {
    it("should print all nodes in BFS order", () => {
      myTree.addNode(1);
      myTree.addNode(10);
      myTree.addNode(-5);
      myTree.addNode(2);
      myTree.addNode(8);
      myTree.addNode(50);

      expect(myTree.printBreadthFirst()).to.eql(5, 1, 10, -5, 2, 8, 50);
    });
  });

  describe("Removal of child", () => {
    it("should remove a child with given value", () => {
      myTree.addNode(1);
      myTree.addNode(10);
      myTree.addNode(-5);
      myTree.addNode(2);
      myTree.addNode(8);
      myTree.addNode(50);

      myTree.removeChild(8);

      expect(myTree.children[1]).to.eql([
        { value: 10, children: [{ value: 50, children: null }] }
      ]);

      myTree.removeChild(50);

      expect(myTree.children[1]).to.eql([{ value: 10, children: null }]);
    });
  });
});
