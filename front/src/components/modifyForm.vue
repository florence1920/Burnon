<template>
    <div class="wrapAll">
        <p class="tit">회원 정보 수정</p>
        <ul class="infoWrap">
            <li>아이디 : test100</li>
            <li>이름 : 테스트</li>
            <li>나이 : 19</li>
            <li>비밀번호 :
                <input type="password">
            </li>
            <li>비밀번호 확인 :
                <input type="password">
            </li>
        </ul>
        <ul class="btnWrap">
            <li>
                <button>취소</button>
            </li>
            <li>
                <input type="submit" value="수정">
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    methods: {
        getBio() {
            console.log('회원 정보 가져오기');
            //getUserBio();

        }
    },
    created () {
        this.getBio();
    },
}
</script>

<style scoped>
    .wrapAll {}
    .wrapAll .tit {font-size: 30px; font-weight: 600;}

    .wrapAll .infoWrap {}
    .wrapAll .infoWrap > li {margin: 20px 0 0 0;}

    .wrapAll .btnWrap {overflow: hidden; margin: 20px 0 0 0;}
    .wrapAll .btnWrap > li {float: left; margin: 0 10px 0 0;}

</style>