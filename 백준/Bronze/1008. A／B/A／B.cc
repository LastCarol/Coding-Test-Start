#include <stdio.h>
 
int main(int argc, char const *argv[]) {
    long double a;
    long double b;
 
    scanf("%Lf %Lf", &a, &b);	// long double 입력은 %Lf
 
    printf("%.13Lf", a/b);
    return 0;
}