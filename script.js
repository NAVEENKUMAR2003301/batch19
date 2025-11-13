
 
// // // var - global scope
// // // let - block scope
// // // const - block scope

// // // rules

// // // var - gS


// // var a = 10 ;     // declration // intialiazation

// // a = 15 ;         // reuse  // reIntialiazation

// // var a = 20       // redeclration

// // console.log(a)

// // // let - block scope


// // let b = 12; // dec // int

// // b = 15;     // reuse // reint

// // // let b = 16 // not accept reDec

// // console.log(b);

// // // const - block scope

// // const c = 12 ; // dec //  inti

// // // c = 15   // not accept reuse, re int

// // // const c = 18  // not accepted reDecl

// // console.log(c);

// // // examples 


// // // var x = 5;
// // // var x = 10;
// // // console.log(x);  // 10


// // // let y = 20;
// // // y = 25;
// // // console.log(y); // 25




// // // const z = 50;
// // // z = 60;
// // // console.log(z); // error





// // // printing statements


// // // 1. console.log()

// // // let a1 = 12

// // // console.log(100);


// // // 2. alert()

// // // alert("hello team this is our first class")

// // // 3. confirm()
  
// // // confirm("did you like js")

// // // 4. prompt()

// // // prompt("what is your name :-")

// // // 5. document.writeln()

// // // document.writeln("hello")


// // // let confirmMsg = confirm("did you like js")

// // // console.log(confirmMsg);


// // // let userName = prompt("what is your name :-")

// // // console.log(userName);


// // // console methods

// // // console.log()

// // console.log(100);


// // // console.warn()

// // console.warn(100);


// // // console.error()

// // console.error(100)

// // // console.clear()

// // console.clear()


// // // datatypes

// // // primitive DataTypes

// // // string

// // let str = "123"

// // console.log(typeof(str));


// // // number

// // let num = 123

// // console.log(typeof(num));


// // // boolean

// // let boo = false

// // console.log(typeof(boo));


// // // undefined

// // let un ;

// // console.log(un);


// // // null

// // // let null1 = prompt()

// // // console.log(null1);


// // // non primitive datatypes

// // // Array

// // // []

// // let Arr = ["pine-Apple","apple","orange","banana","cherry","stawberry","water Melon"]

// // console.log(Arr);
// // console.log(Arr[0]);
// // console.log(Arr[3]);
// // console.log(Arr[Arr.length-1]);


// // // object

// // // {}

// // let obj = {
// //     redFruit : ["apple","cherry","strawberry"],
// //     yellowFruit : ["pine-Apple","banana"],
// //     bigFruit : "water Melon",
// //     fruitCount : 6,
// //     uniqueFruit : {verySweet : "apple", waterContentHigh : "water melon"}
// // }

// // console.log(obj);
// // console.log(obj.bigFruit);
// // console.log(obj.redFruit[2]);
// // console.log(obj.yellowFruit[0]);

// // console.clear()

// // // Operators

// // // 1. Arithmetic operators

// // // Addition         +
// // // subraction       -
// // // multiplication   *
// // // division         /
// // // Exponensial      **
// // // modulus          %
// // // inCrement        ++    pre in = ++var  , post in  = var++
// // // decrement        --    pre de = --var  ,
// // // post Dec = var--


// // console.log(1+2);
// // console.log(1-2);
// // console.log(1*2);
// // console.log(1/2);
// // console.log(3**2); // 3^2 = 3*3 = 9
// // console.log(1%20);


// // // increment

// // //(++) = 1

// // let num1 = 10 // 0

// // num1  = num1++

// // console.log(num1);


// // let num2 = 5       
// // let num3 = num2++  

// // console.log("num2 :",num2); // 6
// // console.log("num3 :",num3); // 5


// // let num4 = 2        
// // let num5 = ++num4   
// // let num6 = --num5   

// // console.log("num4 :",num4); // 3
// // console.log("num5 :",num5); // 2
// // console.log("num6 :",num6); // 2

// // console.clear();


// // // examples

// let a = 7;   
// let b = a++;  // 7
// let c = ++b; // ++b = ++7 = 8
// console.log(a, b, c); // 8, 8, 8



// let x = 3;
// let y = ++x;
// let z = y++;
// console.log(x, y, z); // 4 , 5 , 4


// let p = 10;
// let q = p--;
// let r = --q;
// console.log(p, q, r); // 9 , 9 , 9


// let m = 5;
// let n = ++m;
// let o = n--;
// console.log(m, n, o); // 6 , 5 , 6


// let numA = 8;
// let numB = numA++; // 8
// let numC = ++numB; // ++ numB = ++8 = 9
// console.log(numA, numB, numC); // 9,  9 , 9

// console.clear();


// // // 2. Assignment operators

// let num1 = 10
// let additionVal = 100

// // num1 = num1 + additionVal //== 

//  num1 %= additionVal




// console.log(num1);


// // // 3. Relational operators  || comparition operator

//     // meaning     operator    example       result 

//     // 1. lessThen     <          5<5          false
//     // 2. greater Then >          3>5          false
//     // 3. lessThenEq   <=         5<=5         true
//     // 4. greterThenEq >=         6>=1         true
//     // 5. loosyTypeEq  ==         5=="5"       true
//     // 6. strictlyTypeEq ===      5==="5"      false
//     // 7. loosy Not Eq    !=      5!=5 , 3!=2  true
//     // 8. strictly not Eq  !==    5!=="5"      true 


//     console.log(7 >= 10);  // false
//     console.log(4 === "4"); // false
//     console.log(6 != 2); // true
//     console.log(8 <= 8); // true 
//     console.log(9 < 5); // false
//     console.log(10 !== "10"); // !false  = true
//     console.log(3 > 3); // false 
//     console.log(5 == "5"); // true


//     console.clear();
    

// // // 4. logical operators

// // AND - &&

// // true && true && false = false

// // true && true && true  = true  

// // OR - ||

// // true || false || false = true

// // false || false || false = false

// // NOT - !

// // !(true) = false


// console.log((5===5) && (5!="5") && (0)); 

// // true  && false && false = false

// console.log(10 > 5 && 3 < 8 && 2 === "2");

// // true && true && false = false

// console.log(4 === 4 || 5 > 10 || 6 != 6);

// // true || false || false = true 

// console.log(!(7 < 9));

// // !(true) = false

// console.log((2 != 3 && 5 === "5") || 10 > 2);

// // (true && false ) || true

// // false || true = true

// console.log(!(4 > 2 && 6 < 8));

// // !(true && true) = !(true) = false

// console.log(8 <= 8 || (9 !== "9" && 1));

// // true || (true && true) = true || true = true

// console.log(0 || (5 && true));

// // false || (true && true) = false || true = true

// console.log(!(false || (3 == "3" && 2 > 1)));

// // (false || (true && true)) = !(false || true) = !(true) = false



// // concatination && template litral

// // concatination (+)

// let str1 = "hello"

// let str2 = "world"

// console.log(str1+" "+str2);

// // template litral


// console.log(`${str1} ${str2} hello`);


// // type conversition


// // implicit type conversion

// let str3 = "11"

// let num =  11

// console.log(typeof(str3+num));

// // string  - (string anything string)

// console.log(typeof("1"+"1"));
// console.log(typeof("1"+1));
// console.log(typeof("1"+true));
// console.log(typeof("1"+undefined));
// console.log(typeof("1"+null));
// console.log(typeof("1"+[1,2]));
// console.log(typeof("1"+{k:1}));

// // number 

// console.log(typeof(1+"1"));
// console.log(typeof(1+1));
// console.log(typeof(1+true));
// console.log(typeof(1+undefined));
// console.log(typeof(1+null));
// console.log(typeof(1+[1,2]));
// console.log(typeof(1+{k:2}));

// // Boolean


// console.log(typeof(true+"1"));
// console.log(typeof(true+1));
// console.log(typeof(true+true));
// console.log(typeof(true+undefined));
// console.log(typeof(true+null));
// console.log(typeof(true+[1,2]));
// console.log(typeof(true+{a:1}));



// // explicit type conversion

// //Number - constarctor

// console.log(1+Number("1"));
// console.log(Number(""));
// console.log(Number());
// console.log(Number("abc"));
// console.log(Number(1));
// console.log(Number(true));
// console.log(Number(false));
// console.log(Number(undefined));
// console.log(Number(null));
// console.log(Number([1,2]));
// console.log(Number({a:7}));


// // Boolean - constractor


// console.log(Boolean("1"));
// console.log(Boolean(""));
// console.log(Boolean());
// console.log(Boolean("abc"));
// console.log(Boolean(1));
// console.log(Boolean(true));
// console.log(Boolean(undefined));
// console.log(Boolean(null));
// console.log(Boolean([1,2]));
// console.log(Boolean({a:1}));



// console.clear();


// // flow control statement

// // conditional statement

// // if statement

// // if(condition){ console.log("print") }

// if(5=="5"){
//     console.log("true condition");  
// }

// // if else statement

// if(0){
//     console.log("true");
    
// }else{
//     console.log("false");
    
// }

// // else if  statement

// let hour = 22

// if(hour >= 1 && hour <= 6){
//     console.log("good morning");
    
// }else if(hour >= 7 && hour <= 12){
//     console.log("late morning");
    
// }else if(hour >= 13 && hour <= 16){
//     console.log("good afternoon");
    
// }else if(hour >= 17 && hour <= 19){
//     console.log("good evening");
    
// }else{
//     console.log("good night");
    
// }

// // nested if statement

// // let age = prompt("enter your age")
// // let height = prompt("enter your height")
// // let weight = prompt("enter your weight")

// // if(age >= 18){

// //     if(height >= 170){

// //         if(weight >= 70){
// //             alert("congratulation you are eligible!!!");
            
// //         }else{
// //             alert("your weight is not eligible "+weight+"kg only the basic eligible , 70kg. ");
            
// //         }

// //     }else{
// //         alert("your height is not eligible "+ height + "cm only your height , but the basic eligible height 170cm.");
        
// //     }

// // }else{
// //     alert("your age is not eligible "+age +"year only the eligible age is min 18 year" );
    
// // }


// // switch statement

// //  switch(){
// //     case value : statement ; break;
// //     case value : statement ; break;
// //     case value : statement ; break;
// //  }

// let trafficLight = "green"

// switch(trafficLight){
//     case "red" : console.log("vechile stop"); break;
//     case "yellow" : console.log("vechile start only"); break;
//     case "green" : console.log("go"); break;
    
// }

// // ternary operator

// // condition ? statement : statement

// let pwd = false

// pwd ? console.log("welcome our home page") : console.log("your password incorrect");

// console.clear();


// // looping statement

// // console.log(1);
// // console.log(2);
// // console.log(3);
// // console.log(4);
// // console.log(5);



// // for loop

// // for(intialiazation; condition ; iteration){
// //     // statement
// // }


// for(let a = 1 ; a <= 5 ; a++){
//     console.log(a);  // 1 2 3 4 5
// }

// // let a = 1 ; 1 <= 5 = true ; 1++ = 2
// // let a = 2 ; 2 <= 5 = true ; 2++ = 3
// // let a = 3 ; 3 <= 5 = true ; 3++ = 4
// // let a = 4 ; 4 <= 5 = true ; 4++ = 5
// // let a = 5 ; 5 <= 5 = true ; 5++ = 6
// // let a = 6 ; 6 <= 5 = false

// for(let a = 1 ; a<=10 ; a++){
//    if(a%2==1){ // 1%2 == 1 , 2%2 == 1 , 3 % 2 == 1
//     console.log("odd :",a);
    
//    }
// }

// // let a = 1 ; 1 <= 10 ; 1 ++

// // let a = 2 ; 2 <= 10 ; 2 ++ 

// // let a = 3 ; 3 <= 10 : 3 ++


// // while loop

// // intialiazation;

// // while(){
// //     // statement

// //     iteration
// // }

// let val = 10

// while(val>=20){
//     console.log(val);

//     val--
    
// }

   

// // do while loop

// // intitaliazation

// // do {
// //     // statement
    
// //     iteration
// // }

// // while(condtion)


// let val1 = 10

// do{
//     console.log(val1);

//     val1--
    
// }

// while(val1>=0)

//     console.clear();
    

// // for of loop

// // array , string , function

// let arr1 = ["apple","orange","banana"]

// for(let a of arr1){
//     console.log(a);
    
// }

// let str = "javascript"

// for(let a2 of str){
//    console.log(a2);
// }

// //  


// // for in loop

// // object

// let obj = {
//     easyGame : "subway surface",
//     middleGame : "pubg",
//     hardGame   : "God of war"
// }


// for(let a1 in arr1){
//     console.log(arr1[a1]);
    
// }

// console.clear();


// // // function

// function one(parameter){
//    console.log("one");

//    if(true){
//     console.log("hello");
    
//    }

//    for(let a = 1 ; a<=5 ; a++){
//     console.log(a);
    
//    }
// }

// one()

// function two(a){
//   console.log(a);
  
// }

// two("kamal")



// function collegeForm(a,b,c,d){
//     console.log("name :",a);
//     console.log("department :",b);
//     console.log("batch :",c);
//     console.log("percentage :",d);
    
// }

// collegeForm("livin","ece","2020",9.1)
// collegeForm("praveen","ece","2020",8.5)

// console.clear();


// let obj1 = {
//     Name1 : "john",
//     department : "mech"
// }



// function access(){
//     console.log("detials about student", obj1.Name1); 
// }

// access()


// // scopes


// // var - global scope & function scope


// var a1 = 10

// console.log(a1);


// let b1 = 12

// console.log(b1);

// const c1 = 15

// console.log(c1);


// function scopeCheck(){
//     if(1){
//         var a = "global scope";
//         let b12 = "block scope";
//         const c12 = "block scope" ;
//         console.log(c12);
//         console.log(b12);
//         console.log(a);
//     }


    
    
// }

// scopeCheck()

// console.clear();


// // types of function


// // named function

// function named(a){
//     console.log("named function");
    
// }

// named("argument")


// // annonymous function


// var annonymous = function(a){
//     console.log("annonymous function");
    
// }
// annonymous("argument")




// // arrow function

// var Arrow = (a)=>{
//     console.log("Arrow function");
    
// }
// Arrow("argument")



//  function testScope() { 
//      if (true) {
//      var a = "var inside if"; 
//      let b = "let inside if";
//      } 
//      console.log(a);
//      console.log(b); 
// } 
//       testScope();





//       function outer() {
//         var a = 10;
//         function inner() {
//           console.log(a);
//         }
//         inner();
//       }
//       outer();

//       // 10


//       function namedFunc() {
//         console.log("Named Function Example");
//       }
//       namedFunc();


//       let anonFunc = function () { 
//         console.log("Anonymous Function Example"); };
//       anonFunc();

//       let arrowFunc = () => {
//         console.log("Arrow Function Example");
//       };
//       arrowFunc();


//       hoisted();
//       function hoisted() {
//         console.log("Hoisting in named function");
//       }

//       let notHoisted = function () { console.log("Hoisting in anonymous function"); };
      
//       notHoisted(); 

//       console.clear();


//       // default parameter function

//       function clg(a,b,c,d="no"){
//         console.log("name :", a);
//         console.log("dep :", b);
//         console.log("cgpa :", c);
//         console.log("disability :", d);
        
//       }

//       clg("kamal","ece","9.1")
//       clg("praveen","ece","8.5")

//      // self invoke function

// //    (function(){
// //     alert()
// //    })()



// // setTimeout(()=>{
// // (function (a, b) {
// //   let popup = document.querySelector(".popup");
// //   let popParent = document.querySelector(".popupParent");

// //   popup.innerHTML = `<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.apple.com%2Fnewsroom%2F2024%2F09%2Fapple-debuts-iphone-16-pro-and-iphone-16-pro-max%2F&psig=AOvVaw1HwpKR5oSzOJjZXX1itM06&ust=1762584600610000&source=images&cd=vfe&opi=89978449&ved=0CBUQjRxqFwoTCLjvmLu535ADFQAAAAAdAAAAABAE" alt=""/>
    
// //     <h1>Flipkart</h1> </br> <p>sale is going on</p> </br> <button style="background-color:"red";><a style="color : black" href="./index.html">iphone - ${a}rs</a> </button>`;

// //   popup.setAttribute("class", "active");
// //   popParent.setAttribute("class", "active1");
// // })(55000);
// // },2000)


// console.clear();


//       // higher order and call back function


//       function function1(){
//         console.log("higher order function");
        
//       }

//       function function2(){
//         console.log("call back function");
        
//       }

//       function1(function2())


//       function add(callback,a,b){// c=sub,a=20,b=40
//         console.log(a+b); // 60
//         callback(20,20)   // sub(20,20)
//       }

//       function sub(num1,num2){
//         console.log(num1-num2); // 0
//       }

     

//       add(sub,20,40) // argument




//       function calculate(callback1, callback2, x, y, z) {

//         // c1 = di, c2 = pr , x=10 , y = 20 , z = 5
//         console.log(x + y + z); // 10 + 20 + 5 = 35 
//         callback1(y, z); // 20 , 5 , difference(20,5)
//         callback2(x, z); // 10 , 5 , product(10,5)
//       }

//       function difference(a, b) { // a=20 , b = 5
//         console.log(a - b); // 20 - 5 = 15
//       }

//       function product(p, q) { // 10 , q = 5
//         console.log(p * q); // 10*5 = 50
//       }

//       calculate(difference, product, 10, 20, 5);

//       // 35 crct
//       // 15 crct
//       // 50 crct

//       console.clear();
      

//       // generator function
      

//       function* gen(){
//         yield "click me you will get cashback reward"
//         yield "try next time best luck"
//         yield "you will get 100% cashback"
//       }

//       let genVal = gen()

//       console.log(genVal.next().value);
//       console.log(genVal.next().value);
//       console.log(genVal.next().value);


//       // Es6 edition 


//       // spread operator

//       // array , object

//       // [...] , {...}

let arr1 = [1,2,3,4]
let arr2 = [5,6,7,8]

let totalArr = [...arr1,...arr2,9]

console.log(totalArr);

let obj1 = {
  name1 : "a",
  role  : "trainee",
  salary : 100000
}

let obj2 = {
  name11 : "b",
  role1  : "developer",
  salary1 : 400000
}

let totalObj = {...obj1,...obj2}

console.log(totalObj);




//       // two arr , obj you can merge & clone

      

//       // rest operator

//       // function

//       // (...)

//       // use to we can mulitiple argument store in parameter
      
      function store(a,b,...c){

        console.log(c);

        let c1 = c[0]

        console.log(c1);
        

        console.log(a+b+c1);
        
      }

      store(1,2,3,4,5,6,7,8,9,10)

      console.clear();
      


      // destracture

      let arr3 = [1,2,3,4]

      console.log(arr3);

      console.log(1+arr3[1]);



      let [a1,a2,a3,a4] = arr3

      console.log(a1+a2+a3);


      let nestedVal = [1,2,3,[4,5,6,[7]]]

      console.log("nested val :",nestedVal[3][3][0]);

      let [b1,b2,b3,[b4,b5,b6,[b7]]] = nestedVal


      console.log(b6);

      console.clear();
      

      // advanced array


      let array1 = [1,2,3,4,"one",true,null,undefined,["a","b"]]

      console.log(array1[2]);

      // homogeneous

      // hetrogenous

      // flexible

      // array manipulated method

      // if add method you can add mulitiple val

      // if u use to remove activity method you can only remove one val


      // pop() - remove last value in array
      // push() - add last value
      // shift() - remove first value
      // unshift() - add first value
      // splice()


      let array2 = [1,2,3,4]

      array2.pop()
      array2.push(4,5,6,7)

      array2.shift()
      array2.unshift(0,1)

      console.log(array2);

      // splice(1.startingIn,deleteCount,addingVal)

      let array3 = [10,2,3,4,50]

      array3.splice(1,3,20,30,40)

      console.log(array3);


console.clear();


      // array merge method
      
      
      

      // 1. concat()

      let sample1 = [1,2,3,4]
      let sample2 = [5,6,7,8]

      let totalVal = sample1.concat(sample2,9,10);

      console.log(totalVal);
      

      // 2. slice() // si , ei

      let sample3 = [10,1,2,3,40]

      let sliceVal = sample3.slice(1,4)

      console.log(sliceVal);
      

      // 3. flat()

      let sample4 = [1,2,3,[4,[5,[6]]]]

      let flatVal = sample4.flat(Infinity)

      console.log(flatVal);
      

      // 4. fill()

      let sample5 = [1,2,3,4] // 1,2,3,"four"

      sample5.fill("four",3,5) // value,si,ei

      console.log(sample5);
      

      // 5. includes()

      let sample6 = [1,2,3,44,22]

      let includesVal = sample6.includes(30)

      console.log(includesVal);
      

      // 6. indexOf()

      let sample7 = [1,2,3,4,4,3,2,1]

      let indexVal = sample7.indexOf(2,3)// value, from Index

      console.log(indexVal);
      

      // 7. lastIndexOf()

      let sample8 = [1, 2, 3, 4, 4, 3, 2, 1];

      let lastIndexOfVal = sample8.lastIndexOf(2,5) // value , fromIndex

      console.log(lastIndexOfVal);


      // convert arr --> string


      // join()

      let sample9 = [1,2,3,4]

      let joinVal = sample9.join()
      console.log(sample9);
      
      console.log(joinVal);
      

      // toString()


      let sample10 = [1,2,3,4]

      console.log(sample10.toString());
console.clear();


      // array higher order method 

      // 1. forEach()

      let product = ["bmw","audi","jaguar","benz"]

     let forEachVal =  product.forEach((c,i,t)=>{
        return(c);
        
      })

      console.log(forEachVal);
      


      // 2. map()

     let mapVal =  product.map((c,ind,totArr)=>{
        return(c);
        
      })

      console.log(mapVal);
      


      // 3. filter()

      let employee = [
        {eName : "a", eSalary : 100000},
        {eName : "b", eSalary : 200000},
        {eName : "c", eSalary : 300000},
        {eName : "d", eSalary : 400000},
        {eName : "e", eSalary : 500000},
        {eName : "f", eSalary : 600000},
      ]


      let salaryDetials = employee.filter((c,i,t)=>{
        return c.eSalary > 200000
      })

      console.log(salaryDetials);
      


      // 4. find()

      let findVal = employee.find((c,i,t)=>{
        return c.eSalary > 200000
      })

      console.log(findVal);
      
employee = [
  { eName: "a", eSalary: 100000 },
  { eName: "b", eSalary: 200000 },
  { eName: "c", eSalary: 300000 },
  { eName: "d", eSalary: 400000 },
  { eName: "e", eSalary: 500000 },
  { eName: "f", eSalary: 600000 },
];

      // 5. reduce

      let reduceVal = employee.reduce((acc,c,i,t)=>{
        return acc+c.eSalary

        // acc = 0 + 100000 = 100000
        // acc = 1L + 200000 = 3L
        // acc = 3L + 3L = 6L

        // acc = 6L + 4L = 10L
        // acc = 10L +5L = 15L
        // acc = 15L + 6L = 21L

        // return  21L + 0 = 21L
      },0) // 100000 // 3L // 6L // 15L // 21L


      console.log(reduceVal);
      
      console.clear();
      
      
      // sort()

      let sample11 = [2,332,"A",3,1,500,7,8,1]

      let sortVal = sample11.sort()

      console.log(sortVal);


      // higherorder function


      // 1. sort

      let sample12 = [1,4,33,3,6,8,333,2]

      // 1 2 3 4 6 8 33 333


      let hsortVal = sample12.sort((a,b)=>{
        return b-a
      })

      console.log(hsortVal);
      
      

      // 2. some - or 

      let sample13 = [1,2,3,4]

      let someVal = sample13.some((c,i,t)=>{
        return c%2==1

        // 1%2==1 true
        // 2%2==1 false
        // 3%2==1 true
        // 4%2==1 true

        // true || false || true || false = true
      })

      console.log(someVal);
      



      // 3. every - and


      let sample14 = [2,2,2,2]

      let everyVal = sample14.every((c,i,t)=>{
        return i%2==0

        // 0%2==0  true
        // 1%2==0  false
      })
      

      console.log(everyVal);
      
      console.clear();
      


// string method

//🔹 Basic String Methods

// length

let str = "javascript"

let strLength = str.length

console.log(strLength);


// toUpperCase()

str = "javascript";

let upper = str.toUpperCase()

console.log(upper);


// toLowerCase()

let lower = "JAVA"

let lowerCase = lower.toLowerCase()

console.log(lowerCase);


// trim()

let str1 = " hello "

console.log(str1);


let trimVal = str1.trim()

console.log(trimVal);


// trimStart()
str1 = " hello ";

let start = str1.trimStart()

console.log(start);



// trimEnd()


let end = str1.trimEnd()

console.log(end);


// 🔹 Searching & Finding

// indexOf()

let str2 = "javascript"

let indexOfVal = str2.indexOf("a",2) // value , fromIndex

console.log(indexOfVal);


// lastIndexOf()

str2 = "javascript";

let lastIndexOfVal1 = str2.lastIndexOf("a",2)

console.log(lastIndexOfVal1);




// includes()


str2 = "javascript"

let includesVal1 = str2.includes("J")

console.log(includesVal1);


// startsWith()

let startsCheck = str2.startsWith("j")

console.log(startsCheck);


// endsWith()

let endsCheck = str2.endsWith("t")

console.log(endsCheck);


// 🔹 Extracting Parts of a String

// slice()

let str3 = "helloworld"

let sliceVal1 = str3.slice(5,10)

console.log(sliceVal1);



// 🔹 Replacing & Modifying

// replace()

let str4 = "javascript"

let replaceVal = str4.replace("java","type") // value , expactval
console.log(replaceVal);

// concat()

let str5 = "java"
let str6 = "script"

let finalVal = str5.concat(str6)

console.log(finalVal);


// repeat()

let str7 = "javascript"

let repeatVal = str7.repeat(11)

console.log(repeatVal);

// 🔹 Splitting & Joining

// split()

let str8 = "iron-man-spider-man"

let splitVal = str8.split("m")

console.log(splitVal);


// 🔹 Character Access

// charAt()

let str9 = "javascript"

let charAtVal = str9.charAt(2)

console.log(charAtVal);


// charCodeAt()

let str10 = "java"

let charCodeAtVal = str10.charCodeAt(1)

console.log(charCodeAtVal);

      
console.clear();
    

// // // Date


let dateVal = new Date()

console.log(dateVal);


// get

// year

let getYear = dateVal.getFullYear()

console.log(getYear);


// month

let getMonth = dateVal.getMonth()

console.log(getMonth+1);

// date

let getDate =  dateVal.getDate()

console.log(getDate);

// day

let getDay = dateVal.getDay()

console.log(getDay);

// hour

let getHour = dateVal.getHours()

console.log(getHour);

// minutes

let getMinutes = dateVal.getMinutes()

console.log(getMinutes);

// seconds

let getSeconds = dateVal.getSeconds()

console.log(getSeconds);

// time

let time = dateVal.toLocaleTimeString()

console.log(time);

// date

let date = dateVal.toLocaleDateString()

console.log(date);

// time / date

let allData = dateVal.toLocaleString()

console.log(allData);


// set


let dataval1 = new Date()

console.log(dataval1);


// year 

dataval1.setFullYear(2003)

console.log(dataval1);

// date

dataval1.setDate(30)

console.log(dataval1);

// month

dataval1.setMonth(0)

console.log(dataval1);

// hour

dataval1.setHours(23)

console.log(dataval1);

// minutes

dataval1.setMinutes(55)

console.log(dataval1);

// seconds

dataval1.setSeconds(1)
console.log(dataval1);



// // birthday day finder

// let year = prompt("enter your birthday year")
// let month = prompt("enter your birthday month")
// let date1 =prompt("enter your birthday Date")

// let dataVal2 = new Date()

// dataVal2.setFullYear(year)
// dataVal2.setMonth(month-1)
// dataVal2.setDate(date1)

// console.log(dataVal2);

// let dayData = dataVal2.getDay()



// let dayInfo = ["sun","Mon","tue","wed","thu","fri","sat"]


// alert(dayInfo[dayData])

console.clear();

// async

// setTimeout

// setTimeout(()=>{

//   let dataval3 = new Date()

//   console.log(dataval3.toLocaleTimeString());
  

// },3000)

// // setInterval

// setInterval(()=>{
//   let dataval3 = new Date();

//   console.log(dataval3.toLocaleTimeString());
// },5000)


function one(){
  console.log("one");
  
}

function two(){
  console.log("two");
  
}

function three(){
  console.log("three");
  
}

one()
setTimeout(two,2000)
three()


// promise

// 1. resolve
// 2. reject
// 3. bending

fetch("https://fakestoreapi.com/products/")
.then((data)=>{
  return data.json() 
})
.then((jsData)=>{
  console.log(jsData);
  jsData.forEach((c,i,t)=>{
    console.log(c.title);
    
  })
  
})








