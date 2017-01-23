#### 写在最前面
　　作为一名自喻为前端工程师的页面仔，没有个人技术博客似乎就装的不太像了？今天是Cloud's Blog搭建的第一天，趁热打铁分享一下如何利用Hexo + GitHub Pages快速搭建个人博客。希望对跟我一样初次搭建博客的你有所帮助，老司机们就当看个热闹，如有错误请指正。
#### 简介
- [Hexo](https://hexo.io/zh-cn/)
 > Hexo是一个快速、高效、简洁、由Node.js驱动的博客框架。

 其以生成速度快，支持MarkDown语法便于写作，一键部署到GitHub Pages、Herokud等网站，插件系统丰富便于扩展等特点而备受青睐。
- [GitHub Page](https://pages.github.com/)
 > GitHub Pages is designed to host your personal, organization, or project pages from a GitHub repository.
 
 其搭建简单，免费托管，自由度高，可绑定域名等特点，非常适合用户博客搭建。

#### 个人搭建环境
- windows 7 x64
- [Node.js](https://nodejs.org/en/) v6.7.0
- npm 3.10.3 (Node.js自带安装npm)
- [git](https://git-scm.com/downloads/) 2.7.2

#### Hexo初体验
1. 安装Hexo脚手架
`$ npm install -g hexo-cli `
国内npm下载速度慢的话可用[淘宝npm镜像cnpm](https://npm.taobao.org/) 代替
2.  Hexo初始化、安装依赖
``` 
$ hexo init <YOUR FOLDER> 
$ cd <YOUR FOLDER>
$ npm install
```
3.  本地启动Hexo服务
` $ hexo server `
若成功启动服务，打开浏览器，地址栏输入` http://localhost:4000 ` 则出现了默认的博客界面，是不是有点小兴奋呢?
4. 安装 hexo-deployer-git，为下一步做准备
`$ npm install hexo-deployer-git --save`

#### 部署到[GitHub](https://github.com/)
在GitHub上新建一个repository
 1. 首先你得有[GitHub](https://github.com/join?source=login)帐号，没有的话点击进入注册。
 2. [新建一个repository](https://github.com/new)，命名为`Ower.github.io`。
 例如，我的仓库名为`Lee-Cloud.github.io`
 3. 仓库创建完成过后，在settings下找到GitHub Pages选项卡,点击“Launch automatic page generator”，按提示完成GitHub Pages创建。
 创建完成后通过刚刚创建的仓库名`Lee-Cloud.github.io`，即可访问GitHub Pages.
 
将Hexo部署到GitHub Pages
 1. 配置你的git信息
 ```
 git config --global user.name <your name>
 git config --global user.email <your email>
 git config --global user.username <your github name>
 ```
 2. 生成SSH-KEY
 `ssh-keygen -t rsa -C <your email>`
 若提示`ssh-keygen不是有效的。。。。`则需要配置一下path。
 找到ssh-keygen.exe的路径，添加到环境变量path里即可。
 找到.ssh文件夹里的id_rsa.pub文件，复制内容到——个人设置——SSH and GPG keys ——New SSH key中
 之后验证一下：
 `ssh -T git@github.com`
 3. 配置本地Hexo文件夹下_config.yml文件。
 打开_config.yml文件，找到最下方的deploy,配置如下。
  deploy:
	type: git
    repo: git@github.com:Lee-Cloud/Lee-Cloud.github.io.git
 其中repo换成你的仓库地址，使用SSH。
 4. 部署网站
	回到hexo文件夹下
	使用命令 `$ hexo deploy` 部署网站。
	部署完成后，打开你的GitHub Pages，如` Lee-Cloud.github.io`即可看到你的博客啦~~~
	
#### 扩展、定制
以上步骤只是初步的将hexo模版部署到github上，想定制属于你自己的博客，参考一下资料，开始动手吧！
- [hexo官网](https://hexo.io/zh-cn/)
官网里有详细的API文档、主题、插件，授人以鱼不如授人予渔，这里有最全最官方的第一手资料。
- [nexT主题](http://theme-next.iissnan.com/getting-started.html)
hexo的另一大特点就是丰富的主题，这里我选择nexT，官网里的资料也很全，就不一一赘述。
- [markdown语法](http://sspai.com/25137)
关于markdown，我参考的是少数派上Te_Lee的一篇文章

#### 不定时更新
- Cannot GET /tags/ 等问题
```
$ cd heox-site
$ hexo new page tags
$ vim source/tags/index.md 
# add line: type: "tags" 
```
- 新标签打开链接
```
{% link text url true [title] %}
```

#### 写在最后
今天是我使用hexo的第一天，也是第一次写博客，肯定有很多不足的地方，对于新手，有不明白的可以联系我，希望能帮到大家，对于老司机们，请不吝赐教。
