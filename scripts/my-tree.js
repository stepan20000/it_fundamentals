import { TreeNode } from "./tree-node";


/*
                    F
                  /   \
                 B     G
                / \     \
               A   D     I
                  / \   /
                 C   E H

*/


export const myTree = new TreeNode('F');
myTree.left = new TreeNode('B');
myTree.right = new TreeNode('G');
myTree.left.left = new TreeNode('A');
myTree.left.right = new TreeNode('D');
myTree.left.right.left = new TreeNode('C');
myTree.left.right.right = new TreeNode('E');
myTree.right = new TreeNode('G');
myTree.right.right = new TreeNode('I');
myTree.right.right.left = new TreeNode('H');

export const preOrderTraverseResult = ['F','B','A','D','C','E','G','I','H'];
export const inOrderTraverseResult = ['A','B','C','D','E','F','G','H','I'];
export const postOrderTraverseResult = ['A','C','E','D','B','H','I','G','F'];
export const levelOrderTraverseResult = ['F','B','G','A','D','I','C','E','H'];

