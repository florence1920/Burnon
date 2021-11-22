<template>
    <div class="viewWrap">
        <template v-if="job">
            <p class="head"><span>test200 </span>님은 <span>{{job.ls.tit}} </span> 이시군요.</p>
            <p class="head">{{job.tit}}에 대한 추천을 확인해 보세요</p>
            <ul class="recoWrap">
                <p class="sub">test200님이 걸어갈 길입니다.</p>
                <li v-for="todo in this.job.ls.todo" v-bind:key="todo.index" >
                    <ul>
                        <li>{{todo.category}}:  {{todo.tit}}</li>
                        <li>학과: {{ todo.major }}</li>
                    </ul>
                </li>
            </ul>
            <p class="sub">이대로 걸어가세요. 할 수 있습니다</p>
        </template>
    </div>
</template>

<script>
export default {
    data() {
        return {
            job: this.$store.state.job
        }
    },
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
