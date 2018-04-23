"use strict";
// http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html
var Student = /** @class */ (function () {
    /* Also of note, the use of public on arguments to the constructor is a shorthand that allows us to automatically create properties with that name.
        public 修饰符自动添加公有属性
     */
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hello, " + person;
}
function greeter2(person) {
    return "Hello, " + person.firstName + ' ' + person.lastName;
}
// var user = "Jane User 吴";
var user = "Jane User 吴";
// user  = 'abc';
// window.onload = function(){
//     document.body.innerHTML = greeter(user);
// }
// lambda表达式
window.onload = function () {
    // document.body.innerHTML = greeter(user+'##');
    // let user = { firstName: "Jane", lastName: "User吴" };
    var user = new Student("Jane", "M.", "User学生");
    document.body.innerHTML = greeter2(user);
    // greeter([1,2,3])
};
