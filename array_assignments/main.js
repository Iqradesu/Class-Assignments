//✧˖°🌷📎⋆ ˚｡⋆୨୧˚ Assisnments of Array ˚୨୧⋆｡˚⋆📎🌷°˖✧//
export {};
// Question 1: //
//  let fruits:string[]=["apple","banana","mango","orange"];
// question 2: //
//  let numbers:number[]=[10,20,30,40];
//  // Question 3: //
//  let thirdFruit = fruits[3];
//  // Question 4: //
//  numbers[2]=25
// Question 5: //
//  fruits.push("grape")
// Question 6: //
// let lastFruit=fruits.pop();
// console.log(lastFruit)
// Question 7: //
// let firstFruit =fruits.shift()
// Question 8: //
// fruits.unshift("kiwi")
// Question 9: //
// fruits.splice(1,2) 
// Question 10: //
// fruits.splice(2,0,"pineapple","pear")
// Question 11: //
// let citrusFruits=fruits.slice(0,2)
// Question 12: //
// let LastTwoFruits = fruits.slice(2)
// PART 1:BASIC ARRAYS-PRODUCT Inventory //
// type Product={
//     name:string,
//     price:number,
//     color:string,
//     inventory:{
//         stock:number,
//         colorOptions:string[],
//     },
// }
// let products:Product[] =[{
//     name:"sneakers",
//     price:5000,
//     color:'red',
//     inventory:{
//         stock:50,
//         colorOptions:["black","white","pink","red"],    
//     }
// },
//     {
//     name:"hoodie",
//     price:4000,
//     color:'red',
//     inventory:{
//         stock:30,
//         colorOptions:["black","white","pink","red"],
//     }
// },
//     {
//     name:"t-shirt",
//     price:2500,
//     color:'red',
//     inventory:{
//         stock:150,
//         colorOptions:["black","white","pink","red"],
//     }
// }
// ]
// function changeColor(productt:string,newColor:string){
//     let product=productt.toLowerCase();
//     if(products.some((object)=>object.name===product)){
//         products.forEach((object)=>{
//             if(object.name===product){
//                 if(object.inventory.colorOptions.includes(newColor)){
//                     object.color=newColor;
//                     if(newColor==='black'){
//                         object.price = object.price+(object.price*10/100)
//                     }else if(newColor==='white'){
//                         object.price = object.price+(object.price*3/100)
//                     }else if(newColor==='pink'){
//                         object.price = object.price-(object.price*10/100)
//                     }else if(newColor==='red'){
//                         object.price = object.price+(object.price*5/100)
//                     }
//                     console.log(object)
//                 }else{
//                     console.log(`Color not included in color options\n\n[${object.inventory.colorOptions}]`)
//                 }
//             }
//         })
//     }else{
//         console.log("This product does not exist");
//     }
// }
// changeColor('sneakers','black')
// Multi-Dimensional Arrays and Tuples-student Grades //
// type Student ={
//     name:string,
//     grades:number[],   
// }
// let students:Student[]=[{
//     name:"Ahmed",
//     grades:[45,50,97,66],
// },
// {
//     name:"Iqra",
//     grades:[89,91,100,75],
// },
// {
//     name:"Laraib",
//     grades:[75,82,90,55],
// }
// ]
// function calculateAverageGrade(Name:string){
//             if(students.some(object=>object.name===Name)){
//                 students.forEach((Object)=>{
//                     if(Object.name === Name){
//                         if(Object.grades.length===0){
//                             console.log(`cannot generate the average for student ${Name}`)
//                         }else{
//                             let averageofstudents = (Object.grades.reduce((pre,next)=>{return pre+next}))/Object.grades.length;
//                             console.log(`the average of the student ${Name} is ${averageofstudents}`);
//                         }
//                     }
//                 });
//             }else{
//                 console.log(`Student of Name '${Name}'does not exist.`)
//             }
// }
// calculateAverageGrade("Laraib")
// ARRAY WITH TYPES AND INDEXING-EMPLOYEE SALARIES //
// type Employee={
//     name:string,
//     hoursWorked:number,
//     hourlyRate:number,
//     salary:number,
// }
// let employees:Employee[]=[{
//     name:"eren",
//     hoursWorked:16,
//     hourlyRate:25,
//     salary:16*25,
// },{
//     name:"mikasa",
//     hoursWorked:23,
//     hourlyRate:30,
//     salary:23*30,
// },{
//     name:"levi",
//     hoursWorked:25,
//     hourlyRate:31,
//     salary:25*31,
// }]
// function calculateSalary(Name:string){
//     let Namee = Name.toLowerCase()
//     if(employees.some(object=>object.name===Namee)){
//                         employees.forEach((Object)=>{
//                             if(Object.name === Namee){
//                                 if(Object.hoursWorked >= 20){
//                                     let Salaryy = Object.salary+(Object.salary*0.1)
//                                     console.log(`The salary of employee ${Namee} is $${Salaryy} including 10% bonus`)
//                                 }
//                                 else{
//                                     console.log(`The salary of employee ${Namee} is $${Object.salary}`)
//                                 }
//                             }
// })
// }
// else{
//     console.log(`Sorry the Employee named ${Namee} doesn't exists`)
// }
// }
// calculateSalary("mikasa")
// ✧˖°ʚ🍓ɞ♡  THE END :D ɞ♡🍓✧˖°ʚ// 
