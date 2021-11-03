<template>
    <div>
        <div class="box">
            <router-link to='/burnoncafe' class="nav fav">Burnon Cafe</router-link>
            <router-link to='/mycompany' class="nav normal">내 회사</router-link>
            <router-link to='/friend' class="nav fav">친구 방</router-link>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .box {width: 1000px; height: 100px; background: #cacaca;}
    .nav {text-decoration: none; font-size: 30px; margin:0 30px 0 0;}
    .fav {color:coral;}
    .normal {color:black;}
</style>