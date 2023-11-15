export const preOrderTraverse = root => {
  if (!root) return [];

  return [root.val, ...preOrderTraverse(root.left), ...preOrderTraverse(root.right)];
};

export const inOrderTraverse = root => {
  if (!root) return [];

  return [...inOrderTraverse(root.left), root.val, ...inOrderTraverse(root.right)];
};

export const postOrderTraverse = root => {
  if (!root) return [];

  return [...postOrderTraverse(root.left), ...postOrderTraverse(root.right), root.val];
};

export const levelOrderTraverse = root => {
  if (!root) return [];
  const res = [];
  const queue = [];
  queue.push(root);

  while (queue.length) {
    const node = queue.shift();
    res.push(node.val);
    if (node.left) queue.push(node.left);
    if (node.right) queue.push(node.right);
  }
  
  return res;
};
