const BinarySearchTree = require("./BinarySearchTree");
const TreeNode = require("./TreeNode");

// test
let root = new TreeNode(1);
let node2 = new TreeNode(2);
let node3 = new TreeNode(3);
let node4 = new TreeNode(4);
let node5 = new TreeNode(5);
let node6 = new TreeNode(6);
let node7 = new TreeNode(7);

root.left = node2;
root.right = node3;
node2.left = node4;
node2.right = node5;
node3.left = node6;
node3.right = node7;

const bst = new BinarySearchTree(root);

console.log("tree--------------------------------");
console.log(bst);
console.log("pre --------------------------------");
bst.preorderTraversal(bst.root, function (value) {
  console.log("xxx", value);
});
console.log("in  --------------------------------");
bst.inorderTraversal(bst.root);
console.log("post--------------------------------");
bst.postorderTraversal(bst.root);
console.log("leve--------------------------------");
bst.levelOrderTraversal(bst.root);

let node10 = new TreeNode(10);
// let node11 = new TreeNode(11);
// let node12 = new TreeNode(12);
// let node13 = new TreeNode(13);

console.log("xxxxxxxxxxxxxxxxxxx");
const bst2 = new BinarySearchTree(node10);
bst2.add(11);
bst2.add(12);
bst2.add(20);
bst2.add(30);
bst2.add(15);
bst2.add(8);
bst2.add(9);

console.log("xxxxxxxxxxxxxxxxxxx");
bst2.inorderTraversal(bst2.root);
console.log(bst2.sizing());
console.log(bst2.find());
console.log(bst2.find(11));
console.log(bst2.find(13));


console.log("%%%%%%%%%%%%%%");
const newRoot = new TreeNode(10);
const bst3 = new BinarySearchTree(newRoot);
bst3.insert(11);
bst3.insert(12);
bst3.insert(20);
bst3.insert(30);
bst3.insert(15);
bst3.insert(8);
bst3.insert(9);

console.log(bst3);
bst3.inorderTraversal(bst3.root);
console.log('----');
// bst3.del(8)
bst3.remove(10)
console.log('----');
bst3.inorderTraversal(bst3.root);
