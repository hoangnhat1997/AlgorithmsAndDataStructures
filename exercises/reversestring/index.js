// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    debugger;
    return str.split('').reduce((reversed, character)=>
         character + reversed
    , '');

}

reverse('1234das');

module.exports = reverse;

// ** Solution 1
// function reverse(str) {
//     const  arr = str.split('');
//     arr.reverse();
//    return arr.join('');
// }

// ** Solution 2
// function reverse(str) {
//     let reversed = '';
//     for(let character of str){
//         reversed = character + reversed;
//     }
//     return reversed;
// }

// ** Solution 3
// function reverse(str) {
//     debugger;
//     return str.split('').reduce((reversed, character)=>
//          character + reversed
//     , '');
// }