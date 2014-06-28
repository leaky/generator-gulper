
/* scriptFilter
   ------------
   Prevents accidental inclusion of any hidden/random files.
*/

var path = require('path');

module.exports = function (name) {
    return /(\.(js|coffee)$)/i.test(path.extname(name));
};