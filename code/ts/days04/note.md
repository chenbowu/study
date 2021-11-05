# Days04

## Object Types（对象类型）

### 0x00 How defined （如何声明）

> 在 javascript 中 我们传递数据通常使用对象，在 TypeScript 中我们可以使用以下几种方式为对象指定类型。

- 匿名对象类型

``` javascript
function greet(person: {name: string, age: number}) {
    return `Hello${peroson.name}`;
}

```

- 使用接口命名

``` javascript
interface Person {
    name: string;
    age: number;
}

function greet(person: Person) {
    return `Hello ${person.name}`;
}
```

- 使用类型别名

``` javascript
type Person = {
    name: string;
    age: number;
}

function greet(person: Person) {
    return `Hello ${person.name}`
}
```

### 0x01 Property Modifiers（属性修饰符）

- Optional Properties（可选属性）

``` javascript
// 在属性名后天添加 `?` 号，该参数就会被指定为可选参数。
```
