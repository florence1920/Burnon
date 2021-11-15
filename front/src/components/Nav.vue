<template>
    <div id="nav">
        <router-link to="/user/signup" class="nav">회원 가입</router-link> || 
        <template v-if="this.$store.state.loginId == ''">
            <router-link to="/user/login" class="nav">로그인</router-link>
        </template>
        <template v-else>
            <span>{{this.$store.state.loginId}} 님 로그인을 환영합니다.</span>
            <button v-on:click="logout"> 로그아웃 </button>
        </template>
        
    </div>
</template>

<script>
export default {
 methods: {
     logout() {
        this.$store.state.loginId = '';
     }
 },
}
</script>

<style scoped>
#nav {width: 100%; height: 100px; background-color: rgb(255, 140, 0);}
.nav {font-size: 18px; font-weight: 600; color: #fff;}
</style>