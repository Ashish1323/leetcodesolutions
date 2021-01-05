var hasCycle = function(head) {
    var bhopu=head;
    var vardhit=head;
    
    if(vardhit==null || vardhit.next==null) return false
    bhopu=bhopu.next
    vardhit=vardhit.next.next
    while(vardhit != null || bhopu != null){
        if(vardhit==bhopu){
            return true
        }
        if(vardhit == null || bhopu == null || vardhit.next==null){ 
            return false
        }
        else{
        bhopu=bhopu.next
        vardhit=vardhit.next.next
    }
    }
    return false
};