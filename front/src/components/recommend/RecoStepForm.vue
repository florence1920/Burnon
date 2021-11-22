<template>
    <div class="stepBox">
        <p class="head">같이 길을 걸어볼까?</p>
        <ul class="stepWrap">
            <div class="progress">
                <span class="bar"></span>
                <span class="circle step1"></span>
                <span class="circle step2"></span>
                <span class="circle step3"></span>
                <span class="circle step4"></span>
            </div>
            <li>
                <p>1단계</p>
                <p>대학교</p>
            </li>
            <li>
                <p>2단계</p>
                <p>학원</p>
            </li>
            <li>
                <p>3단계</p>
                <p>자격증</p>
            </li>
        </ul>
    </div>
</template>

<script>
export default {

}
</script>

<style scpoed>
.stepBox { padding:0 10px 10px 10px; border:1px solid #ddd;}
.stepBox .stepWrap {overflow: hidden; width: 80%; margin: 0 auto;}
.stepBox .stepWrap li {float: left; width: 33.33%; text-align: center;}
.stepBox .stepWrap li:last-child {width: 33.34%;}
/* 프로그레스 바 css */
.stepBox .stepWrap .progress {width: 69%; border-bottom: 9px solid #fff; border-radius: 5px; margin: 30px auto; position: relative;}
.stepBox .stepWrap .progress .bar {width: 110px; height: 9px; background-color: red; position: absolute;top: 0;left: 0; z-index: 2;}
.stepBox .stepWrap .progress .circle {width: 40px; height: 40px; border-radius: 40px; background-color: #fff; position: absolute;top: -15px;left: 0; z-index: 3;}
.stepBox .stepWrap .progress .step1 {background-color: red; top: -15px;left: 0;}
.stepBox .stepWrap .progress .step2 {top: -15px;left: 500px;}
.stepBox .stepWrap .progress .step3 {top: -15px;left: 1000px;}
</style>