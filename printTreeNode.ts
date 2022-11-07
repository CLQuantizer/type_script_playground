import TreeNode from "./TreeNode";

let tn1 = new TreeNode(null, null, 1, false);
let tn2 = new TreeNode(null, null, 2, false);
let tn = new TreeNode(tn1, tn2, 3, false);

function printRoot (root?: TreeNode): null {
    if (root == null) {
        return;
    } else {
        printRoot(root.left);
        console.log("[" + root.val + "]");
        printRoot(root.right);
    }
}
printRoot(tn);