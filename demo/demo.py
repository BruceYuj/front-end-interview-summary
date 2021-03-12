class Solution:
    def isValidSerialization(self, preorder: str) -> bool:
        n = len(preorder)

        i = 0
        slots = 1
        while i < n:
            if slots == 0:
                return False

            if preorder[i] == ',':
                i += 1
                continue
            
            if preorder[i] == '#':
                i += 1
                slots -= 1
                continue
            
            while i < n and preorder != ',':
                i += 1
            
            slots += 1
        
        return slots == 0
            

solution = Solution()
ans = solution.isValidSerialization("9,3,4,#,#,1,#,#,2,#,6,#,#")

print(ans)