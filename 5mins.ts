// http://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes.html

interface Person {
    firstName: string;
    lastName: string;
}

class Student {
    fullName: string;
    /* Also of note, the use of public on arguments to the constructor is a shorthand that allows us to automatically create properties with that name.
        public 修饰符自动添加公有属性
     */
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

function greeter(person: string) {
    return "Hello, " + person;
}

function greeter2(person: Person) {
    return "Hello, " + person.firstName + ' ' + person.lastName;
}


// var user = "Jane User 吴";
let user = "Jane User 吴";
// user  = 'abc';


// window.onload = function(){
//     document.body.innerHTML = greeter(user);
// }

// lambda表达式
window.onload = () => {
    // document.body.innerHTML = greeter(user+'##');
    // let user = { firstName: "Jane", lastName: "User吴" };
    let user = new Student("Jane", "M.", "User学生");
    document.body.innerHTML = greeter2(user);
    // greeter([1,2,3])
}
