def func(n):
    if n==0:
        return
    func(n>>1)
    print(n&10,end="")

n=int(input("Enter the number:"))
func(n)