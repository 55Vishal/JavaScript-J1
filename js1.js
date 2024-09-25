// * Call ,Apply and Bind method in Javascript

let name1 = {
    firstName: "Vishal",
    lastName: "Malusare",
}
printFullName = function (homeTown, state) {
    console.log(this.firstName + ' ' + this.lastName + " from " + homeTown + " , " + state);
}

printFullName.call(name1, "Panchgani", "Maharashtra");

let name2 = {
    firstName: "Suraj",
    lastName: "Shinde",
}
// Call method : function borrowing
printFullName.call(name2, "Satara", "Maharashtra");

//Apply method= passing arguments in the array
printFullName.apply(name2, ["Satara", "Maharashtra"]);

//  y = it keeps the copy of the method which can be invoke or call later.

let printMyName = printFullName.bind(name2, "Satara", "Maharashtra");
console.log(printMyName);
printMyName();


// let name = {
//         firstName : "Vishal",
//         lastName : "Malusare",
//         printFullName : function(){
//               console.log(this.firstName + ' '+ this.lastName);
//         }
// }

//  name.printFullName();