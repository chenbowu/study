# TS学习第一天笔记
### 基础知识

TypeScript是JavaScript的一个超集
TypeScript中可以直接写JavaScript代码
TypeScript会进行静态类型检测，JavaScript只能在运行时确认类型

# TypeScript编译器
- 安装命令
    `npm install -g typescript`
- 初始化一个TS的默认配置文件
    `npx tsc --init`
- 编译TS文件
    `npx tsc demo.ts`
    编译的后的文件与TS文件同名，后缀为JS
    TypeScript会为尝试自动推断数据类型，所以在许多情况下我们不需要手动声明数据类型
- 什么时候会自动推断
  - 给变量初始化时
    `let msg = 'Hello World!'`此时TypeScript会为我们自动推断出msg的数据类型
    数据类型确定后，后续就不能修改了的。

- 指定编译ES版本
    `npx tsc --target es2015 demo.ts`