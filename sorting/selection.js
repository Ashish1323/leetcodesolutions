var array=[3,2,5,1,4,6,8,7]

var selection = a =>{
    for(i=0;i<a.length;i++){
        for(j=i+1;j<a.length;j++){
            var small=a[i]
            if(a[j]<small){
                small=a[j]
                var temp=a[i]
                a[i]=a[j]
                a[j]=temp
            }
        }
    }
    return a
}

console.log(selection(array))