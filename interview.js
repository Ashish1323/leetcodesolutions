var array=[{1:1},2,3]
var str="Ashish Agnihotri"
var strArray=str.split(' ')
var newA=['Ashish', 'Agnihotri']
//console.log(newA)

var missingNumber= (a,n) => {
  var sum=(n*(n+1))/2
  var s=0
  for(i=0;i<a.length;i++){
      s+=a[i]
  }
  //console.log(s)
  return sum-s
}

console.log(missingNumber([3,2,1,5,4,8,7,9],9))