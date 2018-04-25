"use strict";
var someArray = [1, "string", false];
for (var _i = 0, someArray_1 = someArray; _i < someArray_1.length; _i++) {
    var item_1 = someArray_1[_i];
    console.log(item_1);
}
console.log('----');
for (var key in someArray) {
    if (someArray.hasOwnProperty(key)) {
        var element = someArray[key];
        console.log(key, element);
    }
}
console.log('----');
var obj = { 'foo': 'bar', 'f': 123, '中国': '世界' };
for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
        var element = obj[key];
        console.log(key, element);
    }
}
