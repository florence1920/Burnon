<template>
    <div class="viewWrap">
        <p class="head">회원가입</p>
        
        <div class="infoWrap">
            <form v-on:submit.prevent="sendBio">
                <ul class="info">
                    <li>
                        <p class="tit">아이디</p>
                        <input type="text" name="id" v-model="id">
                    </li>
                    <li>
                        <p class="tit">비밀번호</p>
                        <input type="password" name="password" v-model="password">
                    </li>
                    <li>
                        <p class="tit">이름</p>
                        <input type="text" name="name" v-model="userName">
                    </li>
                    <li>
                        <p class="tit">나이</p>
                        <input type="text" name="age" v-model="age">
                    </li>
                    <li>
                        <p class="tit">직업</p>
                        <input type="text" name="job" v-model="job">
                    </li>
                    <li>
                        <p class="tit">목표</p>
                        <input type="text" name="goal" v-model="goal">
                    </li>
                </ul>
                <div class="btnWrap">   
                    <input type="submit" value="가입하기" class="btn">
                </div>
            </form>
            
        </div>
    </div>
    
</template>

<script>
import { register } from '@/api/index.js';
export default {
    data() {
        return {
            id: '',
            password: '',
            userName: '',
            age:'',
            job:'',
            goal:''
        }
    },
    methods: {
        sendBio() {
            const userData ={
                id : this.id,
                password : this.password,
                userName : this.userName,
                age : this.age,
                job : this.job,
                goal : this.goal
            
            }
            register(userData);
            this.$router.push('/user/login')
        }
    },
}
</script>

<style scoped>

.head {font-size: 40px; font-weight: 600; text-align: center; margin: 30px 0;}

.infoWrap {width: 600px; margin: 0 auto;}
.infoWrap .info li .tit {font-size: 18px; font-weight: 600; margin: 0 0 20px 0;}
.infoWrap .info li input {width: 100%; height: 40px; text-indent: 5px;  border: 1px solid #000; margin: 0 0 20px 0;}

.infoWrap .btnWrap .btn {width: 100%; height: 60px; background-color: #333; color: #fff; margin: 30px 0;}


</style>