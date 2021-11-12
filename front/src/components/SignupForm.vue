<template>
  <div>
      <form v-on:submit.prevent="sendBio">
          <input type="text" placeholder="아이디를 입력하세요" v-model="id">
          <input type="text" placeholder="비밀번호를 입력하세요" v-model="password">
          <input type="text" placeholder="이름을 입력하세요" v-model="name">
          <input type="number" placeholder="나이를 입력하세요" v-model="age">
          <input type="text" placeholder="목표를 입력하세요" v-model="goal">
          <input type="submit" value="SIGNUP">
      </form>
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
            goal:''
        }
    },
    methods: {
        sendBio() {
            const userData ={
                id : this.id,
                password : this.password,
                name : this.name,
                age : this.age,
                goal : this.goal
            }
            register(userData)
        }
    },
}
</script>

<style>

</style>