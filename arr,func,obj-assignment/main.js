// BUILDING YOUR FRIEND LIST //
export {};
// let people ={
//     friends:[] as friends[],
// }
// type friends={
//     firstname:string,
//     lastName:string,
//     id?:string,
// }
// let friend1:friends={
//     firstname:"iqra",
//     lastName:"ghaffar",
//     id:"Iqradesu"
// };
// let friend2:friends={
//     firstname:"bisma",
//     lastName:"ghaffar",
//     id:"bisma123"
// };
// let friend3:friends={
//     firstname:"ammara",
//     lastName:"ghaffar"
// };
// people.friends.push(friend1,friend2,friend3);
// console.log(people);
//MANIPULATING AN ARRAY:REARRANGING WORDS //
// let scrambledArray =["student","of",true,123,"am","a","GIAIC","I"];
// let newArray=[];
// newArray.unshift(scrambledArray[7]);
// newArray.push(scrambledArray[4]);
// newArray.push(scrambledArray[5]);
// newArray.push(scrambledArray[0]);
// newArray.push(scrambledArray[1]);
// newArray.push(scrambledArray[6]);
// console.log(newArray.join(" "));
// COMPANY PRODUCT CATALOG //
// let inventory =[]               
// type product={
//     name:string,
//     model:string,
//     cost:number,
//     Quantity:number,
// }
// let product1:product ={
//     name:"infinix",
//     model:"hot 10 play",
//     cost:200,
//     Quantity:10
// }
// let product2:product={
//     name: "Apple MacBook Air",
//     cost: 1000,
//     Quantity: 5,
//     model: "MGN63LL/A"
// }
// let product3:product={
//     name: "Nike Air Force 1",
//     cost: 90.00,
//     Quantity: 20,
//     model: "CI0057-00"
// }
// inventory.push(product1,product2,product3);
// console.log(inventory)
// console.log(inventory[0].Quantity)
// console.log(inventory[1].name)
// console.log(inventory[2].cost)
// console.log(inventory[0].model)
// Object.defineProperty(inventory[0],'city',{value:'New york',writable:true,enumerable:true,configurable:true});
// console.log(inventory[0]);
// STUDENT-LIST ORGANIZER //
// interface student {
//     name:string,
//     seniorStatus:boolean,
//     assignmentCompleted:boolean
// }
// let students :student[]=[
//     {
//         name:"iqra",
//         seniorStatus:false,
//         assignmentCompleted:true,
//     },
//     {
//         name:"bisma",
//         seniorStatus:true,
//         assignmentCompleted:true,
//     },
//     {
//         name:"ammara",
//         seniorStatus:false,
//         assignmentCompleted:false,
//     },
//     {
//         name:"mustafa",
//         seniorStatus:true,
//         assignmentCompleted:true,
//     }
// ];
// // // Find Senior Students with Assignments (Optional) //
// function findingseniorassignmentcompletedstudents (){
//     let findingseniorassignmentcompletedstudents = students.filter((studentt) =>studentt.assignmentCompleted === true && studentt.seniorStatus === true)
//     console.log("\n\t ====> Following are the students who are seniors and have complete assignments <====\n")
//     console.log(findingseniorassignmentcompletedstudents)
// }
// findingseniorassignmentcompletedstudents()
// class list updat-Removing students who have completed their assignments //
// Removing students who have completed their assignments //
