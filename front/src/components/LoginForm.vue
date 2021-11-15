<template>
    <div>
        <form v-on:submit.prevent="sendBio">
        <input v-model="id" type="text" placeholder="id">
        <input v-model="password" type="password" placeholder="pw">
        <input type="submit" value="login">
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

<style>

</style>