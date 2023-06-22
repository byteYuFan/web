
example();

// console.log(x); // 报错，x is not defined，x 不在作用域内

// 重复声明错误
// let z = 30;
// let z = 40; // 报错，Identifier 'z' has already been declared

// 循环中的块级作用域
for (let i = 0; i < 3; i++) {
    setTimeout(function () {
        console.log(i); // 输出 0, 1, 2
    }, 1000);
}
function example() {
    let x = 10; // 块级作用域变量
    if (true) {
        let y = 20; // 块级作用域变量
        console.log(x); // 输出 10
        console.log(y); // 输出 20
    }
    // console.log(y); // 报错，y is not defined，y 不在作用域内
}
