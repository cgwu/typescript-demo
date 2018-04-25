define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function A() {
        alert('This is LibA::A()');
    }
    exports.A = A;
    var ClassA = /** @class */ (function () {
        function ClassA() {
        }
        ClassA.prototype.foo = function () {
            alert('LibA ClassA foo() called');
        };
        return ClassA;
    }());
    exports.ClassA = ClassA;
});
