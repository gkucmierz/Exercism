//
// This is only a SKELETON file for the 'Satellite' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const isUniq = arr => arr.length === new Set(arr).size;
const unify = arr => arr.slice().sort().join('');
const node = (value, left = {}, right = {}) => ({ value, left, right });

const tft = (preorder, inorder) => {
  if (preorder.length === 0) return {};
  const idx = inorder.indexOf(preorder[0]);
  const lefti = inorder.slice(0, idx);
  const righti = inorder.slice(idx + 1);
  const leftp = preorder.slice(1, lefti.length + 1);
  const rightp = preorder.slice(lefti.length + 1);
  return node(preorder[0], tft(leftp, lefti), tft(rightp, righti));
};

export const treeFromTraversals = (preorder, inorder) => {
  if (preorder.length !== inorder.length) throw Error('traversals must have the same length');
  if (unify(preorder) !== unify(inorder)) throw Error('traversals must have the same elements');
  if (!isUniq(preorder) || !isUniq(inorder)) throw Error('traversals must contain unique items');
  if (preorder.length === 0 && inorder.length === 0) return {};
  if (preorder.length === 1 && inorder.length === 1) return node(preorder[0]);
  return tft(preorder, inorder);
};
