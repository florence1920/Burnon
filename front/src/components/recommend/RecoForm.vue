<template>
    <div class="viewWrap">
        <p class="head">환영합니다 test님 추천을 받아보시겠어요?</p>
        <div class="recoWrap">
            <div class="goal">
                <input type="text" placeholder="당신이 원하는 목표를 작성해 주세요." v-model="goal">
                <input type="submit" value="추천 받기" class="btn" v-on:click="getJobCar" />
            </div>
            
            <!-- <div class="age">
                <input type="text" placeholder="당신의 나이를 작성해주세요.">
                <input type="submit" value="추천 받기" class="btn" />
            </div> -->
            <!-- 추천 받기를 누르면 RecoSumForm으로 넘어가서 결과 값 보여주기 -->
        </div>

    </div>
</template>

<script>

export default {
    data() {
        return {
            goal: ''
        }
    },
    methods: {
        getJobCar() {
            let userGoal = this.goal;
            this.$store.dispatch('GET_JOB',userGoal);
        }
    }
}
</script>

<style scoped>

.head {font-size: 40px; font-weight: 600; text-align: center; margin: 30px 0;}

.recoWrap {width: 50%; margin: 0 auto;}
.recoWrap input {width: 100%; height: 40px; margin: 30px 0 0 0; border-bottom: 1px solid #000;  text-indent: 10px;}
.recoWrap .btn {width: 100%; height: 50px; background-color: #333; color: #fff; font-weight: 600;}
.recoWrap .btn:hover {cursor: pointer;}
</style>
