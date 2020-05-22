/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

var longestZigZag = function(root) {
    let map = {};
    let map2 = {};

    return dfs(root);

    function dfs(root) {
        if(!root) return 0;


        let left = helper(root.left, true);
        let right = helper(root.right, false);

        left = Math.max(left, dfs(root.left));
        right = Math.max(right, dfs(root.right));

        return Math.max(left, right); 
    }


    function helper(node, direction) {
        if(!node) return 0;
        if(direction) {
            if(map2[node]) return 1 + map2[node];
            map2[node] = helper(node.right, !direction);
            return 1+map2[node];
        } else{
            if(map[node]) return 1+map[node];
            map[node] = helper(node.left, !direction);

            return 1+map[node];
        }
    }
};

let root = makeTreeFromArr([1,1,1,1,null,1,null,null,1,1]);

console.log(longestZigZag(root));