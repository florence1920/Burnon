<template>
    <div>
        <div>{{title}}</div>
        <button v-on:click="getResponse">click</button>
    </div>
</template>

<script>
import { getRes } from '@/api/index.js';
export default {
    data() {
        return {
            title: ''
        }
    },
    methods: {
        async getResponse() {
            const response = await getRes();
            this.title = response.data.title ;
        }
    },
}
</script>

<style>

</style>