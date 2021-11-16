<template>
    <div class="viewWrap">
        <nav-favorite class="nav_fvr_loc"></nav-favorite>
        <div>
            <character class="npc_loc"></character>
            <notice class="notice_loc"></notice>
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
    .nav_fvr_loc {position: absolute;right: 0;bottom: 0;}
    .npc_loc {position: absolute;left: 20px;top: 100px;}
    .notice_loc {position: absolute;right: 20px;top: 100px;}
</style>