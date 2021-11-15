<template>
  <div>
      mainview
      <p>{{this.$store.state.loginId}} 님 로그인을 환영합니다.</p>
      <test></test>
      <router-link to="/myroom" class="nav">마이 룸 바로가기</router-link> || 
      <router-link to="/user/signup" class="nav">회원 가입</router-link> || 
      <router-link to="/user/login" class="nav">로그인</router-link> || 
      <button v-on:click="logout">로그아웃</button>
  </div>
</template>
  
<script>
import Test from '../components/Test.vue'
export default {
  components: { Test },
  methods: {
    path(userId) {
      this.$router.push(`/test/${userId}`);
    },
    logout(){
      console.log('logout');
    }
  },
}
</script>

<style scoped>
  .nav {text-decoration: none; font-size: 50px; color:rgb(255, 140, 0);}
</style>>
