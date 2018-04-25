"use strict";
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    // return firstName + " " + restOfName.join();
    return firstName + " " + restOfName.join(' ');
}
console.log(buildName('Joseph', 'samuel', '张三', '李四'));
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: the line below is now an arrow function, 
        // allowing us to capture 'this' right here
        return function () {
            // return function(){
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
// ignoring extra function parameters is actually quite common in JavaScript
var item = [11, 22, 33];
item.forEach(function (item, index, array) {
    console.log(index, item);
});
item.forEach(function (item) {
    console.log(item);
});
