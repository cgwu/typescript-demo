"use strict";
// boolean
var isDone = false;
console.log(isDone);
if (isDone) {
    console.log("TRUE");
}
else {
    console.log("FALSE");
}
/* As in JavaScript, all numbers in TypeScript are floating point values.
These floating point numbers get the type number. In addition to
hexadecimal and decimal literals, TypeScript also supports binary
and octal literals introduced in ECMAScript 2015. */
var decimal = 6;
var hex = 0xf00d;
var binary = 10;
var octal = 484;
console.log(decimal, hex, binary, octal);
// string
var color = "blue";
color = 'red';
console.log(color);
// template string
var fullName = 'Bob Bobbington';
var age = 30;
var sentence = "Hello, my name is " + fullName + ",\nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
// array
var list = [1, 2, 3];
console.log(list);
var list2 = [4, 5, 6];
console.log(list2);
// tuple
var x;
x = ['hello', 10];
// x = [10, 'hello']; // ERROR
console.log(x);
console.log(x[0].substr(1));
// console.log(x[5]); // OK, 'string' and 'number' both have 'toString'
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var c = Color.Green;
console.log(c);
var Color2;
(function (Color2) {
    Color2[Color2["Red"] = 1] = "Red";
    Color2[Color2["Green"] = 2] = "Green";
    Color2[Color2["Blue"] = 4] = "Blue";
})(Color2 || (Color2 = {}));
;
var c2 = Color2.Blue;
var colorName = Color2[2];
console.log(c2, colorName);
// any
var notSure = 4;
console.log(notSure);
notSure = 'a string字符串';
console.log(notSure);
notSure = false;
console.log(notSure);
var listany = [1, true, "free"];
listany[1] = 100;
console.log(listany);
// Void
function warnUser() {
    console.log('sth happened');
}
warnUser();
// Declaring variables of type void is not useful 
// because you can only assign undefined or null to them:
var unusable = undefined;
// let unusable: void = null;
console.log(unusable);
// Type assertions
var someValue = "this 中文";
var strLength = someValue.length;
var strLength2 = someValue.length;
console.log(strLength, strLength2);
// const z = 100;
var z = 100;
// var z = 20;
z = 20;
console.log(z);
var input = [1, 2];
var first = input[0], second = input[1];
console.log(first, second);
_a = [second, first], first = _a[0], second = _a[1]; // swap values
console.log(first, second);
var _b = [1, 2, 3, 4], pre = _b[0], rest = _b.slice(1);
console.log(pre, rest);
// Destructuring
var o = {
    a: "foo",
    b: 12,
    fc: "bar"
};
var fc = o.fc, b = o.b;
console.log(fc, b);
//Property renaming
var another = o.a, bnum = o.b;
console.log(another, bnum);
function add(a, b) {
    if (b === void 0) { b = 1; }
    return a + b;
}
console.log(add(10));
console.log(add(10, 20));
function keepWholeObject(wholeObject) {
    var a = wholeObject.a, _a = wholeObject.b, b = _a === void 0 ? 1001 : _a;
    console.log(a, b);
}
keepWholeObject({ a: 'hello' });
keepWholeObject({ a: 'hello中国', b: 123 });
function f(_a) {
    var _b = _a === void 0 ? { a: 'Not Found', b: 404 } : _a, a = _b.a, b = _b.b;
    console.log(a, b);
}
f();
f({ a: "OK", b: 200 });
var _a;
