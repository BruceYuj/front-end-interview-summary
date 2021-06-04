import heapq
from collections import defaultdict

class Solution:
    def assignTasks(self, servers, tasks) :
        
        n = len(servers)
        m = len(tasks)
        hp = []
        d = defaultdict(list)
        
        for i in range(n):
            hp.append((servers[i], i))
        
        heapq.heapify(hp)
        
        ans = [-1] * m
        
        cnt = 0
        
        for i in range(m):
            if cnt < i: cnt = i
                
                
            if d[cnt]:
                for x in d[cnt]:
                    heapq.heappush(hp, x)
                
                d[cnt] = []
            
            if not hp:
                cnt += 1
                while not d[cnt]:
                    cnt += 1
                
                for x in d[cnt]:
                    heapq.heappush(hp, x)
                d[cnt] = []                

                
            t = heapq.heappop(hp)

            ans[i] = t[1]
            d[i+tasks[i]].append(t)
        
        return ans
        

so = Solution()
ans = so.assignTasks([31,96,73,90,15,11,1,90,72,9,30,88], [87,10,3,5,76,74,38,64,16,64,93,95,60,79,54,26,30,44,64,71])