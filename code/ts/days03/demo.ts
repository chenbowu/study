// interface pay {
// }

// class WxPay {
//     constructor() {

//     }
// }
// function firstElement<Type> (arr: Type): Type | undefined {

// }
// function fn(x: string): string {
//     console.log(x);
//     return x;
// } 
// fn('Hello World!');

// const el = document.getElementById('foo');
// if (!el) throw new Error('找不到id为foo的元素');
// // Type is HTMLElement
// el.innerHTML = 'TypeScript';
// function greeter(fn: (a: string) => void) {
//   fn("Hello, World");
// }
 
// function printToConsole(s: string) {
//   console.log(s);
// }
 
// greeter(printToConsole);
// TODO 函数类型声明参数为一个时，能否像 `JavaScript` 中的箭头函数一样省略括号？
// type TestFunction = a: string => void; // Error
// type GreetFunction = (a: string) => void;
// function greeter(fn: GreetFunction) {
//     // Do some thing.
// }
type SomeObject = {

}

// 表示该函数在调用时必须传入一个参数且为 string 类型，返回值为 SomeObject 类型。
type SomeConstructor = {
    new (s: string): SomeObject;   
};
// 当我们没有为该函数定义返回类型时，TypeScript 会尝试为我们自动推断出类型。
// The Function return type is SomeObject.
// function fn(ctor: SomeConstructor) {
//     return new ctor('hello');
// }

// TODO 怎么实现符合这个接口的函数

// interface CallOrConstruct {
//   new (s: string): Date;
//   // (n?: number): number;
// }

interface CallOrConstruct {
  new (s: string): Date;
  (n?: number): number;
}

const myTest: CallOrConstruct = <CallOrConstruct >function myDate(this: any, n?: any): any {

    if (this instanceof myDate) {
        return new Date(n);
    } else {
        return n ? n : 0;
    }
}


// function MyDate(s: string) {
//   if(s && new.target) {
//     return new Date();
//   }
// }
// function MyDate(n?: number): number | undefined {
//   if(n != null) {
//     return n;
//   }
// }

