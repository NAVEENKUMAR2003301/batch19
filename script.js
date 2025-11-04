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

console.clear();


// // 2. Assignment operators

let num1 = 10
let additionVal = 100

// num1 = num1 + additionVal //== 

 num1 %= additionVal




console.log(num1);


// // 3. Relational operators  || comparition operator

    // meaning     operator    example       result 

    // 1. lessThen     <          5<5          false
    // 2. greater Then >          3>5          false
    // 3. lessThenEq   <=         5<=5         true
    // 4. greterThenEq >=         6>=1         true
    // 5. loosyTypeEq  ==         5=="5"       true
    // 6. strictlyTypeEq ===      5==="5"      false
    // 7. loosy Not Eq    !=      5!=5 , 3!=2  true
    // 8. strictly not Eq  !==    5!=="5"      true 


    console.log(7 >= 10);  // false
    console.log(4 === "4"); // false
    console.log(6 != 2); // true
    console.log(8 <= 8); // true 
    console.log(9 < 5); // false
    console.log(10 !== "10"); // !false  = true
    console.log(3 > 3); // false 
    console.log(5 == "5"); // true


    console.clear();
    

// // 4. logical operators

// AND - &&

// true && true && false = false

// true && true && true  = true  

// OR - ||

// true || false || false = true

// false || false || false = false

// NOT - !

// !(true) = false


console.log((5===5) && (5!="5") && (0)); 

// true  && false && false = false

console.log(10 > 5 && 3 < 8 && 2 === "2");

// true && true && false = false

console.log(4 === 4 || 5 > 10 || 6 != 6);

// true || false || false = true 

console.log(!(7 < 9));

// !(true) = false

console.log((2 != 3 && 5 === "5") || 10 > 2);

// (true && false ) || true

// false || true = true

console.log(!(4 > 2 && 6 < 8));

// !(true && true) = !(true) = false

console.log(8 <= 8 || (9 !== "9" && 1));

// true || (true && true) = true || true = true

console.log(0 || (5 && true));

// false || (true && true) = false || true = true

console.log(!(false || (3 == "3" && 2 > 1)));

// (false || (true && true)) = !(false || true) = !(true) = false



// concatination && template litral

// concatination (+)

let str1 = "hello"

let str2 = "world"

console.log(str1+" "+str2);

// template litral


console.log(`${str1} ${str2} hello`);


// type conversition


// implicit type conversion

let str3 = "11"

let num =  11

console.log(typeof(str3+num));

// string  - (string anything string)

console.log(typeof("1"+"1"));
console.log(typeof("1"+1));
console.log(typeof("1"+true));
console.log(typeof("1"+undefined));
console.log(typeof("1"+null));
console.log(typeof("1"+[1,2]));
console.log(typeof("1"+{k:1}));

// number 

console.log(typeof(1+"1"));
console.log(typeof(1+1));
console.log(typeof(1+true));
console.log(typeof(1+undefined));
console.log(typeof(1+null));
console.log(typeof(1+[1,2]));
console.log(typeof(1+{k:2}));

// Boolean


console.log(typeof(true+"1"));
console.log(typeof(true+1));
console.log(typeof(true+true));
console.log(typeof(true+undefined));
console.log(typeof(true+null));
console.log(typeof(true+[1,2]));
console.log(typeof(true+{a:1}));



// explicit type conversion

//Number - constarctor

console.log(1+Number("1"));
console.log(Number(""));
console.log(Number());
console.log(Number("abc"));
console.log(Number(1));
console.log(Number(true));
console.log(Number(false));
console.log(Number(undefined));
console.log(Number(null));
console.log(Number([1,2]));
console.log(Number({a:7}));


// Boolean - constractor


console.log(Boolean("1"));
console.log(Boolean(""));
console.log(Boolean());
console.log(Boolean("abc"));
console.log(Boolean(1));
console.log(Boolean(true));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean([1,2]));
console.log(Boolean({a:1}));








// // function

// // Date

