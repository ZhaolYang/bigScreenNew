### 常见设计模式及应用场景

设计模式，最简单的理解就是可复用的解决方案，接下来介绍一些常见的设计模式。

#### 构造函数(构造器)模式

构造函数用于创建特定的对象(基本对象或自定义对象)实例
``` javascript
function Person(name,age) {
  this.name = name;
  this.age = age;
}

Person.prototype = {
  sayName: function() {
    alert('Hi! My name is ' + this.name);
  }
}

var person = new Person('Amy','25');
console.log(person.name); // 'Amy'
console.log(person.age); // 25
```

##### 使用场景：
最常见的构造函数是js基本类型的构造函数，常见用法如下

``` javascript
// 创建一个数组
var arr = new Array(1,2,3)
console.log(arr); // [1,2,3]
```

#### 工厂模式

工厂模式用于声明多个类似对象，可以解决实例化对象产生大量重复的问题。

``` javascript
function createPerson(name) {
  var person = {
    name: name,
    sayName: function() {
     console.log(this.name);
    }
  }
  return person;
}

var a = createPerson('张三'),
  b = createPerson('李四'); // a和b为互不相关的两个独立对象，拥有类似的属性和对象方法
```

##### 使用场景：
- 当对象或组件涉及高复杂性时
- 当需要根据所在的不同环境轻松生成对象的不同实例时
- 当处理很多共享相同属性的小型对象或组件时

#### 单例模式
单例模式用于返回同一个引用。

``` javascript
var Person = (function(){
  var instance,
    init = function(name) {
      return {
        name: name
      }
    };
  return {
    createPerson: function(name) {
      if(!instance) {
        instance = init(name);
      }
      return instance;
    }
  } 
}())

var a = Person.createPerson('张三');
var b = Person.createPerson('李四');

console.log(a); // {name: '张三'}
console.log(b); // {name: '张三'}
```

##### 使用场景：
举个例子：日常开发中自定义的弹出对话框的实现可以采用单例模式，避免重复定义对象，节约内存。

### 混合模式(mixin)
混合模式最常用的使用场景为对象继承

``` javascript
var Person = function(name, age) {
  this.name = name;
  this.age = age;
}

Person.prototype = {
  sayName: function() {
    console.log(this.name);
  }
}

var Student = function(name,age, score) {
  Person.call(this, name, age);
  this.score = score;
}
Student. prototype= Object.create(Person.prototype);

Student.prototype.getScore = function() {
  console.log(this.score);
}

var s = new Student('小明',16,100);
s.sayName(); // '小明'
s.getScore(); // 100
```

### 模块模式
利用闭包实现的一个私有作用域。

``` javascript
var Person = (function(){
  var name = '张三';
  function sayName() {
    console.log(name);
  }
  return {
    name: name,
    sayName: sayName
  }
}())

Person.sayName(); // '张三'
```

### 发布订阅模式
``` javascript
var subPub = (function(){
  var event = {};
  function on(evt, handler){
    event[evt] = event[evt] || [];
    event[evt].push({
      handler: handler
    });
  }

  function fire(evt,args) {
    if(!event[evt]) return;
    for(var i=0,len=event[evt].length;i<len;i++){
      event[evt][i].handler(args);
    }
  }

  // 取消订阅
  function off(evt) {
    delete event[evt];
  }

  return {
    on: on,
    fire: fire
  }
}())
```

#### 使用场景
自定义事件的实现可以使用订阅发布模式


参考：  
[JavaScript设计模式一：工厂模式和构造器模式](https://segmentfault.com/a/1190000002525792)  
[深入理解JavaScript 模块模式](https://www.oschina.net/translate/javascript-module-pattern-in-depth)  
[design-patterns-tutorial](https://github.com/slashhuang/design-patterns-tutorial)  