// js实现继承的方法
// c创建一个动物的父类
function Animal(name) {
    // 属性
    this.name = name || 'Animal';
    // 方法
    this.sleep = function() {
        console.log(this.name + '正在睡觉')
    }
}
// // 原型方法
// Animal.prototype.eat = function(food) {
//     console.log(this.name + '正在吃'+ food)
// }

// // 原型链继承 -- 将父组件的实例作为子类的原型
// function Cat() {}
// Cat.prototype = new Animal();
// Cat.prototype.name = 'cat';
// var cat = new Cat();
// console.log(cat.name); // cat 
// console.log(cat.eat('fish')) // cat正在吃fish
// console.log(cat.sleep()); //cat正在睡觉
// console.log(cat instanceof Animal) // true
// console.log(cat instanceof Cat) // true

// function Cat(name) {
//     Animal.call(this);
//     this.name = name || 'tom';
    
// }
// var cat = new Cat();
// console.log('我是构造继承')
// console.log(cat.name); // tom
// console.log(cat.sleep()); // tom正在睡觉
// console.log(cat instanceof Animal); // false
// console.log(cat instanceof Cat); // true

// // 实例继承

// function Cat(name) {
//     var instance = new Animal();
//     instance.name = name || 'hom';
//     return instance;
// }
// var cat = new Cat();
// console.log('我是实例继承')
// console.log(cat.name); // hom
// console.log(cat.sleep()); // hom正在睡觉
// console.log(cat instanceof Animal); // true 
// console.log(cat instanceof Cat) // false

// // 拷贝继承
// function Cat(name) {
//     var animal = new Animal();
//     for(var p in animal) {
//         Cat.prototype[p] = animal[p];
//     }
//     Cat.prototype.name = name || 'lcy'
// }

// var cat = new Cat('hh');
// console.log('我是拷贝继承')
// console.log(cat.name); // hom
// console.log(cat.sleep()); // hom正在睡觉
// console.log(cat instanceof Animal); // true 
// console.log(cat instanceof Cat) // true

// 组合继承
// function Cat(name){
//     Animal.call(this);
//     this.name = name || 'Tom';
//   }
//   Cat.prototype = new Animal();
  

  
//   Cat.prototype.constructor = Cat;
  
//   // Test Code
//   var cat = new Cat();
//   console.log(cat.name);
//   console.log(cat.sleep());
//   console.log(cat instanceof Animal); // true
//   console.log(cat instanceof Cat); // true

// 利用class 构造一个父类
class Person {
    constructor(name,age) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log(this.name)
    }
}

// 继承
class User extends Person {
    constructor(name,age,tel) {
        super(name,age);
        this.tel = tel
    }
    call() {
        console.log(this.tel)
    }
}
const user = new User('lili',18,1723723321)
console.log(user.name);
user.say()
user.call();