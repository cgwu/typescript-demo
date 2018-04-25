
let someArray = [1, "string", false];
for (let item of someArray) {
    console.log(item);
}
console.log('----')
for (const key in someArray) {
    if (someArray.hasOwnProperty(key)) {
        const element = someArray[key];
        console.log(key, element);
    }
}

console.log('----')
let obj = { 'foo': 'bar', 'f': 123, '中国':'世界'};
for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
        const element = (obj as any)[key];
        console.log(key, element);
    }
}
