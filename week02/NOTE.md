# 每周总结可以写在这里

# 作业
## 写一个正则表达式 匹配所有 Number 直接量

``` js
/ ^([1-9][\d]+|0)(\.[\d+])?$ | ^[01]+$ | ^0[bB][01]+$ | ^[0-7]+$ | ^0x[a-f0-9]{1,2}$ | ^0X[A-F0-9]{1,2}$ |^[A-F0-9]{1,2}$ | ^[a-f0-9]{1,2}$ /
```
## 写一个 UTF-8 Encoding 的函数

``` js
function encodeUtf8(text) {
    const code = encodeURIComponent(text);
    const bytes = [];
    for (var i = 0; i < code.length; i++) {
        const c = code.charAt(i);
        if (c === '%') {
            const hex = code.charAt(i + 1) + code.charAt(i + 2);
            const hexVal = parseInt(hex, 16);
            bytes.push(hexVal);
            i += 2;
        } else bytes.push(c.charCodeAt(0));
    }
    return bytes;
}
```

## 写一个正则表达式，匹配所有的字符串直接量，单引号和双引号
``` js
/(^[\u4E00-\u9FA5A-Za-z0-9]+$ | (?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*/
```

# 本周的学习总结

## 语言的分类（按语法）
- 非形式语言
  - 中文、英文
- 形式语言（乔姆斯基谱系）
  - 0型: 无限制文法
    - 等号左边不止一个  ::= "c"
  - 1型: 上下文相关文法
    - "a""c"::="a""x""c"
  - 2型: 上下文无关文法
    - js, 大部分情况是上下文无关
  - 3型: 正则文法
    - 限制表达能力

## 产生式（BNF）
形成语言产生式：
- BNF
  - 语法结构
    - 复合结构称非终结符
    - 基础结构称终结符
  - 符号
    - ()可以有括号
    - |表示或
    - *表示重复多次
    - +表示至少一次
- EBNF
- ABNF

## 练习：编写带括号的四则运算产生式
```
定义数字类型
<Number> = "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
<DecimalNumber> = "0" |  (("1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9")<Number>*)

四则运算
<PrimaryExpresstion> =
	<DecimalNumber> |
  "("	<LogicExpression> ")"

乘除法表达式
<MultiplicativeExpression> =
  	<PrimaryExpresstion> |
    <MultiplicativeExpression> "*" <PrimaryExpresstion> |
    <MultiplicativeExpression> "/" <PrimaryExpresstion>

加减法表达式
<AdditiveExpression> =
  	<MultiplicativeExpression> |
    <AdditiveExpression> "+" <MultiplicativeExpression> ｜
    <AdditiveExpression> "-" <MultiplicativeExpression>

逻辑表达式
<LogicExpression> =
    <AdditiveExpression> |
    <LogicExpression>  "||" <AdditiveExpression>  |
        <LogicExpression>  "&&" <AdditiveExpression>
```

## 图灵完备性
图灵完备性：
在可计算性理论里，如果一系列操作数据的规则（如指令集、编程语言、细胞自动机）可以用来模拟单带图灵机，那么它是图灵完全的。这个词源于引入图灵机概念的数学家艾伦·图灵。虽然图灵机会受到储存能力的物理限制，图灵完全性通常指“具有无限存储能力的通用物理机器或编程语言”。

## 动态语言于静态语言
- 动态：
  - 在用户的设备/在线服务器上
  - 产品实际运行时
  - Runtime
- 静态：
  - 在程序员的设备上
  - 产品开发时
  - Compiletime

## 类型系统
- 按动静划分
  - 动态类型
  - 静态类型
- 按是否隐式转换划分
  - 强类型
  - 弱类型
- 按复合类型划分
  - 结构体
  - 函数签名
- 加入继承后
  - 逆变/协变