<template>
    <div id="nav">
        <router-link to="/user/signup" class="nav">회원 가입</router-link> || 
        <router-link to="/user/login" class="nav">로그인</router-link> || 
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
#nav {width: 100%; height: 100px; background-color: rgb(255, 140, 0);}
.nav {font-size: 18px; font-weight: 600; color: #fff;}
</style>