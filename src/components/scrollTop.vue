<template lang="html">
  <span class="scrollTop" v-on:click="scrollTop"></span>
</template>

<script>
export default {
  data () {
    return {}
  },
  computed: {},
  mounted () {},
  methods: {
    scrollTop : function(){
      var scrollBox = document.getElementById('view');
      var T = setInterval(function(){
        scrollBox.scrollTop -=100;
        if(scrollBox.scrollTop == 0){
          clearInterval(T)
        }
      },10)
    }
  },
  components: {}
}
</script>

<style lang="css" scoped>
  span.scrollTop {
    position: fixed;
    top: 200%;
    right: 20px;
    display: block;
    width: 40px;
    height: 40px;
    background-image: url('../assets/scrollTop.png');
    background-size: 100% 100%;
    transform: translate(0,calc(-100% - 0.5rem));
    -webkit-transform: translate(0,calc(-100% - 0.5rem));
    -ms-transform: translate(0,calc(-100% - 0.5rem));
    -o-transform: translate(0,calc(-100% - 0.5rem));
    opacity: 0.2;
    cursor: pointer;
  }
</style>
