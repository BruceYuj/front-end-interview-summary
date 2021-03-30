from typing import List



if __name__ == "__main__":
    
    while True:
        
        h = list(map(int, input().split()))
        n = h[0]
        
        if n == 0: break
        
        a = [-1] * (n+2)
        a[1:n+1] = h[1:]
        
        st = [0]
        ans = 0
        for i in range(1, n+2):
            print(i)
            if a[st[-1]] < a[i]:
                st.append(i)
            else:
                while st and a[st[-1]] >= a[i]:
                    t = st.pop()
                    ans = max(ans, a[t] * (i - st[-1]-1))
                st.append(i)
        
        print(ans)
    