<template lang="html">
  <div>
    <div class="about">
      <h1>About Me</h1>
      <h3>基本信息</h3>
      <p class="text">
        大家好，我是Cloud，坐标厦门，是一名90后coder（好吧，其实并没有“后”）,谦虚但喜欢装逼，热爱生活，热爱健身，热爱coding。立志全栈的页面仔。
      </p>
      <h3>技术栈</h3>
      <ul class="list">
        <li>前端三板斧</li>
        <li>各主流CSS、JS库</li>
        <li>Git、SVN</li>
        <li>Vue.js</li>
        <li>Node.js</li>
      </ul>
      <p  class="text">
        前端基础扎实，掌握Jquery、Bootstrap、Vue(不限于)等主流JS、CSS库；
        能完成各主流浏览器兼容、移动端响应式布局、安卓及IOS平台的Hybrid应用开发；
        关注Web性能、体验(懒加载、预加载、缓存等)；
        提倡前后端分离(Ajax)，
        擅长基于Vue.js的SPA开发；
        目前专注于node.js、MySQL、MongoDB等后端技术的学习。(反正吹牛逼又不用成本)
      </p>
      <h3>联系我</h3>
      <ul class="list">
        <li><a href="http://weibo.com/2808915224" target="_blank">新浪微博</a></li>
        <li><a href="https://github.com/Lee-Cloud" target="_blank">Gitbub</a></li>
        <li>QQ:595199568</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {},
  components: {}
}
</script>

<style lang="css" scoped>
  div.about {
    width: 7.5rem;
    margin: 0 auto;
    padding: 0.4rem 0.8rem;
  }
  div.about > h1 {
    margin-bottom: 0.4rem;
  }
  div.about > h2 {
    margin-bottom: 0.3rem;
  }
  div.about > h3 {
    margin: 0.1rem;
  }
  div.about > p.text {
    margin-bottom: 0.4rem;
    line-height: 200%;
    text-indent: 40px;
    color: #555;
    text-align: justify;
  }
  div.about > ul.list {
    padding-left: 0.4rem;
    list-style-position: inside;
    list-style-type: disc;
    line-height: 200%;
  }
</style>
