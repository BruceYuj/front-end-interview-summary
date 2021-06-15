
def dfs(pa, pb, le, path):
    global ans
    
    if not le:
        ans.append(path)
        return 
    
    if pa == la or pb == lb: return 

    for i in range(26):
        pa1 = fa[pa][i]
        pb1 = fb[pb][i]
        
        if pa1 == la or pb1 == lb: continue
        dfs(pa1+1, pb1+1, le-1, chr(i+ord('a')) + path)
    

if __name__ == "__main__":
    sa = input()
    sb = input()
    la = len(sa)
    lb = len(sb)
    
    f = [[0] * (lb+1) for i in range(la+1)]
    
    for i in range(la-1, -1, -1):
        for j in range(lb-1, -1, -1):
            if sa[i] == sb[j]:
                f[i][j] = f[i+1][j+1] + 1
            else:
                f[i][j] = max(f[i+1][j], f[i][j+1])
    
    ans = []
    
    fa = [[la] * 26 for i in range(la+1)]
    fb = [[lb] * 26 for i in range(lb+1)]
    
    for i in range(la-1, -1, -1):
        for j in range(26):
            if ord(sa[i]) - ord('a') == j:
                fa[i][j] = i
            else:
                fa[i][j] = fa[i+1][j]
    
    for i in range(lb-1, -1, -1):
        for j in range(26):
            if ord(sb[i]) - ord('a') == j:
                fb[i][j] = i
            else:
                fb[i][j] = fb[i+1][j]
        
    dfs(0, 0, f[0][0], '')

    for x in ans:
        print(x)
        
    