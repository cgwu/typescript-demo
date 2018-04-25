"use strict";
function printLabel(labelObj) {
    console.log(labelObj.label);
}
var myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);
function createSquare(config) {
    var newSquare = { color: 'width', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    console.log('config.width: ', config.width);
    if (typeof config.width != 'undefined') {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({ color: 'black', width: 0 });
// let mySquare = createSquare({color:'black'});
console.log(mySquare);
var p1 = { x: 10, y: 20 };
// p1.x = 2; //Cannot assign to 'x' because it is a constant or a read-only property.
var a = [1, 2, 3, 4];
var ro = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
console.log(ro[1]);
var fnAdd = function (a, b) { return a + b; };
var fnSubtract = function (a, b) { return a - b; };
function callFn(fn, a, b) {
    var ret = fn(a, b);
    console.log(ret);
}
callFn(fnAdd, 1, 2);
callFn(fnSubtract, 1, 2);
var myArray;
myArray = ['Bob', 'Fred'];
var myStr = myArray[1];
console.log(myStr);
var s = {};
s.color = 'blue';
s.sideLength = 10;
s.penWidth = 123;
console.log(s);
