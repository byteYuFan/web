const PI = 3.14159; // 声明常量 PI，并赋值为 3.14159
console.log(PI); // 输出 3.14159

// PI = 3.14; // 报错，Assignment to constant variable

function example() {
    const x = 10; // 声明块级作用域的常量 x，并赋值为 10
    console.log(x); // 输出 10
    // x = 20; // 报错，Assignment to constant variable
}

example();

// console.log(x); // 报错，x is not defined

const person = {
    name: "John",
    age: 30,
};

person.age = 40; // 可以修改对象的属性
console.log(person); // 输出 { name: 'John', age: 40 }

const numbers = [1, 2, 3];
numbers.push(4); // 可以修改数组的元素
console.log(numbers); // 输出 [1, 2, 3, 4]
