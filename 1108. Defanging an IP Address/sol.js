/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
    return replaceAll(address)
};

function replaceAll(s){
    return s.split('.').join('[.]')
}