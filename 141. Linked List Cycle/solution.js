var hasCycle = function(head) {
    var currentNode=head;
    var setNode= new Set();
    while(currentNode != null){
        if(setNode.has(currentNode)){
            return true
        }
        setNode.add(currentNode)
        currentNode=currentNode.next
    }
    return false
};