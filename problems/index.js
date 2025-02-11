// 1. 1. What will be the output of the following code, and why?
// ```javascript
// for (let i = 0; i < 3; i++) {
//   setTimeout(() => console.log(i), 1000);
// }
// ```
// Hint: Understand how `let` maintains block scope 
// compared to `var`.


// ans : output whould be  :0,1,2 : because let where has block scope , so for every ietration it will create new instance wiith new reference for variable, so everytime you will get new value
//  and if var this there it will create glboal variable with same refernace each time,so we get value same that is length , each time
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log("i=",i), 1000);
}



// 2. 2. Can you reassign a `const` variable if it holds an object? Explain with 
// an example.
// Hint: Focus on the immutability of the reference, not 
// the object's properties.

// ans:
// Yes, you can modify the properties of an object assigned to a const variable, 
// but you cannot reassign the const variable itself to a new object. 
// The key thing to understand here is that const only ensures that the reference to the object is immutable, 
// not the object’s internal properties.
// ex.

const myObj = {
    name: "mamta",
    gender:"female"

}
// we can modify the properties of object
myObj.name ="sp";
console.log("myObj ",myObj)
// myObj = {
//     name: "Krtitika",
//     gender:"female"

// }

// console.log("myObj ",myObj)
// here we are trying to reassign object to const variable so it will trow type error