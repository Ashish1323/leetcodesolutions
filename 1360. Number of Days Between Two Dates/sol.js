/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
    var d1=new Date(date1)
    var d2=new Date(date2)
    return Math.abs((d1.getTime()-d2.getTime())/86400000)
};