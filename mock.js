
Write an efficient program to find the sum of contiguous subarray within a one-dimensional array of numbers that has the largest sum, where the numbers can be negative or positive integers. 
Ex: {-2, -3, 4, -1, -2, -10, 1, 6, -3}
		{-2, -3, -4, -1, -2, -10, -1, -5, -3}

final=-Infinity
curmax=-Infinity
sum=0
arr=[]
for(i=0;i<arr.length;i++){
sum+=arr[i]
if(currmax<sum){
	currmax=Math.max(currmax,sum)
  
}

if(sum<0) sum=0
final =Math.max(final,currmax)
}



sum=0
largest=-Infinity
currmax=_Infinity
arr=[]
for(i=0;i<len;i++){
	sum+=arr[i]
  if(sum%2==0 && sum>currmax){
  currmax=sum
  arr.push(i)
  }
  else if(sum%2==1 && sum>currmax){
  currmax=sum
  arr.push(i)
  if(arr[i]%2==0) {
  //
  if(arr[i]>final)
  	currmax=arr[i]
    arr.pop()
    arr.push(i)
  }
  }
  final=Math.max(currmax,final)
}



final-1

[0,3,4]

1->2  
3->5
4->6
longest sum is even.

{1,2,3}
{1,2,3,4,6,7,8}
{2,3,7,10,8,12,14,16,18,20}






Given an array of integers. Write a program to find the K-th largest sum of contiguous subarray within the array of numbers which has negative and positive numbers.

Consider only positives

{2,3,4,5,8,9}
{1,3,4,6,7,8}
{1,2,3,4,6,7,8}
{1,2,4,5,6,7}
{2,3,7,10,11,8}
5
[0,4]
