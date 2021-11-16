<template>
        <div class="viewWrap">
        <p class="head">회원 정보 수정</p>
        <div class="infoWrap">
            <ul class="info">
                <li>
                    <p class="tit">아이디</p>
                    <p class="sub">{{user.id}}</p>
                </li>
                <li>
                    <p class="tit">이름</p>
                    <p class="sub">{{user.userName}}</p>
                </li>
                <li>
                    <p class="tit">나이</p>
                    <p class="sub">{{user.age}}</p>
                </li>
                <li>
                    <p class="tit">비밀번호 변경</p>
                    <input type="password" name="password" placeholder="변경할 비밀번호를 입력하세요.">
                </li>
                <li>
                    <p class="tit">직업 변경</p>
                    <input type="text" name="job" placeholder="변경할 직업을 입력하세요.">
                </li>
                <li>
                    <p class="tit">목표 변경</p>
                    <input type="text" name="goal" placeholder="다른 목표를 설정하세요.">
                </li>
            </ul>
            <input type="submit" value="수정하기" class="btn">
        </div>
    </div>
</template>

<script>
import {getUserBio} from '@/api/index.js'
export default {
    data() {
        return {
            user: {},
        }
    },
    methods: {
        async getBio() {
            console.log('회원 정보 가져오기');
            const response = await getUserBio(this.$store.state.loginId);
            console.log(response);
            this.user = response.data.user;

        }
    },
    created () {
        this.getBio();
    },
}
</script>

<style scoped>

    .head {font-size: 40px; font-weight: 600; text-align: center; margin: 30px 0;}

    .infoWrap {width: 600px; margin: 0 auto;}
    .infoWrap .info li {overflow: hidden; margin: 30px 0;}
    .infoWrap .info li p {float: left; font-size: 18px; font-weight: 600; margin: 0 0 20px 0; color: #fff;}
    .infoWrap .info li p.sub {float: right; margin: 0 100px 0 0;}
    .infoWrap .info li input {width: 100%; height: 40px; margin: 0 0 20px 0; text-indent: 5px; border-bottom: 1px solid #000;}
    
    .infoWrap .btn {width: 100%; height: 40px; background-color: #333; color: #fff; margin: 30px 0;}

</style>