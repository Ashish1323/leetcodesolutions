/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
    var d= new Date(year.toString()+'-'+month.toString()+'-'+day.toString()).getDay()
    var a=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    return a[d]
    };


