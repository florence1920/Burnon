<template>
  <div class="wrapAll">
     <div class="infoWrap">
            <div class="imgWrap">이미지</div>
            <div class="info">
                <p><span id="user_name">{{this.$store.state.globalName}}</span>님 환영합니다.</p>
                <p>나이 : <input type="text" placeholder="현재 나이를 입력하세요" class="goal" v-model="age"/></p>
                <p>목표 : <input type="text" placeholder="원하는 목표를 작성하세요" class="goal" v-model="goal"/></p>
            </div>
        </div>
      <input type="submit" value="추천 받아보기" class="btn" v-on:click="recommend" />
  </div>
</template>

<script>
import { ageCategory } from '@/engine/age.js'
import { goalProcess } from '@/engine/goal.js'
export default {
  data() {
    return {
      age: '',
      goal: '',
    }
  },
  //데이터 베이스에서 유저 이름 받아오기 
  methods: {
    getUser() {
      this.$store.dispatch('GET_USERINFO',this.$route.params.userId);
    },
    recommend(){
      ageCategory(this.age);
      goalProcess(this.goal);
    }
  },
  created () {
    this.getUser();
  },

}
</script>

<style scoped>
  .wrapAll .infoWrap {overflow: hidden; margin: 30px 0;}
  .wrapAll .infoWrap .imgWrap {float: left; margin: 0 10px 0 0;}
  .wrapAll .infoWrap .info {float: left;}
  .wrapAll .infoWrap .info p {font-size: 20px; margin: 10px 0 0 0;}
  .wrapAll .infoWrap .info #user_name {font-size: 30px; font-weight: 600;}
  .wrapAll .infoWrap .info .goal {border: 0; border-bottom : 1px solid rgba(0,0,0,.5);}
  .wrapAll .btn {width: 200px; height: 100px; background-color: #333; color: #fff; font-size: 20px;}
  .wrapAll .btn:hover {background-color: #fff; color: #333; font-weight: 600; cursor: pointer;}
</style>