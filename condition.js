
var marks = 85;

//if
if ( marks > 75 ) {
    console.log("Distinction");
}

//if else
if (marks > 35) {
    console.log("Pass...");
} else {
    console.log("fail");
}

//else if : multiple , 
if (marks >= 75) {
    console.log("disti");
} else if(marks >= 60 && marks < 75) {
    console.log("first cls");
} else if(marks >= 50 && marks < 60) {
    console.log("sec cls");
} else if(marks >= 35 && marks < 50) {
    console.log("passed");
}
else {
    console.log("fail");
}
let amount = 100;

switch (amount) {
    case 50:
        console.log("you have 50rs");
        break;
    case 60:
        console.log("you have 60rs");
        break;
    case 80:
        console.log("you have 80rs");
        break;
    case 100:
        console.log("you have 100rs");
         break;
    case 90:
        console.log("you have 90rs");
        break;
    default:
        console.log("u hv money ");
      
}


let a = 90; //assgment opr

b = 20;

if(b == "80"){  //== equality opr : it will chk only value not data type
console.log("b has 80");
}

if( b === "80") {   //=== equality opr : it chks for value as well as data type
console.log("bjhbhjbjh");
}


if (b > 20) {
    console.log("jkjkjk");
}
if (b < 20) {
    console.log("jkjkjk");
}

if (b == 20) {
    console.log("jkjkjk");
}

if (b >= 20) {
    console.log("jkjkjk");
}
if (b <= 20) {
    console.log("jkjkjk");
}

if (b != 20) {
    console.log("jkjkjk");
}

let c = true;
if (c) {
  console.log('bhjhj');  
}

if (!c) {  //!false>>true , !true>> false
    console.log("!!!");
}



let d = 90;
if (d) {
    console.log('dddddddd');
}

if (!d) {
    console.log('dddddddd');
}

let e = null;   //undefined/null/false>>false
if (e) { 
    console.log('eeeeeeeee');
}

if (!e) { 
    console.log('eeeeeeeee');
}