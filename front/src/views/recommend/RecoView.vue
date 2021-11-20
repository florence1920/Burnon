<template>
    <div class="viewWrap">
        <reco-form></reco-form>
        <reco-result-form></reco-result-form>
    </div>
</template>

<script>
import RecoForm from '@/components/recommend/RecoForm.vue'
import RecoResultForm from '@/components/recommend/RecoResultForm.vue'
export default {
    components: { 
        RecoForm,
        RecoResultForm,
    },

}
</script>

<style scoped>
</style>