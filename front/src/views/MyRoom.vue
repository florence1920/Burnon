<template>
    <div>
        Myroom
        <nav-favorite></nav-favorite>
        <div>
            <character class="floatL"></character>
            <notice class="floatL"></notice>
        </div>
    </div>
</template>

<script>
import Character from '../components/common/Character.vue'
import NavFavorite from '../components/common/NavFavorite.vue'
import Notice from '../components/common/Notice.vue'
export default {
  components: { NavFavorite, Character, Notice},

}
</script>

<style scoped>
    .floatL {float: left;}
</style>