/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    var count=0
    for(i=0;i<rating.length;i++){
        for(j=i+1;j<rating.length;j++){
            for (let k = j + 1; k < rating.length; k++) {
                if (rating[i] < rating[j] && rating[j] < rating[k]) count++;
                if (rating[i] > rating[j] && rating[j] > rating[k]) count++;
            }
        }
    }
    return count
};