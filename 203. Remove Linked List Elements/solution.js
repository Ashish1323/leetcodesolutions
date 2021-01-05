var removeElements = function(head, val) {
    if(!head)return null;
    let current = head.next,
        prev = head;
    while(current){
        if(current.val === val){
            current = current.next;
            prev.next = current;
        }else{
            prev = current;
            current = current.next
        }
    }
    if(head.val === val) return head.next;
    return head;
};