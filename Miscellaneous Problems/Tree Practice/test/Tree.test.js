const expect = require("chai").expect;
const Tree = require("../Tree");

let myTree = new Tree(5);

/*
  implement the following :
  Properties:
  value -> returns value of node it was given when it was created
  children -> returns direct children of a node as an array
  Methods: 
  addChild()
  printBreadthFirst()
  removeChild()
*/

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
});
