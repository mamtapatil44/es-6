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


// 3. What are the benefits of using `let` and `const` over `var` in ES6? 
// Provide real-world examples.
// Hint: Think about block scoping and hoisting 
// differences

// ans:
// 1 . let and const have block scope , scope with {} ,so if we trying to access that variable outside of that scope ,it wull give refenece tye error
//  var variable have function or global scope

// var and let can declare and reassign the value for it ,but for const it is not possible it will throw tyep error

// redeclare only var variable can be redclare but it will make confusion in the code,so its not reliable

// hoisting : var avraiable is hoisted we can access the var araiable value before declaring it with undefined
// let are not hoisted ,they have temporal dead zone :means time perios for delaction to intializing ,if we access this between taht zone,it will give refernce type error

// benefits of let and const
// Block Scoping: Avoids issues of variables leaking into unintended scopes.
// Hoisting with Temporal Dead Zone (TDZ): Reduces the chance of using variables before they are initialized.
// Immutability with const: Protects variables from accidental reassignment, while still allowing modification of object properties.
// Prevention of Redeclarations: Reduces errors due to accidentally redeclaring variables in the same scope.
// Cleaner Code: Encourages more predictable and readable code



// 4. 4. Explain why the following code throws an error:
// ```javascript
// const a;
// a = 10;
// ```
// Hint: Consider how `const` must be initialized at 
// declaration.

// ans:
// When you declare a variable with const, JavaScript expects that variable to have a value immediately. 
// This is different from let or var, which allow you to declare a variable and initialize it later.
// The statement const a; is incomplete because a is declared without a value.
// JavaScript expects an initializer (i.e., a value) to be assigned at the point of declaration.
// This is why the code throws the error: "Missing initializer in const declaration."



// 5. 5. Is it possible to use a `const` variable before its declaration? Why or 
// why not?
// Hint: Explore the concept of the 'temporal dead zone'

// ans:No, it is not possible to use a const variable before its declaration. This is because of hoisting and the Temporal Dead Zone in JS.
// Variables declared with const (and let) are hoisted to the top of their block scope, 
// but unlike var, they do not get initialized to a default value (undefined). 
// Instead, they remain in a "dead zone" until their declaration is encountered in the code.
// The TDZ refers to the period between the start of the block and the point where the const variable is declared and initialized. During this period, 
// trying to access the variable will result in a ReferenceError because the variable is hoisted but not yet initialized.



//  6. Explain the difference between a regular function and an arrow 
// function with regard to `this` context.
// Hint: Arrow functions inherit `this` from their 
// enclosing scope.
// ans: In a regular function, the value of this is determined by how the function is called, not by where it's defined. This is often referred to as the "dynamic" or "runtime" binding of this.
// Arrow functions, on the other hand, do not have their own this. Instead, they inherit the this value from the enclosing lexical scope


// 7. 7. Rewrite the following code using an arrow function:
// ```javascript
// function add(a, b) {
//   return a + b;
// }
// ```
// Hint: Arrow functions offer a more concise syntax.

const add = (a,b)=>{
return a+b
}
console.log("addition",add(5,6))

// 8. 8. Why does the following code throw an error?
// ```javascript
// const obj = {
//   value: 10,
//   increment: () => {
//     this.value++;
//   },
// };
// obj.increment();
// ```
const obj = {
  value: 10,
  increment: () => {
    this.value++;
  },
};
// obj.increment(); // can not read property of undfined

console.log("value",obj.value)


// 9. How can you use arrow functions to simplify array transformations?
// Hint: Think about methods like `.map()` and 
// `.filter()`
// asns: Arrow functions can significantly simplify array transformations because they allow you to write concise, 
// clean, and more readable code, especially when using methods like .map(), .filter(), and .reduce().
// Since arrow functions are shorter and automatically lexically bind this, they are perfect for these array methods, 
// where you typically want to operate on each element without worrying about this.


