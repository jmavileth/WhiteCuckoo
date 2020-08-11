const accounts = require('../data/testdata.json');
module.exports = function(key){
    return accounts[key];
}