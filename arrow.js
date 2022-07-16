// Array.map(function(x){
//     return x * 2;
// })

// const add = function(x,y){
//     return x + y; 
// }

// const add = (x,y) => {
//     return x + y;
// }

// [1,2,3].forEach(function(n,idx){
//   console.log(n,idx);  
// })

//another way using arrow functions
// [1,2,3].forEach((n,idx) => {
//     console.log(n,idx);
// });

// const largestNum = [2,3,6,78,99,104,23].reduce(function(max, currNum){
//     console.log (Math.max(max,currNum));
// })

//Arrow functions - shortcuts
// const numTen = [1,2,3,4,5].forEach((n) =>{
//     console.log( n * 10);
// });

// [2, 3, 6, 78, 99, 104, 23].

// const newArr = [1, 2, 3, 4, 5, 6, 7].filter((num) =>
//     num % 2 === 0);

// [1, 2, 3, 4, 5, 6, 7, 8].map((n) => {
//     if(n % 2 === 0){
//         return 'even';
//     }
//     return 'odd';
// });

//another way, this is shorter but doing return gives you better underwwtanding

// [1, 2, 3, 4, 5, 6, 7, 8].map((n) => 
//     (n % 2 === 0 ? 'even' : 'odd'));


// //here we want to find the sum of each subarray within the big array.
// const dailyRainTotals = [ [1.2, 0.35, 2.2], [1.7, 0.6, 0.1], 
// [2.5, 0.9, 1.5]];
// //start with map
// dailyRainTotals.map((hourlyRainTotals) => {
//     return hourlyRainTotals.reduce((sum, inchesOfRains) =>{
//     return sum + inchesOfRains;
//     })
// })

// dailyRainTotals.map((hourlyRainTotals) =>
// hourlyRainTotals.reduce((sum, inchesOfRains) => sum + inchesOfRains));

// const doMath = (num) => (
//     {
//         square: num * num,
//         double: num * 2
//     }
// )

// const cat = {
//     name: 'Bubs',
//     meow: function() {
//         return `${this.name} Says MEOW!!!`
//     }
// };
//if we call cat it shows "bubs", but if we call cat.meow() it calls "bubs say meow!"/

// const cat = {
//     name: 'Bubs',
//     meow:  () => {
//         console.log(this);
//         return `${this.name} Says MEOW!!!`
//     },
//     eat: function() {
//         console.log(this);
//         return `${this.name} chows down!!!`
//     }
// };

//Arrow function exercises
// function double(arr){
//     return arr.map(function(val){
//         return val * 2;
//     });
// }

//ES2015 ver
// const double = arr => arr.map(val => val * 2);
// function double(arr){
//     return arr.map((val) =>{
//         val * 2;
//     })
// }

// squareAndFindEvens((numbers) =>{
//     const squares = numbers.map((num) =>{
//         return num ** 2;
//     })
//     const evens = squares.filter((square) => {
//         return square % 2 === 0;
//     });
//     return evens;
// });

// function sum(){
//     arguments.reduce((sum, value) => {
//         return sum + value;
// //     });
// }

// const max = (num) => {
//     console.log(arguments);
// }


// const max = function() {
//     const newArr = Array.from(arguments);
//     return newArr.reduce((max, curNumber) => {
//         return curNumber > max ? curNumber : max;
//     });
// }

// function doSomething(...asd){}

// function displayArguments(...restOfArgs){
    
// }
// function sum(...nums){
//     nums.reduce((sum, end) => sum + end);
//     console.log(nums);
// }
// const sumAll = (...value) => {
//     if (!values.length) return undefined;

// }

// function makeFamily(parent1, parent2, ...kids){
//    return {
//        parents: [parent1, parent2],
//        children: kids.length ? kids : 'no kids'
//    }
// }

const filterByType = (type, ...val) => {
   return val.filter(v => typeof v === type);
}
// // filterByType('number', 1,2,3, 'true');
// filterByType('boolean', 23, 45, true, false, 0, 'hello', 'goodbye',
// undefined);

// // makeFamily('judy', 'pamela', 'bonnie', 'junior');

// function printStuff(a, ...rest, b){

// }

// max(...something)
// // {...asd};

// const nums = [4, 5, 88, 123, 0.92, 34];
// // Math.max(...nums) instead of Math.max(nums);

// const things = [ 23, 44, true, false, 0, 'hello',
// 'goodbye', undefined,];

// filterByType('number', ...things);

// const pallete = ['lavender berry', 'sunflower yellow'];

// const palleteCopy = pallete;
// //it's not making a copy, but rather the reference to pallete itself,
// //which means if we update pallete, then palleteCopy will also be updated.

// //If we want to make a copy we'll need to use spread of .slice

// // [3,4,5,6].slice(2);

// const palleteCopy1 = [...pallete, 'grasp', 'green'];
// // const palleteCopy2 = [...pallete.pop()];
// const vowels = 'aeiou';
// const vowelArr = [...vowels];

// const tea = {
//     type: 'oolong',
//     name: 'winter sprout',
//     origin: 'taiwan'
// }
// // const arr = [...tea];
// //will give an error since objects are not iterable.

// //a way to get around this is to
// const tea2 = {...tea};
// // tea !== tea2 since they are not the same references
// const teaTin = {...tea, price: '22.99'};
// const newTea = {...tea, name: 'golden frost'};
// // const newTea1 = {...tea, name: 'golden frost', ...tea};

// // const fullTea = {...tea, ...teaData};

// const colors = ['red', 'orange', 'blue'];
// const dummyObj = {...colors, ... 'CAT'};

// const shoppingCart = [{
//     name: 'honey orchid',
//     quantity: 2,
//     price: 13.5
// },
// {
//     name: 'african solstice',
//     quantity: 4,
//     price: 25.99
// }
// ];

// const cartCopy = [...shoppingCart];

// cartCopy === shoppingCart
// false
// shoppingCart[0] === cartCopy[0]
// true
//the indexed values are themselves the same, however the objects are not

