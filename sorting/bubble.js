var n=[5,4,3,2,1]

var bubble = array => {
    for(i=0;i<array.length;i++){
        for(j=0;j<array.length-i;j++){
            if(array[j]>array[j+1]){
                var temp=array[j]
                array[j]=array[j+1]
                array[j+1]=temp
            }
        }
    }
    return array
}

console.log(bubble(n))