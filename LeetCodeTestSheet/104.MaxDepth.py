# Given the root of a binary tree, return its maximum depth.

# A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.



# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:

        # if root is null return 0
        if root is None:
           return 0
        else:
        #  created a variable for the left depth for max depth on left root.left
            left_depth = self.maxDepth(root.left)
    
        #  created a variable for the right depth for max depth on right root.right
            right_depth = self.maxDepth(root.right)

        # return max depth leftDepth + rightDepth + 1
        return max(left_depth, right_depth) + 1