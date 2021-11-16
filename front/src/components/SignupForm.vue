<template>
  <!-- <div>
      <form v-on:submit.prevent="sendBio">
          <input type="text" placeholder="아이디를 입력하세요" v-model="id">
          <input type="text" placeholder="비밀번호를 입력하세요" v-model="password">
          <input type="text" placeholder="이름을 입력하세요" v-model="name">
          <input type="number" placeholder="나이를 입력하세요" v-model="age">
          <input type="submit" value="SIGNUP">
      </form>
  </div> -->
    <div class="wrapAll">
        <p class="head">회원가입</p>
        
        <div class="infoWrap">
            <ul class="info">
                <li>
                    <p class="tit">아이디</p>
                    <input type="text" name="id">
                </li>
                <li>
                    <p class="tit">비밀번호</p>
                    <input type="password" name="password">
                </li>
                <li>
                    <p class="tit">이름</p>
                    <input type="text" name="name">
                </li>
                <li>
                    <p class="tit">나이</p>
                    <input type="text" name="age">
                </li>
                <li>
                    <p class="tit">직업</p>
                    <input type="text" name="job">
                </li>
                <li>
                    <p class="tit">목표</p>
                    <input type="text" name="goal">
                </li>
            </ul>
            
            <div class="btnWrap">   
                <input type="submit" value="가입하기" class="btn">
            </div>
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
            name: '',
            age:'',
        }
    },
    methods: {
        sendBio() {
            const userData ={
                id : this.id,
                password : this.password,
                name : this.name,
                age : this.age,
            }
            register(userData)
        }
    },
}
</script>

<style>

.wrapAll {}
.wrapAll .head {font-size: 40px; font-weight: 600; text-align: center; margin: 100px 0;}

.wrapAll .infoWrap {width: 600px; margin: 0 auto;}
.wrapAll .infoWrap .info {}
.wrapAll .infoWrap .info li {}
.wrapAll .infoWrap .info li .tit {font-size: 18px; font-weight: 600; margin: 0 0 20px 0;}
.wrapAll .infoWrap .info li input {width: 100%; height: 40px; text-indent: 5px;  border: 1px solid #000; margin: 0 0 20px 0;}

.wrapAll .infoWrap .btnWrap .btn {width: 100%; height: 60px; background-color: rgb(255, 140, 0); color: #fff; margin: 30px 0;}


</style>