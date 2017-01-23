<template lang="html">
  <div>
    <ul class="gallery">
      <li>
        <a href="http://www.lee-cloud.xyz">
          <h3>名称：Cloud's Blog</h3>
          <h4>简介：基于Vue.js、Node.js、MongoDB的博客系统，用markdown写文章上传服务器发表新文章。</h4>
        </a>
      </li>
      <li>
        <a href="http://www.lee-cloud.xyz/lottery-vue">
          <h3>名称：咕啦彩票-Vue版</h3>
          <h4>简介：基于Vue2.0的彩票单页应用，包含数字彩、足彩等多种彩种的购买、购彩资讯、开奖结果等。</h4>
        </a>
      </li>
      <li>
        <a href="http://www.lee-cloud.xyz/lottery-ag">
          <h3>名称：咕啦彩票-angular版</h3>
          <h4>简介：基于Vue2.0的彩票单页应用，包含数字彩、足彩等多种彩种的购买、购彩资讯、开奖结果等。</h4>
        </a>
      </li>
      <!-- <li>
        <a href="http://www.lee-cloud.xyz/qixi">
          <h3>名称：七夕言情动画</h3>
          <h4>简介：动画小作品，运用JS及CSS3完成的一个七夕表白主题动画</h4>
        </a>
      </li>
      <li>
        <a href="http://www.lee-cloud.xyz/1to50">
          <h3>名称：小游戏--1 to 50</h3>
          <h4>简介：HTML5版1to50小游戏。WEB端作品，没有做移动端适配。</h4>
        </a>
      </li> -->
    </ul>
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
ul.gallery {
  width: 7.5rem;
  margin: 0 auto;
  padding: 0.4rem 0.8rem;
  list-style: none;
}
ul.gallery h3 {
  color: #555;
}
ul.gallery h4 {
  color: #666;
}
ul.gallery > li {
  position: relative;
  border-bottom: 1px dashed #ccc;
}
ul.gallery > li > a {
  display: block;
  width: 100%;
  height: 100%;
}
ul.gallery > li > p {
  font-size: 12px;
  color: #666;
  /*margin-top: 6px;*/
}
ul.gallery > li > p.click {
  position: absolute;
  right: 0;
  bottom: 0;
  font-size: 14px;
  cursor: pointer;
  text-decoration: underline;
}
</style>
