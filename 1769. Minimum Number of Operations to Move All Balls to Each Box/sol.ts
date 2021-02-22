function minOperations(boxes: string): number[] {
        var arr=[]
    for(let i=0;i<boxes.length;i++){
        var count=0
        for(let j=0;j<boxes.length;j++){
            if(i!=j && boxes[j]=='1'){
                count+=Math.abs(j-i)
            }
        }
                    arr[i]=count
    }
    return arr
};