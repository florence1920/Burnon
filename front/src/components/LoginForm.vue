<template>
    <div class="wrapAll">
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
                <li>회원가입</li>
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

    .wrapAll {} 

    .wrapAll .head {font-size: 40px; font-weight: 600; text-align: center; margin: 100px 0;}

    .wrapAll .loginWrap {width: 600px; margin: 0 auto;}
    .wrapAll .loginWrap .login {}
    .wrapAll .loginWrap .login li {}
    .wrapAll .loginWrap .login li input {width: 100%; height: 40px; margin: 30px 0 0 0; border-bottom: 1px solid #000;}

    .wrapAll .loginWrap .btn {width: 100%; height: 50px; background-color: rgb(255, 140, 0); color: #fff; font-weight: 600; margin: 20px 0;}
    .wrapAll .loginWrap .btn:hover {cursor: pointer;}

    .wrapAll .loginWrap .search {overflow: hidden;}
    .wrapAll .loginWrap .search li {float: left; width: 33.33%; font-size: 20px; text-align: center;}
    .wrapAll .loginWrap .search li:last-child {float: left; width: 33.34%; font-size: 20px;}

</style>