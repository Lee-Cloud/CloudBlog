#### 写在最前面
　　入坑后大部分时间都是在做移动端页面，个人也更喜欢移动端的开发，原因嘛，首先没有了低版本IE兼容的问题，然后移动端屏幕就那么大，内容不可能大多、太杂，不像PC端页面，各种模块都往上面仍（其实就是懒。。。），再者，移动端是趋势吧个人看法。下面分享一下入坑以来移动端开发的一些个人经验、总结。
#### 响应式布局
> 所谓响应式布局，就是让一个网站能兼容多个终端，解决不同尺寸设备，不同分辨率导致的布局、显示问题，尤其是移动端页面。

- 一种方案是媒体查询（media query）,根据不同分辨率范围写不同的CSS样式，如下代码表示宽度在800px到1024px之间的屏幕应用body里的css。媒体查询的缺点就是不连续，且需要根据不同分辨率写很多的CSS代码，个别地方可以使用，但这不是我们今天要讲的重点。
```bash
@media screen and (min-width: 800px) and (max-width: 1024px){
  body{...}
}```
- 另一种方案是rem布局。
前端开发常用长度单位有：
	- px：绝对长度单位。最常用的长度单位，不再多说，绝对长度单位明显不适用于响应式布局，PASS掉。
	- em：相对长度单位。相对于父元素font-size的倍数。
	- rem：相对长度单位。相对于根元素(即html元素)font-size计算值的倍数。
	
em及rem均适用于响应式布局，考虑到em的参照值不确定，使用rem会更明确、不容易出错。
rem的使用方式如下：
```bash
html{
  font-size:30px;
}
```
此时，1rem = 30px;
```bash
div{
  width:10rem;  //10rem = 300px,即div的宽度为300px
}
```
因此，我们可以用JS动态的根据屏幕宽度来设置相应的html的font-size值，并且CSS中的长度单位均使用rem即可实现响应式布局。
```bash
<script>
  // 假设设计稿的宽度为720px，window.innerWidth为当前屏幕分辨率,window.inner/7.2是为了计算方便。
  document.getElementsByTagName('html')[0].style.fontSize = window.innerWidth / 7.2 + 'px';
  // 此时 1rem即为720px设计稿中的100px.
</script>
```

#### 关于meta标签
- viewport设置，H5页面自动适配设备宽度，配合rem布局完美实现响应式布局
```bash
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
```
- 禁止将页面中的数字自动识别为电话号码
```bash
<meta name="format-detection" content="telephone=no" />
```
- 禁止安卓平台对邮箱的自动识别
```bash
<meta content="email=no" name="format-detection">
```
- 当网站添加到主屏幕快速启动方式，可隐藏地址栏，仅针对ios的safari
```bash
<meta name="apple-mobile-web-app-capable" content="yes" />
```

#### 关于CSS
- css reset
```bash
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
}
ol,ul,dl{
  list-style:none;
}
```
- input相关
```bash
input{
  //去除IOS按钮圆角样式
  -webkit-appearance: none;
  //解决安卓部分机型placeholder字体向上偏移问题
  line-height:normal;
}
input::-webkit-input-placeholder{
  // 改变placeholder样式
  color:#444;
  text-align:center;
  font-size:30px;
}
```
- 其他
```bash
  //点击颜色
  -webkit-tap-highlight-color: rgba(0,0,0,0);
  //禁止选中文字
  -webkit-user-select:none;
```

#### 关于Click
- 触摸事件相应顺序
```bash
touchstart
touchmove
touchend
click
```
- 点击事件300ms延时
由于移动端存在双击放大事件，因此click屏幕时并不会马上触发click事件，而是会等待300ms判断用户是否有第二次点击触发放大事件，这并不是我们想要的。
解决方案1：个人推荐方案
```bash
//禁止视口缩放可消除300ms延时
<meta name="viewport" content="user-scalable=no">
```
解决方案2：用引入fastclick.js。
解决方案3：用touchstart事件代替click事件。

#### 杂七杂八
- 单行文本溢出不换行并显示省略号
```
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
```
- 多行文本溢出显示省略号
```
display: -webkit-box;
-webkit-box-orient: vertical;
-webkit-line-clamp: 3;
overflow: hidden;
```
- 文本显示方式
```
writing-mode: horizontal-tb;    /* 默认值 */
writing-mode: vertical-rl;
writing-mode: vertical-lr
```

`horizontal-tb`表示，文本流是水平方向(horizontal)的，元素是从上往下(tb:top-bottom)堆叠的。
`vertical-rl`表示文本是垂直方向(vertical)展示，然后阅读的顺序是从右往左(rl:right-left)，跟我们古诗的阅读顺序一致。
`vertical-lr`表示文本是垂直方向(vertical)展示，然后阅读的顺序还是默认的从左往右(lr:left-right)，也就是仅仅是水平变垂直
#### 未完待续
不定期更新。