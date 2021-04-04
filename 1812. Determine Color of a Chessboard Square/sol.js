/**
 * @param {string} coordinates
 * @return {boolean}
 */
var squareIsWhite = function(coordinates) {
    var a=[false,true,false,true,false,true,false,true]
    if(coordinates[0]== "a" || coordinates[0]== "c" || coordinates[0]== "e" || coordinates[0]== "g") return a[coordinates[1]-1]
    else  return !a[coordinates[1]-1]
};