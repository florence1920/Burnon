<template>
    <div class="viewWrap">
        <p class="head">로그인</p>
        
        <form v-on:submit.prevent="sendBio">
        <div class="loginWrap">
            <ul class="login">
                <li>
                    <input type="text" name="id" placeholder="ID" v-model="id">
                </li>
                <li>
                    <input type="text" name="password" placeholder="Password" v-model="password">
                </li>
            </ul>
            <input type="submit" value="LOGIN" class="btn"/>
            <ul class="search">
                <li>비밀번호 찾기</li>
                <li>아이디 찾기</li>
                <router-link to="/user/signup" class="nav">회원 가입</router-link>
            </ul>
        </div>
        </form>
    </div>
</template>

<script>
import { login } from '@/api/index.js';
export default {
    data() {
        return {
            id: '',
            password: ''
        }
    },
    methods: {
        async sendBio() {
            const userData ={
                id : this.id,
                password : this.password
            }
            const response = await login(userData)
            this.$store.state.loginId = response.data.user_id;
            this.$router.push('/')
        }
    },
}
</script>

<style scoped>

    .head {font-size: 40px; font-weight: 600; text-align: center; margin: 30px 0;}

    .loginWrap {width: 600px; margin: 0 auto;}
    .loginWrap .login li input {width: 100%; height: 40px; margin: 30px 0 0 0; border-bottom: 1px solid #000; text-indent: 10px;}

    .loginWrap .btn {width: 100%; height: 50px; background-color: rgb(255, 140, 0); font-weight: 600; margin: 20px 0;}
    .loginWrap .btn:hover {cursor: pointer;}

    .loginWrap .search {overflow: hidden;}
    .loginWrap .search li {float: left; width: 33.33%; font-size: 20px; text-align: center;}
    .loginWrap .search li:last-child {float: left; width: 33.34%; font-size: 20px;}

</style>