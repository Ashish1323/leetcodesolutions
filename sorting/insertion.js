var n=[4,5,3,2,1]

function swap(a,b){

}

var insertion = a => {
    for(i=1;i<a.length;i++){
        var temp=a[i]
        var j=i-1
        while(j>=0 && a[j]>temp){
            a[j+1]=a[j]
            j--
        }
        a[j+1]= temp
    }
    return a
}
console.log(insertion(n))