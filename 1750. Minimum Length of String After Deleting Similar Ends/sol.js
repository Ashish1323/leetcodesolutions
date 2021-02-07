/**
 * @param {string} s
 * @return {number}
 */
var minimumLength = function(s) {
    var flag=0
   while(s){
    if(s.length==1) return 1
    var aage=s[0]
    for(let i=0;i<s.length;i++){
        if(s[i]==s[i+1]){ 
            aage+=s[i]
        }
        else{
            break
        }
    }
    var peeche=s[s.length-1]
    for(let i=s.length-1;i=>0;i--){
        if(s[i]==s[i-1]){ 
            peeche+=s[i]
        }
        else{
            break
        }
    }
     if(aage[0]==peeche[0]){
         s=s.substr(aage.length)
         s=s.substr(0,s.length-peeche.length)
     }
     else{
         return s.length
     }  
   }
    return s.length
    
};