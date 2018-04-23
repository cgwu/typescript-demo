import { sayHello } from "./greet";


function hello(compiler: string) {
    console.log(`Hello from ${compiler}`);
}

function showHello(divName:string, name:string) {
    const elt = document.getElementById(divName);
    elt.innerText = sayHello(name);
}
// hello("TypeScript中文测试");
// console.log(sayHello("import sayHello 中文测试"));
showHello('greeting',"[TypeScript] is GREAT!");
