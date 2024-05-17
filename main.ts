
//  1) Miles to Kilometer converter(Operators): //

let miles = 12; // (in miles) //
let kilometeres = miles*1.60934;
console.log(`The distance of ${miles} miles is equal to ${kilometeres} kilometers`)

// 2) Evaluating a number //
import inquirer from "inquirer";

let user = await inquirer.prompt([
    {
        name:"input",
        type:"number",
        message:"Enter a number:",
    }
]);
let number = Math.floor(Math.random()*100);
if(user.input === number){
    console.log(`${user.input} is equal to ${number}`)
}
else if(user.input > number){
    console.log(`${user.input} is greater than ${number}`)
}
else{
    console.log(`${user.input} is less than ${number}`)
}

// 3) Friend checker game //

let User = await inquirer.prompt([
    {
        name:"name",
        type:"input",
        message:"Enter your Name:",
    }
]);
switch(User.name.toLowerCase()){
    default:{
        console.log(`Hey,${User.name.toLowerCase()} you dont seem to be one of my friends...`)
        break;
    };
    case 'mustafa':{
        console.log(`${User.name.toLowerCase()},You're my friend!`)
        break;
    };
    case 'ammara':{
        console.log(`${User.name.toLowerCase()},You're my friend!`)
        break;
    };
    case 'bismah':{
        console.log(`${User.name.toLowerCase()},You're my Bestfriend!`)
        break;
    };
    case 'iqra':{
        console.log(`${User.name.toLowerCase()},You're my friend!`)
        break;
    };
}

// 4) Functions //

let num1= 5
let num2 = 4

// Calling this function the first time //

function multiplyNumbers(num:number,Num:number){
    return num*Num;
}
console.log(multiplyNumbers(num1,num2));

// Calling this function the second time using two more numbers //

let num3= 2
let num4= 4

console.log(multiplyNumbers(num3,num4))

// 5) Calculator project using function: //

let numval1 :number = 4
let numval2 :number = 8
let operation ="*";
function Calculator(numval1:number,numval2:number,operation:string){
    if(operation === "-"){
     return numval1-numval2;
    }
    else if(operation === "+"){
        return numval1+numval2
    }else if(operation === "/"){
        return numval1/numval2
    }else if(operation === "*"){
        return numval1*numval2
    }
}
console.log(Calculator(numval1,numval2,operation))

operation = "-";
console.log(Calculator(numval1,numval2,operation))

 // 6) Anonymous functions:

let  variable = function(argument:string){
    console.log(argument);
}
variable("hello world");

function print(arg:string){
    console.log(arg);
}
print("HELLO WORLD :D");

                                // THE END  :D //