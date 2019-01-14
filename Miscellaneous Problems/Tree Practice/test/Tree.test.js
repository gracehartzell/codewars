const expect = require("chai").expect;
const Tree = require("../Tree");

let myTree = new Tree(5);

describe("Tree testing", () => {
  describe("Creation of tree", () => {
    it("should create a new instance of Tree", () => {
      expect(myTree).to.eql({ value: 5, children: [] });
    });
  });

  describe("Adding nodes", () => {
    it("should create a child node on tree", () => {
      myTree.addNode(1);
      myTree.addNode(10);

      expect(myTree.children[0]).to.eql(1);
      expect(myTree.children[1]).to.eql(10);
    });
    it("should create a grandchild node on tree", () => {
      myTree.addNode(-5);
      myTree.addNode(2);
      myTree.addNode(8);
      myTree.addNode(50);

      expect(myTree.children[0].children[0]).to.eql(-5);
      expect(myTree.children[0].children[1]).to.eql(2);
      expect(myTree.children[1].children[0]).to.eql(8);
      expect(myTree.children[1].children[1]).to.eql(50);
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
