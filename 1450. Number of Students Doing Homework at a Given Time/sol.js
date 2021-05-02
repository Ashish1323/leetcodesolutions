/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number} queryTime
 * @return {number}
 */
var busyStudent = function(startTime, endTime, queryTime) {
    var c=0
    for(i=0;i<startTime.length;i++){
        //if(startTime[i]==endTime[i]==queryTime) return 1
        if(startTime[i]<=queryTime && endTime[i]>=queryTime) c++
    }
    return c
};