<template>
  <div id="app" v-bind:class="[state]">
    <header class="header">
      <!-- <iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=298 height=52
      src="//music.163.com/outchain/player?type=2&id=19497991&auto=1&height=32"></iframe> -->
      <div class="box">
        <h1>Cloud's Blog</h1>
        <h3>为自己吹过的牛逼奋斗终生</h3>
        <p class="socials">
          <a href="https://github.com/Lee-Cloud" target="_blank" class='icon github'></a>
          <a href="http://weibo.com/2808915224" target="_blank" class='icon sina'></a>
          <a href="https://twitter.com/dangerous_cl"  target="_blank" class='icon twitter'></a>
        </p>
      </div>
      <i class="icon-down" v-on:click="rollDown"></i>
      <i class="icon-up" v-on:click="rollUp"></i>
    </header>
    <nav class="navbar">
      <ul class="nav">
        <li><router-link to='/home'>首页</router-link></li>
        <li><router-link to='/posts'>文章</router-link></li>
        <li><router-link to='/gallery'>作品</router-link></li>
        <li><router-link to='/about'>关于</router-link></li>
      </ul>
    </nav>
    <router-view class="view" id='view'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      state: ''
    }
  },
  created(){},
  computed: {},
  mounted () {},
  methods: {
    rollDown: function () {
      this.state = 'roll-down'
    },
    rollUp: function () {
      this.state = 'roll-up'
    }
  },
  components: {}
}
</script>

<style>
 * {
   box-sizing: border-box;
 }
 a {
   text-decoration: none;
 }
 html,body {
   width: 100%;
   height: 100%;
   overflow: hidden;
   margin: 0;
   padding: 0;
 }
 @media (min-width: 768px) {
   body {
     font-size: 20px;
   }
   .header > .icon-down{
     width: 50px;
     height: 50px;
   }
 }
 @media (max-width: 768px) {
   body {
     font-size: 16px;
   }
   .header > .icon-down{
     width: 30px;
     height: 30px;
   }
 }
 #app {
   width: 100%;
   height: 100%;
   transition: transform 1s;
 }
 #app.roll-down {
   transform: translate3d(0,-100%,0);
 }
 #app.roll-up {
   transform: translate3d(0,0,0);
 }
 .header {
   position: relative;
   width: 100%;
   height: 100%;
   background: url('./assets/theme10-min.jpg') no-repeat center;
   background-size: cover;
 }
 .header > iframe {
   position: absolute;
   top: 10%;
   left: -254px;
   opacity: 0.4;
 }
 .header > div.box {
   position: absolute;
   top: 40%;
   left: 50%;
   width: 7.5rem;
   transform: translate(-50%,-50%);
 }
 .header  h1 {
   color: white;
   text-align: center;
 }
 .header  h3 {
   color: white;
   text-align: center;
   margin-top: 10px;
 }
 p.socials {
   margin: 30px auto 0 auto;
   overflow: hidden;
   width: 210px;
 }
 p.socials > a.icon {
   float: left;
   width: 30px;
   height: 30px;
   margin: 0 20px;
   background-size: 100% 100%;
   border-radius: 5px;
 }
 p.socials > a.github {
   background-image: url('./assets/github-10-xxl.png');
 }
 p.socials > a.sina {
   background-image: url('./assets/sina-logo.png');
 }
 p.socials > a.twitter {
   background-image: url('./assets/Twitter-logo.png');
 }
 .header > .icon-down {
   position: absolute;
   bottom: 5%;
   left: 50%;
   display: block;
   margin: 10px;
   background-image: url('./assets/Arrowhead-Down.png');
   background-size: 100% 100%;
   animation: pull-down 0.8s linear infinite;
   cursor: pointer;
 }
 .header > .icon-down::before {
   content: 'Click me';
   position: absolute;
   left: 50%;
   top: 0;
   transform: translate(-50%,-150%);
   color: white;
   white-space: nowrap;
   text-align: center;
   font-weight: 600;
 }
 .header > .icon-up {
   position: absolute;
   top: 200%;
   left: 10px;
   z-index: 1000;
   display: block;
   width: 60px;
   height: 60px;
   background-image: url('./assets/rocket.png');
   background-size: 100% 100%;
   transform: translate(0,calc(-100% - 0.5rem));
   cursor: pointer;
   opacity: 0.2;
 }
 @keyframes pull-down {
   from {
     transform: translate3d(-50%,0,0);
     opacity: 0.6;
   }
  to {
       transform: translate3d(-50%,20px,0);
       opacity: 0.2;
     }
 }
 nav.navbar {
   width: 100%;
   height: 100px;
   background-color: black;
 }
 nav.navbar > ul.nav {
   width: 7.5rem;
   height: 100%;
   display: flex;
   margin: 0 auto;
   list-style: none;
   padding: 0;
 }
 nav.navbar > ul.nav > li {
   flex: 1;
   height: 100%;
   line-height: 100px;
   text-align: center;
   color: white;
 }
 nav.navbar > ul.nav > li > a {
   position: relative;
   display: block;
   width: 100%;
   height: 100%;
   color: white;
 }
 nav.navbar > ul.nav > li > a.router-link-active::before {
   content: "[";
   position: absolute;
   top: 0;
   left: 6px;
   height: 100%;
   font-size: 28px;
 }
 nav.navbar > ul.nav > li > a.router-link-active::after {
   content: "]";
   position: absolute;
   top: 0;
   right: 6px;
   height: 100%;
   font-size: 28px;
 }
 .view {
   width: 100%;
   height: calc(100% - 100px);
   /*margin: 0 auto;*/
   overflow-y: scroll;
 }
</style>
