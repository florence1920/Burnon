<template>
  <div>
      <h2>출퇴근 하기</h2>
      <template v-if="isCommute">
        <button @click="togCommute">출근하기</button>
      </template>
      <template v-if="!isCommute">
        <button @click="togCommute">퇴근하기</button>
      </template>      
  </div>
</template>

<script>
export default {
    data() {
        return {
            isCommute: false
        }
    },
    methods: {
        togCommute() {
            console.log('com');
        },
        
    },
    created(){
        console.log('created');
        this.$store.dispatch('GET_USER','test1');
        console.log(this.$store.state.isCommute);
    }
}
</script>

<style>

</style>