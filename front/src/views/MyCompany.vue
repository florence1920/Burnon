<template>
  <div class="viewWrap">
      <h2>내 회사</h2>
      <router-link to='/mycompany/commute/' class="nav">출퇴근 관리</router-link>
      <button v-on:click="myCommute(globalId)">출퇴근</button>
  </div>
</template>

<script>
export default {
data() {
  return {
    globalId: this.$store.state.globalId
  }
},
methods: {
  myCommute(id) {
    this.$router.push(`/mycompany/commute/${id}`);
  }
},
}
</script>

<style scoped>
  .nav {text-decoration: none; font-size: 30px; margin:0 30px 0 0;}
</style>>
