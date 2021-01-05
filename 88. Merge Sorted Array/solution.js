/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    //
    length1 =m
    length2=n
    let mergedArray=[]
   let i=0,j=0;
    while(i<length1 && j<length2){
        //checks the duplicates
        let equalArray=nums2[j]==nums1[i]
        if(false){
            mergedArray.push(nums2[j])
            i++
            j++
        } else{
        // check which one is smaller and pushing it and increasing the pointer of it    
        if(nums1[i]<nums2[j]){
        mergedArray.push(nums1[i])
        i++;
        }
        else{
            mergedArray.push(nums2[j])
            j++;
        }
    }
}
// pushing last element
    while(i<length1){
        mergedArray.push(nums1[i])
        i++
    }
    while(j<length2){
        mergedArray.push(nums2[j])
        j++
    }
    for(i=0;i<nums1.length;i++){
    nums1[i]=mergedArray[i]
    }
}




