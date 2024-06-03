                                      //✧˖°🌷📎⋆ ˚｡⋆୨୧˚ Assisnments of LOOPS ˚୨୧⋆｡˚⋆📎🌷°˖✧//


// CREATING A LESSON PLAN(USING FOR-LOOP) //
let mywork:any=[];
type lesson={
    name:string,
    status:boolean,
    }

for(let i=1 ; i<=10 ; i++){

    let LESSON:lesson={
        name:`lesson ${i}`,
        status:true,
    }
    LESSON.status = i%2 === 1 ?true:false;

    mywork.push(LESSON)
}

console.log(mywork)

// GUESSING GAME (USING WHILE LOOP)

let maxVal = 10;
let randomNumber = Math.floor(Math.random()*maxVal)+1
console.log(`\n\t------====**-**-**={(the generated number is ${randomNumber})}=**-**-**====------\n`)

let correctguess=false;
let guesses:number[]=[1,2,3,4,12,6,7,8,9,10]
let index = 0
while(correctguess=== false && index<guesses.length){
    if(guesses [index]===randomNumber){
        correctguess = true
        console.log("You have guessed the correct number!!! :D")
    }
    else if(guesses [index]>randomNumber){   
        console.log("The number you have guessed is too high! ")
    }
    else{
        console.log("your guess is too low!!")
    }
    index++
}

 // COUNTER INCREMENT USING DO WHILE LOOP //

let counter:number=0
let step =1
do{
    console.log(counter)
    counter=counter+step
    step++

}while(counter<=100)


// Exploring Objects with for...in Loop //

let myObject:any ={
    item1:"airpods",
    item2:"macbook",
    item3:"iphone 14 pro"
}
for(let element in myObject){
    console.log(`${element} : ${myObject[element]}`)
}

// 5.Exploring Arrays with Loops(Using loop ) //

let myArray:number[]=[]

for(let i=1 ; i<=10 ; i++){
    myArray.push(i)
}
console.log(myArray);
// let index=0
for(let index=0 ; index<myArray.length ; index++){
    console.log(` ${index}) ${myArray[index]}`)
}

// Use the for...of loop to output the value into the console from the array //

for(let element of myArray){
    console.log(element)
}

                                            // ✧˖°ʚ🍓ɞ♡  THE END :D ɞ♡🍓✧˖°ʚ//















