<template>
    <div class="inner">
        <router-link to='/burnoncafe'>Cafe</router-link>
        <router-link to='/mycompany'>Office</router-link>
        <router-link to='/friend'>Friend</router-link>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
    .inner {padding: 50px;}
    .inner a {display: block; width: 110px; height: 110px; border-radius:100%; background: #333; line-height: 110px; text-align: center; color:#fff; font-size:18px; margin: 0 0 20px;}
    .inner a:last-child {margin: 0;}
</style>