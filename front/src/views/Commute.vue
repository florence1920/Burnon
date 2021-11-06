<template>
  <div class='box' v-bind:class="color">
      <h2>출퇴근 하기</h2>
      <template v-if="!isCom">
        <button @click="togCommute">출근하기</button>
      </template>
      <template v-else>
        <button @click="togCommute">퇴근하기</button>
      </template>      
  </div>
</template>

<script>
export default {
    data() {
        return {
            isCom: this.$store.state.isCommute,
            color : ''
        }
    },
    methods: {
        togCommute() {
            this.$store.state.isCommute =! this.$store.state.isCommute;
            this.isCom =! this.isCom;
            console.log(this.$store.state.isCommute);
            this.checkColor();
        },
        checkColor(){
            if(this.isCom){
                this.color = 'green';
            }else{
                this.color = 'red';
            }
        }
        
    },
    created(){
        console.log('created');
        this.$store.dispatch('GET_USER','test1');
        console.log(this.$store.state.isCommute);
        this.checkColor();
    }
}
</script>

<style scoped>
    .box {width: 1000px; height: 500px;background: rgb(200, 200, 200);}
    .green {background: rgb(23, 160, 64);}
    .red {background: rgb(190, 77, 77);}
</style>