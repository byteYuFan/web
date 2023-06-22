// 测试javascript变量

console.log(x); // 输出 undefined，变量提升
var x = 10;

function example() {
    var y = 20;
    if (true) {
        var z = 30;
        console.log(y); // 输出 20，y 在函数作用域内可见
    }
    console.log(z); // 输出 30，z 在函数作用域内可见
}

example();

console.log(x); // 输出 10，全局作用域中的变量
