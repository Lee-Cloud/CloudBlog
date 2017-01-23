#### 写在最前面
　　之前一直是angular的拥护者，上个月angular2.0正式发布，本打算这条路走到黑，打开[angular2.0官网](https://angular.io/)准备撸撸文档，What the f**k?只有TS有中文文档？好在我英语还没还给体育老师，装个有道词典，QuickStart顺利撸完后迫不及待地想开始官方DEMO《英雄指南》，结果简直不能忍，Tutorial连份JS英文文档都没有，包括后面的ADVANCED和COOKBOOK不英文文档也不全！！
　　刚好Vue2.0也发布了，趁着这个机会干脆就转战Vue了。目前看来，Vue令我相当满意，原因如下：
- Vue更为轻量，适用场景更广，不管是大型的SPA应用，或者一个简单的页面都能胜任。
- Vue和angular的思维方式类似，从angular转VUE并不别扭。
- 据说VUE性能更快，更容易上手。angular2.0水有点深啊~
- 对华人的作品有莫名亲切感

机智如我决定拿angular的DEMO开刀，废话不多说，我们开始吧。

#### Vue安装
- 使用npm安装，构建大型项目时推荐使用NPM安装。
```
$ npm install vue
```
- 或者直接下载并用`<script>`标签引入，`Vue`会倍注册为一个全局变量，由于我们这是只是一个DEMO，推荐使用这种方式。

#### 功能介绍
　　简单介绍一下功能，有Dashboard和Heroes两个选项卡，Dashboard选项卡显示排名前四位英雄，下面一个英雄搜索框；Heroes选项卡像是当前所有英雄及排名，可添加、删除。
　　传统上是使用JQuery操作DOM来实现上述功能。都2016了啊哥，还在使用JQ？Vue是一套构建用户界面的--先进框架--，和angular类似的，属于**MVVM框架**，核心是**数据驱动模型**，即通过数据改变视图模型，不直接操作DOM。是不是有点屌？

#### 实现
- **Html结构&CSS**
```
<!DOCTYPE html>
<html>
  <head>
    <title></title>
  </head>
  <body>
    <div class="container"></div>
    <script type="text/javascript" src='vue.js'></script>
    <script type="text/javascript" src='app.js'></script>
  </body>
</html>
```
HTML基本结构如上，我还引入了mobile.js是用来做响应式移动端适配的可以忽略，`.container`里该写什么写什么，CSS也不再赘述，都不是本次的重点，参考DEMO做出一样的静态页面对大家来说都不是什么事儿了。

- **重点是app.js**
在app.js里我们直接创建一个Vue实例
```
var app = new Vue({
//el的值为一个选择器，即该Vue实例是运行在该元素及其后代元素中的。
  el:“.container”,
//所谓‘数据’驱动中的‘数据’就是指下面‘data’里的内容。  
  data:{
    heroes:["东方不败","令狐冲","张无忌","赵敏"],
    new_hero:""
  },
//methods里的内容为事件函数
  methods:{
    fun1:function(){
	  do something.
	},
	fun2:function(){
	  do something.
	}
  }
})
```

举个例子
```
<div class="container">
  <p>{{ heroes }}</p>
  <button v-on:click="fun1">do something</button>
</div>
```

上面的例子表示将数组heroes绑定到`<p></p>`里，通过双花括号实现。
而button上绑定一个点击事件，点击后触发fun1函数。通过`v-on:click`实现。
这些和angular是非常类似的，数据通过双花括号绑定到模型上，`v-on:click`对应angular的`ng-click`，还有之后的`v-model` `v-if` `v-for`
分别对应着angular里的`ng-model` `ng-if` `ng-repeat`

#### 写在最后
上面只是我自己对VUE初次体验的一些小总结，对于之前没接触过MVVM的同学可能属于雾里看花，如果你对VUE也感兴趣，以下的资料推荐给大家。
- [Vue.js官网](http://vuejs.org/)，这里有最官方，最权威的第一手资料。
- [Vue V2.0中文](http://vuefe.cn/)，这是Vuejs2.0的中文文档翻译。
- [Vuejs2.0 文档攻略](http://larabase.com/collection/2/post/108)，这是LaraBase上总结的一个快速入门专辑。