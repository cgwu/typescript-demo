
function buildName(firstName: string, ...restOfName: string[]) {
    // return firstName + " " + restOfName.join();
    return firstName + " " + restOfName.join(' ');
}
console.log(buildName('Joseph', 'samuel', '张三', '李四'));


let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        // NOTE: the line below is now an arrow function, 
        // allowing us to capture 'this' right here
        return () => {
            // return function(){
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        }
    }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

console.log("card: " + pickedCard.card + " of " + pickedCard.suit);

// ignoring extra function parameters is actually quite common in JavaScript
let item = [11, 22, 33];
item.forEach((item, index, array) => {
    console.log(index, item);
})
item.forEach((item) => {
    console.log(item);
})
