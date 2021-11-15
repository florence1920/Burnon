<template>
  <div id="app">
    <Nav></Nav>
    <router-view/>
  </div>
</template>
<script>
import Nav from '@/components/Nav.vue'
export default {
  components: { Nav },

}
</script>

<style>
  *, a, div, p, ul, li, section, body, input {list-style: none; text-decoration: none; margin: 0; padding: 0; box-sizing: border-box; border: none;}
</style>
