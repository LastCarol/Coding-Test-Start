r1,c1,r2,c2=map(int,input().split())
L=[[0 for i in range(c2-c1+1)] for j in range(r2-r1+1)]
for i in range(c1,c2+1):
    x=i-c1
    k=abs(i)
    for j in range(r2,r1-1,-1):
        y=j-r1
        if i==j and j>0:
            L[y][x]=(2*k+1)**2
        elif i<=0 and -k<=j<=k:
            L[y][x]=(2*k+1)**2-2*k-(k-j)
        elif i>0 and -k<=j<=k:
            L[y][x]=(2*k+1)**2-8*k+(k-j)
        elif j>0:
            L[y][x]=(2*j+1)**2-(j-i)
        elif j<0:
            L[y][x]=(2*abs(j)+1)**2-6*abs(j)+(abs(j)-i)
k=0
for i in L:
    k=max(k,max(i))
p=0
while k>0:
    p+=1
    k//=10
for i in L:
    for j in i:
        print(str(j).rjust(p,' '),end=' ')
    print()