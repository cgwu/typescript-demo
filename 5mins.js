"use strict";
// http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
function greeter(person) {
    return "Hello, " + person;
}
var user = "Jane User 吴";
// window.onload = function(){
//     document.body.innerHTML = greeter(user);
// }
// lambda表达式
window.onload = function () {
    document.body.innerHTML = greeter(user + '##');
};
