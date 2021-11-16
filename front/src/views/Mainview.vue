<template>
  <div class="viewWrap">
      <test></test>
      <ul class="menu">
        <router-link to="/myroom"><li>MY ROOM</li></router-link> 
        <router-link to="/user/modify"><li>MODIFY</li></router-link> 
      </ul>
  </div>
</template>
  
<script>
import Test from '../components/Test.vue'
export default {
  components: { Test },
  methods: {
    path(userId) {
      this.$router.push(`/test/${userId}`);
    },
    logout(){
      console.log('logout');
    }
  },
}
</script>

<style scoped>
  .menu {overflow: hidden; position: absolute;top: 130px;left: 50px;}
  .menu a {float: left; margin: 0 15px 0 0;}
  .menu a li {background: #333; font-size:25px; font-weight: 400; padding: 15px 25px ;}
</style>>
