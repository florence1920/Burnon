<template>
    <div class="viewWrap">
        <reco-form></reco-form>
        <reco-step-form></reco-step-form>
        <reco-result-form></reco-result-form>
    </div>
</template>

<script>
import RecoForm from '@/components/recommend/RecoForm.vue'
import RecoResultForm from '@/components/recommend/RecoResultForm.vue'
import RecoStepForm from '../../components/recommend/RecoStepForm.vue'
export default {
    components: { 
        RecoForm,
        RecoStepForm,
        RecoResultForm,
    },

}
</script>

<style scoped>
</style>