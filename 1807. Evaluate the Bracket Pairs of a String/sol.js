var evaluate = function(s, knowledge) {
    
    let hash={}
    for(let i =0;i<knowledge.length;i++){
        let [key,val]=knowledge[i]    
           hash[key]=val 
    }
    
    let final=""
    
    for(let i =0;i<s.length;i++){
        
        if(s[i]=='('){
            let str=''
            while(s[i]!==')'){
                i++
                if(s[i]==')'){
                    break
                }
                str+=s[i]
                
            }
            
            if(hash[str]){
                final+=hash[str]
            }
            else{
                final+='?'
            }
        }
        
        else{
        final+=s[i]
            
        }
    }

    return final
};
