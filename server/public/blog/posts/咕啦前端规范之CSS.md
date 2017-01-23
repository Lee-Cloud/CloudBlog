#### 前言
> 为提高团队协作开发效率，统一代码书写规范是很有必要的。一套优秀的书写规范不仅能提高代码质量、性能、可读性，而且有助于后期项目升级、维护，方便项目管理。原则是：简洁、有序。

#### CSS文件的分类、引用
- 采用外部样式表引入方式，做到结构与样式分离，提高代码可读性。
- 样式表引入置于body之前head之间，script引入置于页面底部，防止JS脚本阻塞html文件解析，提高页面渲染速度。
- 若引入多个样式表，需按照其性质、用途合理命名并按顺序依次引用。
```
<!--CSS重置样式表-->
<link href="path/to/reset.css" rel="stylesheet" type="text/css"/>
<!--公共样式表-->
<link href="path/to/common.css" rel="stylesheet" type="text/css"/>
<!--app样式表-->
<link href="path/to/app.css" rel="stylesheet" type="text/css"/>
```
- 生产环境中若用到第三方CSS库时请引用压缩版本，例如`bootstrap`，不要引用~~bootstrap.css~~。
```
<link href="//cdn.bootcss.com/bootstrap/3.3.7/css/bootstrap.min.css" rel="stylesheet">
```

#### 命名规范
- 所有命名一律小写。
- 语义化，禁止使用诸如 ~~abc~~，~~a1~~，~~a2~~ 等无实际意义的样式名或者ID。布局类命名规则如下：
 - 外套 wrap -- 用于最外层
 - 头部 header -- 用于头部
 - 主要内容 main -- 用于主体内容（中部）
 - 左侧 main-left -- 左侧布局
 - 右侧 main-right -- 右侧布局
 - 导航条 nav -- 网页菜单导航条
 - 内容 content -- 用于网页中部主体
 - 底部 footer -- 用于底部
- 多单词统一使用“-”连接，不要使用下划线或者驼峰命名以区分JS变量名。例如：
```
/* 不推荐 */
.header_logo {...}
.headerLogo {...}
/* 推荐 */
.header-logo {...}
```

#### 语法规范
- 用两个空格代替制表符（Tab），保证在任何环境下的一致性（不同编辑器Tab表示的空格数不一样）。
- 为选择器分组时，将单独的选择器单独放在一行。例如：
```
/* 不推荐 */
.selector, .selector-secondary, .selector-tertiary {...}
/* 推荐 */
.selector,
.selector-secondary，
.selector-tertiary {...}
```
- 对于只包含一条声明的样式，为了易读性和便于快速编辑，建议将语句放在同一行。
```
.span1 { width: 60px; }
.span2 { width: 140px; }
.span3 { width: 220px; }
```

- 对于带有多条声明的样式,为了代码的易读性，在每个声明块的左花括号前添加一个空格,声明块的右花括号应当单独成行。
```
/* 不推荐 */
.selector{position:relative;margin:10px;}
/* 推荐 */
.selector {
    position: relative;
    margin: 10px;
}
```
- 每条声明语句的 : 后应该插入一个空格。每条声明都应该独占一行且以";"结尾。
```
/* 不推荐 */
.selector {
    width: 100px;height:100px
}
/* 推荐 */
.selector {
    width: 100px;
    height: 100px;
}
```

- 对于 + , > , ~ 等选择器两边统一留一个空格
```
/* 不推荐 */
.selector+.selector-secondary~.selector-tertiary {...}
/* 推荐 */
.selector > .selector-secondary + .selector-tertiary {...}
```

- 十六进制数应全部小写，且能缩写均缩写
```
/* 不推荐 */
    color: #ffffff;
    color: #FFF;
/* 推荐 */
    color: #fff;
```

- 能缩写的属性均缩写
```
/* 不推荐 */
    padding-top: 10px;
    padding-right: 20px;
/* 推荐 */
    padding: 10px 20px 0 0;
```

- 避免为0值指定单位
```
/* 不推荐 */
    padding-top: 0px;
/* 推荐 */
    padding-top: 0;
```

#### 声明顺序
1. 定位
2. 盒模型
3. 字体相关
4. 背景相关
5. 其他
```
.declaration-order {
  /* 定位 */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;

  /* 盒模型 */
    margin: 10px 10px;
    padding: 10px 10px;
    width: 100px;
    height: 100px;

  /* 字体相关 */
    font: normal 13px "Helvetica Neue", sans-serif;
    line-height: 1.5;
    color: #333;
    text-align: center;

  /* 背景 */
    background-color: #f5f5f5;
    border: 1px solid #e5e5e5;
    border-radius: 3px;

  /* 其他 */
    opacity: 1;
    animate: slide 0.5s linear;
}
```
由于定位可以从正常的文档流中移除元素，并且还能覆盖盒模型相关的样式，因此排在首位。盒模型排在第二位，因为它决定了组件的尺寸和位置。
其他属性只是影响组件的内部或者是不影响前两组属性，因此排在后面。

#### 注释
- 代码是由人编写并维护的。请确保你的代码能够自描述、注释良好并且易于他人理解。好的代码注释能够传达上下文关系和代码目的。不要简单地重申组件或 class 名称。
对于较长的注释，务必书写完整的句子；对于一般性注解，可以书写简洁的短语。
```
/* 不推荐 */
    /* Modal header */
      .modal-header {
          ...
      }
/* 推荐 */
    /* Wrapping element for .modal-title and .modal-close */
      .modal-header {
          ...
        }
```

#### 参考资料
- [bootstrap编码规范](http://codeguide.bootcss.com/#css)
- [徐尤熙知乎回答](https://www.zhihu.com/question/38773260)
- [fex-team的GitHub](https://github.com/fex-team/styleguide/blob/master/css.md)

#### 写在最后
- 咕啦前端规范之CSS篇 v0.0.1--By Lee-Cloud于2016-11-2一个夜黑风高的加班夜，欢迎补充指正！
