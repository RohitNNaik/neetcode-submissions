/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     constructor(val = 0, left = null, right = null) {
 *         this.val = val;
 *         this.left = left;
 *         this.right = right;
 *     }
 * }
 */

class Solution {
    /**
     * @param {TreeNode} root
     * @return {number}
     */
    diameterOfBinaryTree(root) {
        let res = 0;

        function dfs(root) {
            if (!root) {
                return 0;
            }
            let l = Math.max(dfs(root.left));
            let r = Math.max(dfs(root.right));

            res = Math.max(res, l + r)
            return 1 + Math.max(l, r)
        }

        dfs(root);
        return res;

    }
}
