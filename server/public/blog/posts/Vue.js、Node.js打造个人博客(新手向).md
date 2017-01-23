#### 前言
> 做为一名立志全栈的页面仔，一直想着要独立开发一个项目，从前台到后台到数据库，从设计到开发到上线。一般说到这样的练手项目，通常得到的意见都是写个博客系统呗！刚好对之前用hexo部署在GitHub Page上的博客的傻瓜式及龟速实在忍无可忍，于是乎，就写个博客系统呗！先放上链接[Cloud's Blog](http://www.lee-Cloud.xyz)

#### 方案
- UI风格：主要参考[Randy's Blog](http://lutaonan.com/)的风格，并加入自己的一点想法（主要是为了偷懒）。
- 前端页面：基于Vue2.0的响应式SPA，啊？你问我为什么？就如《关于》中的自我介绍：我自认为擅长Vue的SPA开发。
- 后台：前端工程师通向全栈的捷径：Node.js。负责写接口及渲染静态页面。
- 数据库：原计划是用MongoDB，但为了赶进度，索性数据库都不用了，第一版就先这样吧。
- 文章：参考hexo用markdown语法写好文章再转成html的做法。也是在本地编辑好md格式的文章，上传到服务器，Node.js直接读取md文件并转化为html,返回给前台，这也是为什么暂时不需要数据库的原因。
- 部署：AWS，一年时间免费使用哦！你问我一年后怎么办？God knows!也许一年时间已经让我经历了从入门到放弃。

#### 扬帆！起航！
1. 页面布局：自己看[Cloud's Blog](http://www.lee-Cloud.xyz)，简单介绍下。第一屏为一张壁纸宽高均为100%铺满整个可视区域，内容有博客名称、小标题及三个关于博主的链接；点击向下箭头滚动进入第二屏正题，分为四个Tab模块：【首页】、【文章】、【作品】、【关于】。默认为【首页】，即最新一篇文章详情，【文章】为文章列表，点击可阅读文章内容，【作品】为作品列表，这部分还没完成，【关于】为关于博主的一些介绍。PS：首屏的壁纸在Google图片里找了一上午才找到这张还算满意的，考虑到手机端壁纸是居中铺满整个可视区域，要找到一张PC端手机端效果都还行且逼格不能太低的图片真的不容易，BTW，博主还是选择困难症患者。

2. 前端开发：从Vue脚手架开始
```
# 全局安装 vue-cli
$ npm install --global vue-cli
# 创建一个基于 webpack 模板的新项目
$ vue init webpack blog
# 安装依赖，走你
$ cd blog
$ npm install
$ npm run dev
```
然后安装Vue-router用于SPA路由及vue-resource或axios用于Ajax。
```
$ npm install --save vue-router
$ npm install --save axios
# vue官方推荐的ajax库不再是vue-resource,而是axios
```
然后就可以开始码静态页面了，根据第一步页面布局的思路写出静态页面应该不是什么难事，其中需要调用第三步中node.js提供的接口，这里就不再多说了。完成静态页面后编译
```
$ npm run build
```

3. 后端开发：创建服务端目录结构并安装express框架及marked用于将md文件转为html
 ```
 $ mkdir blog-server && cd blog-server
 $ mkdir public
$ npm install --save express
$ npm install --save marked
 ```
 写接口，目前主要有三个接口。
  1. 获取文章列表接口。fs.readdir方法读取md文件所在文件夹，返回所有md文件的文件名即文章标题、创建时间、文章路径，并按创建时间排序渲染在【文章】页。
  2. 文章内容接口。根据第一个接口返回的文件名及路径，用fs.readFile方法读取md文件的内容并用marked转为html并返回给客户端，渲染在文章内容页。
  3. 首页内容接口。类似接口2，读取最新一篇文章并返回。记得处理跨域问题。
  ```
  app.all('*', function(req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Headers", "X-Requested-With");
      res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
      res.header("X-Powered-By",' 3.2.1')
      res.header("Content-Type", "application/json;charset=utf-8");
      next();
  });
  ```

  渲染静态页面，将第二部编译出来的静态文件及md格式的文章文件拷入public文件夹，并用express内置的中间件指定public文件夹为静态资源文件的根目录并缓存。因为是单页应用，所以记得要处理好404错误。
  ```
# server.js
var express = require('express');
var app = express();
app.use(express.static('public',{maxAge:60*60*24*30}));
app.get('/',function(req,res){
	res.sendFile('/index.html',{root: __dirname + '/public/'});
});
app.listen(80);
  ```
4. 部署

  - 申请[AWS（亚马逊云主机）](https://aws.amazon.com/cn)，一年免费试用，需填信用卡信息。实例一台EC2，win或Linux系统,推荐Linux。开放相应端口并安装node.js。
  - 安装[PM2](http://pm2.keymetrics.io/docs/usage/quick-start/)，并运行第三步的server.js服务,并让PM2随系统启动。
```
$ npm install -g PM2
$ pm2 start server.js
$ pm2 startup
```
此时我们的博客系统已经运行在EC2上了。
  - 购买域名。我是在腾讯云上购买的xyz域名，第一年8块钱。解析到该EC2的公网IP上，即可通过域名访问。比如通过 http://www.lee-cloud.xyz 可访问我的博客。

#### 未来计划
1. 完成【作品】Tab页，现在虽然勉强上线了，但缺了这一块逼死强迫症啊。
2. 后台管理，功能模块暂定为
 - 文章上传
 - 作品上传
 - 【关于我】内容编辑
 - 首页定制
3. 启用MongoDB数据库
4. 界面美化、性能优化
5. 评论功能
6. seo

#### 写在最后
仅此记录Cloud's Blog初版上线过程
