"use strict";
var Greeter = /** @class */ (function () {
    function Greeter() {
        // 这是我的注释    
        this.name = '';
    }
    /* this is my comments */
    Greeter.prototype.sayHello = function () {
        console.log('Hello' + name);
    };
    return Greeter;
}());
