# Days03 TypeScript Handbook

## 函数类型表达式（Function Type Expressions）

 > 描述函数最简单的方法是使用函数类型表达式。
 > 这些类型在语法上类似于箭头函数。
 > 声明时函数的参数必须用**括号包裹**，不能省略括号。

``` javascript
// fn: (a: string) => void) 
// 表示具有一个类型为 string 的参数(名为 a)的函数，该函数没有返回值。 
// 函数类型声明时参数必须使用括号包裹。
// type GreetFunction = a: string => void; // 这是错误的声明放方式。
function greeter(fn: (a: string) => void) {
  fn("Hello, World");
}
// 定义一个符合 greeter 函数 
function printToConsole(s: string) {
  console.log(s);
}
 
greeter(printToConsole);
```

> 注意：函数类型的参数名是必须的。如果没有指定参数的类型，那么它会隐式声明为 `any` 类型。
> 函数类型 `(string) => void` 会表示为一个具有类型为 `any` 的 `string` 参数！

我们也可以用类型别名来为函数类型定义一个有意义的别名，这使得我们能够从别名就能清楚该类型的作用，以及后续复用这个函数类型。

``` javascript
type GreetFunction = (a: string) => void;
function greeter(fn: GreetFunction) {
    // Do some thing.
}
```

## 调用签名（Call Signatures）

> 在 JavaScript 中，函数除了可以调用之外，还可以具有属性。但是，函数表达式语法不允许声明。如果我们想用属性来描述可调用的东西，我们可以用对象类型来写一个调用签名。

``` javascript
type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
};
function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}
```

> 注意：这种声明方式与函数类型表达式是有所不通的。
> 在函数类型表达式中参数列表与返回值之间使用的是 `=>`，在对象类型声明中使用的是 `:`。

## 构造签名（Construct Signatures）

- 如何定义构造签名
  
  ``` javascript
  type SomeConstructor = {
    new (s: string): SomeObject;   
  };
  function fn(ctor: SomeConstructor) {
      return new ctor('hello');
  }
  ```

``` javascript
// 如何实现这个接口
interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}

const myTest: myDateCallOrConstruct = <CallOrConstruct >function myDate(this: any, n?: any): any {

    if (this instanceof myDate) {
        return new Date(n);
    } else {
        return n ? n : 0;
    }
}

console.log(myTest(0));
console.log(new myTest('2021-10-10'));
```
