// Public, private, and protected modifiers
// public by default
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}
let greeter = new Greeter('world');
console.log(greeter.greet());
