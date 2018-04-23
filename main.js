"use strict";
var Greeter = (function () {
    function Greeter() {
        this.name = '';
    }
    Greeter.prototype.sayHello = function () {
        console.log('Hello' + name);
    };
    return Greeter;
}());
