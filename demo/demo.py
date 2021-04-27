def move(pos):
    tmp = a[pos]
    for i in range(pos-1, -1, -1):
        a[i+1] = a[i]
    
    a[0] = tmp

if __name__ == "__main__":
    n, q = map(int, input().split())

    a = list(map(int, input().split()))

    q = list(map(int, input().split()))
    for t in q:
        pos = 0

        for j in range(n):
            if a[j] == t:
                pos = j
                break
        
        print(pos+1)
        move(pos)