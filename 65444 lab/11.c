// // Iterative

// #include <stdio.h>
// int main()
// {
//     int i, fact = 1, number = 6;
//     //printf("Enter the number:");
//     //scanf("%d",&number);
//     for (i = 1; i <= number; i++)
//     {
//         fact = fact * i;
//     }
//     printf("Factorial of %d is:%d", number, fact);
//     return 0;
// }

// recursive
#include <stdio.h>
long factorial(int n)
{
    if (n == 0)
        return 1;
    else
        return (n * factorial(n - 1));
}
int main()
{
    int number = 6;
    long fact;
    // printf("Enter a number:");
    // scanf("%d", &number);
    fact = factorial(number);

    printf("Factorial of %d is %ld\n", number, fact);
    return 0;
}
