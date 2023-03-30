// exporting the module

// named exports
module.exports.display = function() {
    console.log('display() function')
}
module.exports.test = function() {
    console.log('test() function')
}
function hello() {
    console.log('hello() function');
}
//module.exports.default = hello // default export
//module.exports = display;