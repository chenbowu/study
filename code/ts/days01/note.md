# TS学习第一天笔记

### 1.TypeScript与JavaScript

- 1.1 `TypeScript`是`JavaScript`的一个超集，也就是在`JavaScript`的基础上做了扩展，所以我们在`TypeScript`中可以添加任何`JavaScript`实现的代码。

- 1.2 `TypeScript`不能在浏览器中直接运行，需要通过`TypeScript`编译器，将写好的`.ts`文件编译成使用正常JavaScript语法的`.js`文件、

- 1.3 TypeScript可以静态检检测类型，在我们编写代码时就能确定数据类型，而JavaScript只能在运行时知道数据的类型

  

### 2.如何使用TypeScript

- 2.1 安装TypeScript编译器

  `npm install typescript`

- 2.2 初始化一个配置文件

  `npx tsc --init`

- 2.3 编写一个`app.ts`的文件

  ```typescript
  const msg = 'Hello World';
  console.log(msg);
  ```

- 2.4 使用编译器将`.ts`文件编译成的`.js`文件

  `npx tsc app.ts`

  