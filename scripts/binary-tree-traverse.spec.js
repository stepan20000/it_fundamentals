import { 
  preOrderTraverse, inOrderTraverse, postOrderTraverse, levelOrderTraverse,
 } from "./traverse";
import { 
  inOrderTraverseResult, myTree, postOrderTraverseResult, preOrderTraverseResult, levelOrderTraverseResult,
 } from "./my-tree";
import { TreeNode } from './tree-node';

describe('Binary Tree Traverse', () => {
  describe('preOrderTraverse', () => {
    it('should handle empty tree', () => {
      const output = preOrderTraverse(null);
      expect(output).toEqual([]);
    });
  
    it('should return [0, null, null] for single root', () => {
      const root = new TreeNode(0);
      const output = preOrderTraverse(root);
      expect(output).toEqual([0]);
    });
  
    it('should handle a small tree', () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);
  
      expect(preOrderTraverse(root)).toEqual([1, 2, 3]);
    });

    it('should correctly perform pre-order traversal', () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);
      root.left.left = null;
      root.left.right = new TreeNode(4);
      root.right.left = new TreeNode(5);
      root.right.right = null;
    
      const output = preOrderTraverse(root);
      expect(output).toEqual([1, 2, 4, 3, 5]);
    });
  
    it('should handle a larger tree', () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);
      root.left.left = new TreeNode(4);
      root.left.right = new TreeNode(5);
      root.right.left = new TreeNode(6);
      root.right.right = new TreeNode(7);
  
      expect(preOrderTraverse(root)).toEqual([1, 2, 4, 5, 3, 6, 7]);
    });
  
    it('should handle another larger tree', () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(7);
      root.left.left = null;
      root.left.right = new TreeNode(5);
      root.right.left = new TreeNode(6);
      root.right.right = new TreeNode(7);
  
      expect(preOrderTraverse(root)).toEqual([1, 2, 5, 7, 6, 7]);
    });
  
    it('should handle nodes with null left or right child', () => {
      const root = new TreeNode(1);
      root.right = new TreeNode(2);
  
      expect(preOrderTraverse(root)).toEqual([1, 2]);
    });
  
    it('should handle my tree node', () => {
      expect(preOrderTraverse(myTree)).toEqual(preOrderTraverseResult);
    });
  });

  describe('inOrderTraverse', () => {
    it('should handle empty tree', () => {
      const output = inOrderTraverse(null);
      expect(output).toEqual([]);
    });
  
    it('should return [null, 0, null] for single root', () => {
      const root = new TreeNode(0);
      const output = inOrderTraverse(root);
      expect(output).toEqual([0]);
    });
  
    it('should handle a small tree', () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);
      expect(inOrderTraverse(root)).toEqual([2, 1, 3]);
    });
  
    it('should correctly perform in-order traversal', () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);
      root.left.left = null;
      root.left.right = new TreeNode(4);
      root.right.left = new TreeNode(5);
      root.right.right = null;
  
      expect(inOrderTraverse(root))
      .toEqual([2, 4, 1, 5, 3]);
    });
  
    it('should handle a larger tree', () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);
      root.left.left = new TreeNode(4);
      root.left.right = new TreeNode(5);
      root.right.left = new TreeNode(6);
      root.right.right = new TreeNode(7);
    
      expect(inOrderTraverse(root))
        .toEqual([4, 2, 5, 1, 6, 3, 7]);
    });
  
    it('should handle another larger tree', () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(7);
      root.left.left = null;
      root.left.right = new TreeNode(5);
      root.right.left = new TreeNode(6);
      root.right.right = new TreeNode(7);
  
      expect(inOrderTraverse(root))
        .toEqual([2, 5, 1, 6, 7, 7]);
    });
  
    it('should handle nodes with null left or right child', () => {
      const root = new TreeNode(1);
      root.right = new TreeNode(2);
  
      expect(inOrderTraverse(root)).toEqual([1, 2]);
    });

    it('should handle my tree node', () => {
      expect(inOrderTraverse(myTree)).toEqual(inOrderTraverseResult);
    });
  });

  describe('postOrderTraverse', () => {
    it('should handle empty tree', () => {
      const output = postOrderTraverse(null);
      expect(output).toEqual([]);
    });
  
    it('should return [0] for single root', () => {
      const root = new TreeNode(0);
      const output = postOrderTraverse(root);
      expect(output).toEqual([0]);
    });
  
    it('should handle a small tree', () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);
  
      expect(postOrderTraverse(root)).toEqual([2, 3, 1]);
    });
  
    it('should correctly perform post-order traversal', () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);
      root.left.left = null;
      root.left.right = new TreeNode(4);
      root.right.left = new TreeNode(5);
      root.right.right = null;
  
      const output = postOrderTraverse(root);
      expect(output).toEqual([4, 2, 5, 3, 1]);
    });
  
    it('should handle a larger tree', () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);
      root.left.left = new TreeNode(4);
      root.left.right = new TreeNode(5);
      root.right.left = new TreeNode(6);
      root.right.right = new TreeNode(7);
  
      expect(postOrderTraverse(root)).toEqual([4, 5, 2, 6, 7, 3, 1]);
    });
  
    it('should handle another larger tree', () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(7);
      root.left.left = null;
      root.left.right = new TreeNode(5);
      root.right.left = new TreeNode(6);
      root.right.right = new TreeNode(7);
  
      expect(postOrderTraverse(root)).toEqual([5, 2, 6, 7, 7, 1]);
    });
  
    it('should handle nodes with null left or right child', () => {
      const root = new TreeNode(1);
      root.right = new TreeNode(2);
  
      expect(postOrderTraverse(root)).toEqual([2, 1]);
    });
  
    it('should handle my tree node', () => {
      expect(postOrderTraverse(myTree)).toEqual(postOrderTraverseResult);
    });
  });

  describe('levelOrderTraverse', () => {
    it('should handle empty tree', () => {
      const output = levelOrderTraverse(null);
      expect(output).toEqual([]);
    });
  
    it('should return [0] for single root', () => {
      const root = new TreeNode(0);
      const output = levelOrderTraverse(root);
      expect(output).toEqual([0]);
    });
  
    it('should handle a small tree', () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);
  
      expect(levelOrderTraverse(root)).toEqual([1, 2, 3]);
    });
  
    it('should correctly perform level-order traversal', () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);
      root.left.left = null;
      root.left.right = new TreeNode(4);
      root.right.left = new TreeNode(5);
      root.right.right = null;
  
      const output = levelOrderTraverse(root);
      expect(output).toEqual([1, 2, 3, 4, 5]);
    });
  
    it('should handle a larger tree', () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(3);
      root.left.left = new TreeNode(4);
      root.left.right = new TreeNode(5);
      root.right.left = new TreeNode(6);
      root.right.right = new TreeNode(7);
  
      expect(levelOrderTraverse(root)).toEqual([1, 2, 3, 4, 5, 6, 7]);
    });
  
    it('should handle another larger tree', () => {
      const root = new TreeNode(1);
      root.left = new TreeNode(2);
      root.right = new TreeNode(7);
      root.left.left = null;
      root.left.right = new TreeNode(5);
      root.right.left = new TreeNode(6);
      root.right.right = new TreeNode(7);
  
      expect(levelOrderTraverse(root)).toEqual([1, 2, 7, 5, 6, 7]);
    });
  
    it('should handle nodes with null left or right child', () => {
      const root = new TreeNode(1);
      root.right = new TreeNode(2);
  
      expect(levelOrderTraverse(root)).toEqual([1, 2]);
    });
  
    it('should handle my tree node', () => {
      expect(levelOrderTraverse(myTree)).toEqual(levelOrderTraverseResult);
    });
  });
});
