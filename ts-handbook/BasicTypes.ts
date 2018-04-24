// boolean
let isDone: boolean = false;
console.log(isDone);
if (isDone) {
    console.log("TRUE");
} else {
    console.log("FALSE");
}

/* As in JavaScript, all numbers in TypeScript are floating point values. 
These floating point numbers get the type number. In addition to 
hexadecimal and decimal literals, TypeScript also supports binary 
and octal literals introduced in ECMAScript 2015. */
let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;
console.log(decimal, hex, binary, octal);

// string
let color: string = "blue";
color = 'red';
console.log(color);
// template string
let fullName: string = 'Bob Bobbington';
let age: number = 30;
let sentence: string = `Hello, my name is ${fullName},
I'll be ${ age + 1} years old next month.`;
console.log(sentence);

// array
let list: number[] = [1, 2, 3];
console.log(list);
let list2: Array<number> = [4, 5, 6];
console.log(list2);

// tuple
let x: [string, number];
x = ['hello', 10];
// x = [10, 'hello']; // ERROR
console.log(x);
console.log(x[0].substr(1));
// console.log(x[5]); // OK, 'string' and 'number' both have 'toString'

// enum
enum Color { Red, Green, Blue };
let c: Color = Color.Green;
console.log(c);

enum Color2 { Red = 1, Green = 2, Blue = 4 };
let c2: Color2 = Color2.Blue;
let colorName: string = Color2[2];
console.log(c2, colorName);

// any
let notSure: any = 4;
console.log(notSure);
notSure = 'a string字符串';
console.log(notSure);
notSure = false;
console.log(notSure);

let listany: any[] = [1, true, "free"];
listany[1] = 100;
console.log(listany);

// Void
function warnUser(): void {
    console.log('sth happened');
}
warnUser();
// Declaring variables of type void is not useful 
// because you can only assign undefined or null to them:
let unusable: void = undefined;
// let unusable: void = null;
console.log(unusable);

// Type assertions
let someValue: any = "this 中文";
let strLength: number = (<string>someValue).length;
let strLength2: number = (someValue as string).length;
console.log(strLength, strLength2);

// const z = 100;
let z = 100;
// var z = 20;
z = 20;
console.log(z);

let input = [1, 2];
let [first, second] = input;
console.log(first, second);
[first, second] = [second, first]; // swap values
console.log(first, second);

let [pre, ...rest] = [1, 2, 3, 4];
console.log(pre, rest);

// Destructuring
let o = {
    a: "foo",
    b: 12,
    fc: "bar"
};
let { fc, b } = o;
console.log(fc, b);
//Property renaming
let { a: another, b: bnum } = o;
console.log(another, bnum);

function add(a: number, b: number = 1) {
    return a + b;
}
console.log(add(10));
console.log(add(10, 20));

function keepWholeObject(wholeObject: { a: string, b?: number }) {
    let { a, b = 1001 } = wholeObject;
    console.log(a, b);
}
keepWholeObject({ a: 'hello' });
keepWholeObject({ a: 'hello中国', b: 123 });

type C = { a: string, b?: number }
function f({ a, b }: C = { a: 'Not Found', b: 404 }): void {
    console.log(a, b)
}
f();
f({ a: "OK", b: 200 });


