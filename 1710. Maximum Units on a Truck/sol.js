/**
 * @param {number[][]} boxTypes
 * @param {number} truckSize
 * @return {number}
 */
var maximumUnits = function(boxTypes, truckSize) {
    var count=0
     
  boxTypes.sort((a,b) => b[1] - a[1]);
  var i=0
      while(i<boxTypes.length) 
          {
              if(boxTypes[i][0]<truckSize) {
                truckSize-=boxTypes[i][0]
              count+=boxTypes[i][0]*boxTypes[i][1]
              }
              else{
                  count+=truckSize*boxTypes[i][1]
                  truckSize=0
                  break
              }
              i++
          }
      
  return count
};