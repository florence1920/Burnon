<template>
    <div class="viewWrap">
        <p class="head"><span>test200 </span>님은 <span>고등학생 </span> 이시군요.</p>
        <p class="head">추천을 확인해 보세요</p>
        <ul class="recoWrap">
            <p class="sub">test200님이 걸어갈 길입니다.</p>
            <li>
                <p class="tit">대학교</p>
                <div class="university">
                    <p>학교명 : 서울대학교</p>
                    <p>학과 : 컴퓨터공학과</p>
                </div>
            </li>
            <li>
                <p class="tit">학원</p>
                <div class="academy">
                    <p>학원명 : Global 아이티 인재 개발원</p>
                    <p>교육명 : 자바(JAVA) 기반 데이터베이스 융합형 SW 개발자 고급인력 양성과정</p>
                </div>
            </li>
            <li>
                <p class="tit">자격증</p>
                <div class="certificate">
                    <p>자격증 : 정보 처리 기사 자격증</p>
                </div>
            </li>
        </ul>
        <p class="sub">이대로 걸어가세요. 할 수 있습니다</p>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
.head {font-size: 40px; font-weight: 600; text-align: center; margin: 30px 0;}

.recoWrap {overflow: hidden; width: 80%; margin: 0 auto;}
.sub {font-size: 40px; font-weight: 600; text-align: center; margin: 50px 0;}

.recoWrap li {float: left; width: 33.33%; text-align: center; line-height: 30px;}
.recoWrap li:last-child {width: 33.34%;}
.recoWrap li p {font-size: 18px;}
.recoWrap li .tit {font-size: 30px; margin: 0 0 30px 0;}

</style>
