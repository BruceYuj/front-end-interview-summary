class Solution:
    def minOperations(self, target, arr):
        def bSearch(a, v):
            l = 0
            r = len(a) - 1
            while l < r:
                mid = (l+r) // 2
                if a[mid] >= v:
                    r = mid
                else: l = mid+1
            
            return l

        h = []
        d = {}
        for i in range(len(target)):
            d[target[i]] = i
        
        for x in arr:
            if x in d: h.append(d[x])
        
        a = []

        for i in range(len(h)):
            if not a or h[i] > a[-1]:
                a.append(h[i])
            else:
                index = bSearch(a, h[i])
                a[index] = h[i]
        
        return len(target) -  len(a)

solution = Solution()
a1 = [995168292,13690313,293160801,642482000,810529261,98173438,456394738,882168981,961299834,794671198]
a2 = [13690313,794671198,957156640,882168981,882168981,293160801,794671198,111281680,293160801,642482000]
solution.minOperations(a1, a2)