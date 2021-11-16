<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
  components: { Nav },

}
</script>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@100;300;400;500;700;900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
  *, a, div, p, ul, li, section, body, input {color:#fff; font-family: 'Noto Sans KR', sans-serif; list-style: none; text-decoration: none; margin: 0; padding: 0; box-sizing: border-box; border: none;}
  .viewWrap {overflow: hidden; width: 100%; height: 100vh; background: #000; padding: 80px 0 0; position: relative; z-index: 1;}
  .viewWrap .desc {color:rgba(255,255,255,.15); font-size:40px; font-weight: 600;}
</style>
