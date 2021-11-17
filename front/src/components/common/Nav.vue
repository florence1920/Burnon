<template>
    <div id="nav">
        <!-- logo -->
        <router-link to="/"><p class="logo">BURN<span>ON</span></p></router-link>

        <!-- btn -->
        <ul class="btnWrap" v-if="this.$store.state.loginId == ''">
            <li>
                <router-link to="/user/login"></router-link>
                LOGIN
            </li>
        </ul>
        <ul class="btnWrap" v-else>
            <li v-on:click="logout">
                LOGOUT
            </li>
        </ul>

        <!-- ment -->
        <p class="ment" v-if="this.$store.state.loginId !== ''">{{this.$store.state.loginId}}님 환영합니다!</p>
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
#nav {overflow: hidden; width: 100%; height: 80px; background: #333; padding: 21.5px 40px; position: fixed;top: 0;left: 0; z-index:999;}
#nav .logo {float: left; line-height: 33px; color:#fff; font-size: 20px; font-weight: 600;}
#nav .logo span {font-weight: 300;}
#nav .ment {float: right; line-height: 33px; color:#fff; font-size: 15px; margin: 0 15px 0 0;}
#nav .btnWrap {float: right; overflow: hidden;}
#nav .btnWrap li {float: left; background: #fff; color:#000; font-size:13px; font-weight: 500; cursor: pointer; border-radius:2.5px; padding: 7px 15px 8px; position: relative;}
#nav .btnWrap li a {width: 100%; height: 100%; position: absolute;top: 0;left: 0;}
</style>