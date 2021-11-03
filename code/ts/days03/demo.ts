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

const el = document.getElementById('foo');
if (!el) throw new Error('找不到id为foo的元素');
// Type is HTMLElement
el.innerHTML = 'TypeScript';