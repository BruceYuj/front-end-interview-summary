

if __name__ == "__main__":
    r = int(input())

    a = [[] for i in range(r)]
    f = [[0] * (i+1) for i in range(r)]
    for i in range(r):
        a[i] = list(map(int, input().split()))

    for i in range(r-1, -1, -1):
        for j in range(0, i+1):
            if i == r-1:
                f[i][j] = a[i][j]
            else:
                f[i][j] = max(f[i+1][j], f[i+1][j+1]) + a[i][j]
    
    print(f[0][0])