import sys
sys.setrecursionlimit(400020)

def add(a, b):
    global idx
    e[idx] = b
    ne[idx] = h[a]
    h[a] = idx
    idx += 1

def hasEuler():

    for i in range(1, n+1):
        if flag == 1:
            if (gin[i] + gout[i]) % 2 != 0: return False
        else:
            if gin[i] != gout[i]: return False
        
    return True

def dfs(u):
    
    i = h[u]

    while i != -1:
        if used[i]:
            h[u] = ne[i]
            i = ne[i]
            continue
        
        h[u] = ne[i]
        # used[i] = True
        if flag == 1: used[i^1] = True
        
        print("dfs %d" %i)
        dfs(e[i])
        
        if flag == 1: 
            if i % 2 == 1:
                st.append(-(i//2+1))
            else:
                st.append(i//2+1)
        else:
            st.append(i+1)
        
        i = ne[i]
    
    # print("YE")    
    
if __name__ == "__main__":
    flag = int(input())
    
    n, m = map(int, input().split())
    
    h = [-1] * (n+10)
    e = [0] * (m+10)
    ne = [0] * (m+10)
    idx = 0
    
    gin = [0] * (n+10)
    gout = [0] * (n+10)
    
    
    if flag == 1:
        e = [0] * (4*m+10)
        ne = [0] * (4*m+10)
    
    for i in range(m):
        x, y = map(int, input().split())
        
        add(x, y)
        gout[x] += 1
        gin[y] += 1
        
        if flag == 1:
            add(y, x)
    
    st = []
    used = [False] * (4*m+10)
     
    if not hasEuler():
        print("NO")
        exit()
    
    for i in range(1, n+1):
        if h[i] != -1:
            dfs(i)
            break
    
    if len(st) < m:
        print("NO")
        exit()
    
    print("YES")    
    while st:
        print(st.pop(), end=" ")
    
    
    
    