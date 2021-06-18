
def dfs(row, s, s1, cnt, x):
    
    if cnt == m:
        y = 0
        for i in range(m):
            if s1[i] == 2:
                y += 1
                if g[row+1][i] == 'H': return
                if i+1 < m and s1[i+1] == 2: return
                if i+2 < m and s1[i+2] == 2: return
        
        res = 0
        
        for i in range(m-1, -1, -1):
            res = res * 3 + s1[i]
        
        f[row+1][res] = max(f[row+1][res], f[row][x] + y)
        return 
        
    
    if s[cnt] == 2:
        dfs(row,s, s1+[1], cnt+1, x)
    elif s[cnt] == 1:
        dfs(row, s, s1+[0], cnt+1, x)
    else:
        if not s1 or s1[-1] != 2:
            dfs(row, s, s1+[2], cnt+1, x)
        dfs(row, s, s1+[0], cnt+1, x)
        

if __name__ == "__main__":
    n, m = map(int, input().split())
    
    M = 1
    
    for i in range(m):
        M *= 3
        
    f = [[float("-inf")] * M for i in range(n+1)]
    f[0][0] = 0
    
    g = [[''] * (m) for i in range(n+1)]
    
    for i in range(1, n+1):
        g[i] = input()
    
    for i in range(n):
        for j in range(M):
            state = [0] * m 
            for k in range(m):
                state[k] = j % 3
                j //= 3
            
            
            dfs(i, state, [], 0, j)
    
    ans = 0
    
    for i in range(M):
        ans = max(ans, f[n][i])
    
    for i in range(1, n+1):
        print(f[i])
    print(ans)