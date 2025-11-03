// // var - global scope
// // let - block scope
// // const - block scope

// // rules

// // var - gS


// var a = 10 ;     // declration // intialiazation

// a = 15 ;         // reuse  // reIntialiazation

// var a = 20       // redeclration

// console.log(a)

// // let - block scope


// let b = 12; // dec // int

// b = 15;     // reuse // reint

// // let b = 16 // not accept reDec

// console.log(b);

// // const - block scope

// const c = 12 ; // dec //  inti

// // c = 15   // not accept reuse, re int

// // const c = 18  // not accepted reDecl

// console.log(c);

// // examples 


// // var x = 5;
// // var x = 10;
// // console.log(x);  // 10


// // let y = 20;
// // y = 25;
// // console.log(y); // 25




// // const z = 50;
// // z = 60;
// // console.log(z); // error





// // printing statements


// // 1. console.log()

// // let a1 = 12

// // console.log(100);


// // 2. alert()

// // alert("hello team this is our first class")

// // 3. confirm()
  
// // confirm("did you like js")

// // 4. prompt()

// // prompt("what is your name :-")

// // 5. document.writeln()

// // document.writeln("hello")


// // let confirmMsg = confirm("did you like js")

// // console.log(confirmMsg);


// // let userName = prompt("what is your name :-")

// // console.log(userName);


// // console methods

// // console.log()

// console.log(100);


// // console.warn()

// console.warn(100);


// // console.error()

// console.error(100)

// // console.clear()

// console.clear()


// // datatypes

// // primitive DataTypes

// // string

// let str = "123"

// console.log(typeof(str));


// // number

// let num = 123

// console.log(typeof(num));


// // boolean

// let boo = false

// console.log(typeof(boo));


// // undefined

// let un ;

// console.log(un);


// // null

// // let null1 = prompt()

// // console.log(null1);


// // non primitive datatypes

// // Array

// // []

// let Arr = ["pine-Apple","apple","orange","banana","cherry","stawberry","water Melon"]

// console.log(Arr);
// console.log(Arr[0]);
// console.log(Arr[3]);
// console.log(Arr[Arr.length-1]);


// // object

// // {}

// let obj = {
//     redFruit : ["apple","cherry","strawberry"],
//     yellowFruit : ["pine-Apple","banana"],
//     bigFruit : "water Melon",
//     fruitCount : 6,
//     uniqueFruit : {verySweet : "apple", waterContentHigh : "water melon"}
// }

// console.log(obj);
// console.log(obj.bigFruit);
// console.log(obj.redFruit[2]);
// console.log(obj.yellowFruit[0]);

// console.clear()

// // Operators

// // 1. Arithmetic operators

// // Addition         +
// // subraction       -
// // multiplication   *
// // division         /
// // Exponensial      **
// // modulus          %
// // inCrement        ++    pre in = ++var  , post in  = var++
// // decrement        --    pre de = --var  ,
// // post Dec = var--


// console.log(1+2);
// console.log(1-2);
// console.log(1*2);
// console.log(1/2);
// console.log(3**2); // 3^2 = 3*3 = 9
// console.log(1%20);


// // increment

// //(++) = 1

// let num1 = 10 // 0

// num1  = num1++

// console.log(num1);


// let num2 = 5       
// let num3 = num2++  

// console.log("num2 :",num2); // 6
// console.log("num3 :",num3); // 5


// let num4 = 2        
// let num5 = ++num4   
// let num6 = --num5   

// console.log("num4 :",num4); // 3
// console.log("num5 :",num5); // 2
// console.log("num6 :",num6); // 2

// console.clear();


// // examples

let a = 7;   
let b = a++;  // 7
let c = ++b; // ++b = ++7 = 8
console.log(a, b, c); // 8, 8, 8



let x = 3;
let y = ++x;
let z = y++;
console.log(x, y, z); // 4 , 5 , 4


let p = 10;
let q = p--;
let r = --q;
console.log(p, q, r); // 9 , 9 , 9


let m = 5;
let n = ++m;
let o = n--;
console.log(m, n, o); // 6 , 5 , 6


let numA = 8;
let numB = numA++; // 8
let numC = ++numB; // ++ numB = ++8 = 9
console.log(numA, numB, numC); // 9,  9 , 9



// // 2. Assignment operators
// // 3. Relational operators
// // 4. logical operators


// // function

// // Date

