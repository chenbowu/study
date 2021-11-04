// function padLeft(padding: number | string, input: string) {
//   if(typeof padding === 'number') {
//       return new Array(padding + 1).join(' ') + input;
//   }
//   return new Array(padding + 1).join(" ") + input;
// }
// function padLeft(padding: number | string, input: string) {
//   if (typeof padding === "number") {
//     return new Array(padding + 1).join(" ") + input;
//   }
//   return padding + input;
// }
// In JavaScript, null of type object
// TODO 需要注意的是，在 JavaScript 中 null 也是 object 类型，所以 TypeScript 推断出 strs 的类型为 string[] | null。
// function printAll(strs: string | string[] | null) {
//   if (strs && typeof strs === "object") {
//     // 通过检查 strs 是否真实，防止了 null 值进入此分支
//     // 这至少防止了我们在运行代码时出现可怕的错误，比如：
//     // TypeError: null is not iterable（null 不是可迭代的）
//     for (const s of strs) {
//       console.log(s);
//     }
//   } else if (typeof strs === "string") {
//     console.log(strs);
//   } else {
//     console.log(strs);
//     // do nothing
//   }
// }
// TypeScript 将 typeof padding === 'number' 其视为一种称为类型保护的特殊代码形式
// 将类型细化为比声明时的类型更具体的类型的过程称为类型收窄
// 有几种不通的TypeScript结构可以用于类型收窄
// typeof type guards（类型保护）
// Truthiness narrowing（真实性缩小）
// function getUsersOnlineMessage(numUsersOnline: number) {
//   if (numUsersOnline) {
//     return `There are ${numUsersOnline} online now!`;
//   }
//   return "Nobody's here. :(";
// }
// both of these result in 'true'
var type1 = Boolean("hello"); // type: boolean, value: true
// TODO 为什么 type 是 Boolean 而不是 true
var type = !!"world"; // type: true,    value: true
// function printAll(strs: string | string[] | null) {
//   // !!!!!!!!!!!!!!!!
//   //  DON'T DO THIS!
//   //   KEEP READING
//   // !!!!!!!!!!!!!!!!
//   if (strs) {
//     if (typeof strs === "object") {
//       for (const s of strs) {
//         console.log(s);
//       }
//     } else if (typeof strs === "string") {
//       console.log(strs);
//     }
//   } else {
//     console.log(strs);
//   }
// }
// function multiplyAll(
//   values: number[] | undefined,
//   factor: number
// ): number[] | undefined {
//   if (!values) {
//     return values;
//   } else {
//     return values.map((x) => x * factor);
//   }
// }
function example(x, y) {
    if (x === y) {
        // TODO 因为 string 是 x 和 y 都可以接受的唯一通用类型，所以 TypeScript 知道第一个分支中的字符必须是字符串。
        // We can now call any 'string' method on 'x' or 'y'.
        x.toUpperCase();
        y.toLowerCase();
    }
    else {
        console.log(x);
        console.log(y);
    }
}
