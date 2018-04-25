
interface LabelledValue {
    label: string;
}

function printLabel(labelObj: LabelledValue) {
    console.log(labelObj.label);
}

let myObj = { size: 10, label: 'Size 10 Object' };
printLabel(myObj);

// Optional Properties
interface SquareConfig {
    color?: string;
    width?: number;
}

function createSquare(config: SquareConfig)
    : { color: string; area: number } {
    let newSquare = { color: 'width', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    console.log('config.width: ', config.width);
    if (typeof config.width != 'undefined') {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
let mySquare = createSquare({ color: 'black', width: 0 });
// let mySquare = createSquare({color:'black'});
console.log(mySquare);

// readonly properties
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
// p1.x = 2; //Cannot assign to 'x' because it is a constant or a read-only property.

let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
// ro[0] = 12; // error!
// ro.push(5); // error!
// ro.length = 100; // error!
// a = ro; // error!
console.log(ro[1]);

// Function Types
interface Func {
    (arg1: number, arg2: number): number;
}
let fnAdd = (a: number, b: number) => a + b;
let fnSubtract = (a: number, b: number) => a - b;
function callFn(fn: Func, a: number, b: number) {
    let ret = fn(a, b);
    console.log(ret);
}
callFn(fnAdd, 1, 2);
callFn(fnSubtract, 1, 2);

// Indexable Types
interface StringArray {
    [index: number]: string;
}
let myArray: StringArray;
myArray = ['Bob', 'Fred'];
let myStr = myArray[1];
console.log(myStr);

// Extending Interface
interface Shape {
    color: string;
}
interface PenStroke{
    penWidth: number;
}
interface Square extends Shape, PenStroke {
    sideLength: number;
}
let s = <Square>{};
s.color = 'blue';
s.sideLength = 10;
s.penWidth = 123;
console.log(s);