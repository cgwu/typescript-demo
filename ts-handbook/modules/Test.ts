import ZipCodeValidator from "./ZipCodeValidator";
import v from './StaticZipCodeValidator';

let strings = ["Hello", "98052", "101"];

var validate = new ZipCodeValidator();
strings.forEach(s => {
  console.log(`"${s}" ${validate.isAcceptable(s) ? " matches" : " does not match"}`);
});

console.log('## Use function validate ##') 
strings.forEach(s => {
    console.log(`"${s}" ${v(s) ? " matches" : " does not match"}`);
});

alert('yes');