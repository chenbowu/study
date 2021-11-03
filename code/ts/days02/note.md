# Days02 TypeScript Handbook

## 0x00 类型收窄（ Type Narrowing ）

TypeScript 类型收窄就是从宽类型转换成窄类型的过程。

类型收窄常用于处理联合类型变量的场景，一个常见的例子就是非空检查：

``` javascript
// Type is htmlElement | null
const el = document.getElementById('foo');
if (el) {
    // Type is htmlElement
    el.innerHTML = 'semlinker';
} else {
    // Type is null
    alert('id为foo 的元素不存在')；
}
```

代码中给 el 赋值时已经确定了变量的类型为 htmlElement | null。

如果 el 为 null，则在第一个分支中的代码将不会执行。因此，TypeScript 能够从此段代码块内的类型中排除 null 类型，从而产生更窄的类型，更易于使用。
