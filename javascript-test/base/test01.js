function foo() {
    var x = 1;
    function bar() {
        var y = 2;
        console.log(x); // 1 (函数 `bar` 包含了 `x`)
        console.log(y); // 2 (`y` 在作用域内)
    }
    bar();
    console.log(x); // 1 (`x` 在作用域内)
    console.log(1)
    //    console.log(y); // 在严格模式（strict mode）下将抛出 ReferenceError，`y` 仅在 `bar` 函数的作用域内
}

foo();

// 这是学习javascript的第一天

//
// catName("hyt")
// function catName(name){
//     console.log("My cat name is " + name)
// }
//
// console.log(num)
// var num
//   num = 18
// console.log(num);

// // Example 1 - only y is hoisted
// var x = 1;                 // 声明 + 初始化 x
// console.log(x + " " + y);  // '1 undefined'
// var y = 2;                 // 声明 + 初始化 y
//
// // Example 2 - Hoists
// var num1 = 3;                   // Declare and initialize num1
// num2 = 4;                       // Initialize num2
// console.log(num1 + " " + num2); //'3 4'
// var num2;                       // Declare num2 for hoisting
//
// // Example 3 - Hoists
// a = 'Cran';              // Initialize a
// b = 'berry';             // Initialize b
// console.log(a + "" + b); // 'Cranberry'
// var a, b;                // Declare both a & b for hoisting
'use strict';

