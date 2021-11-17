<template>
  <div class="viewWrap">
      <ul class="menu">
        <router-link to="/room"><li>MY ROOM</li></router-link> 
        <router-link to="/user/modify"><li>MODIFY</li></router-link>
        <router-link to="/reco"><li>RECOMMEND</li></router-link>
      </ul>
  </div>
</template>
  
<script>
export default {
}
</script>

<style scoped>
  .menu {overflow: hidden; position: absolute;top: 130px;left: 50px;}
  .menu a {float: left; margin: 0 15px 0 0;}
  .menu a li {background: #333; font-size:25px; font-weight: 400; padding: 15px 25px ;}
</style>
