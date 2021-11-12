<template>
  <div>
      mainview
      <test></test>
      <router-link to="/myroom" class="nav">마이 룸 바로가기</router-link> || 
      <router-link to="/signup" class="nav">회원 가입</router-link> || 
      <button v-on:click="path($store.state.globalId)">Test 바로가기</button>
  </div>
</template>
  
<script>
import Test from '../components/Test.vue'
export default {
  components: { Test },
  methods: {
    path(userId) {
      this.$router.push(`/test/${userId}`);
    }
  },
}
</script>

<style scoped>
  .nav {text-decoration: none; font-size: 50px; color:rgb(255, 140, 0);}
</style>>
