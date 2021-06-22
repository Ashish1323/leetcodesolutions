%{ 
#include "y.tab.h" 
%} 
%% 
[a-z] return L; 
[0-9] return D; 
. { return yytext[0];} 
\n return 0; 
%% 
