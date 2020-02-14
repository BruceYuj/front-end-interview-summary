/**
 * 题目: https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-tree/submissions/
 */

/**
 * 解法一：分治法
 * 时间复杂度为O(n^2), n 是二叉树节点个数，空间复杂度为O(H)，H为二叉树高度
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    
  let pLeft = hasNode(root.left, p);
  let pRight = hasNode(root.right, p);
  let qLeft = hasNode(root.left, q);
  let qRight = hasNode(root.right, q);

  if(pLeft&&qRight || pRight&&qLeft) return root;
  if(pLeft === pRight) return p;
  if(qLeft === qRight) return q;
  if(pLeft) return lowestCommonAncestor(root.left, p, q);
  if(pRight) return lowestCommonAncestor(root.right, p, q);

  function hasNode(root, node) { // 当前子树是否存在 node 结点
      if(!root) return false;
      if(root.val === node.val) return true;
      return hasNode(root.left, node) || hasNode(root.right, node);
  }
};

/**
 * 解法二：DFS，思路为深度遍历分别找到root->q，root->p的路径，答案为路径公共部分的最后一个节点。
 * 时间复杂度为O(n), n为二叉树的结点个数，空间复杂度为O(H), H为二叉树的高度。
 */
var lowestCommonAncestor = function(root, p, q) {
    
    if(!root || root == p || root == q) return root;

    let left = lowestCommonAncestor(root.left, p, q);

    if(left && left !== p && left !== q) return left;

    let right = lowestCommonAncestor(root.right, p, q);
    if(left !== null && right !== null) return root;

    if(left === null) return right;
    else return left;
};

/* 解法3：DFS, 在左、右子树中分别查找是否包含p或q：
如果以下两种情况（左子树包含p，右子树包含q/左子树包含q，右子树包含p），那么此时的根节点就是最近公共祖先
如果左子树包含p和q，那么到root->left中继续查找，最近公共祖先在左子树里面
如果右子树包含p和q，那么到root->right中继续查找，最近公共祖先在右子树里面8
*/
var lowestCommonAncestor = function(root, p, q) {
    
  if(!root || root == p || root == q) return root;

  let left = lowestCommonAncestor(root.left, p, q);

  if(left && left !== p && left !== q) return left;

  let right = lowestCommonAncestor(root.right, p, q);
  if(left !== null && right !== null) return root;

  if(left === null) return right;
  else return left;
};

// 解法三：代码简化版本
var lowestCommonAncestor = function(root, p, q) {
    
  if(!root || root == p || root == q) return root;

  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if(left && right) return root;

  return left?left:right;
};