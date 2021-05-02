/**
 * @param {string} command
 * @return {string}
 */
var interpret = function(command) {
    var s=""
    for(i=0;i<command.length;){
        if(command[i]==="G"){
            s+="G"
            i++
        }
       if(command[i]=="(" && command[i+1]===")"){
            s+="o"
            i+=2
        }
       if(command[i]=="(" && command[i+1]=="a" && command[i+2]==="l" && command[i+3]===")" ){
            s+="al"
            i+=4
        }
    }
    return s
};