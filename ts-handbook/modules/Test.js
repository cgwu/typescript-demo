var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./ZipCodeValidator", "./StaticZipCodeValidator"], function (require, exports, ZipCodeValidator_1, StaticZipCodeValidator_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    ZipCodeValidator_1 = __importDefault(ZipCodeValidator_1);
    StaticZipCodeValidator_1 = __importDefault(StaticZipCodeValidator_1);
    var strings = ["Hello", "98052", "101"];
    var validate = new ZipCodeValidator_1.default();
    strings.forEach(function (s) {
        console.log("\"" + s + "\" " + (validate.isAcceptable(s) ? " matches" : " does not match"));
    });
    console.log('## Use function validate ##');
    strings.forEach(function (s) {
        console.log("\"" + s + "\" " + (StaticZipCodeValidator_1.default(s) ? " matches" : " does not match"));
    });
    alert('yes');
});
