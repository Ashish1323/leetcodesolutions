%{ 
#include<stdio.h> 
%} 
%token L D 
%% 
s: id { return 1; } 
id: l n 
| l {;} 
; 
n: l n 
| d n 
| l 
| d {;} 
; 
l: L {;} 
; 
d: D {;} 
; 
%% 
main() 
{printf("type the variable \n"); if(yyparse()) 
printf("valid"); 
} 
yyerror() 
{ 
printf("invaalid variable !!!\n"); exit(0); 
} 
