<template>
  <div>
      mainview
      <test></test>
      <router-link to="/myroom" class="nav">마이 룸 바로가기</router-link>
  </div>
</template>

<script>
import Test from '../components/Test.vue'
export default {
  components: { Test },

}
</script>

<style scoped>
  .nav {text-decoration: none; font-size: 50px; color:rgb(255, 140, 0);}
</style>>
