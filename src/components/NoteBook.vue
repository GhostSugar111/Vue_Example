//实验三 简易记事本
<template>
    <!-- <div>记事本</div> -->
    <h1>记事本</h1>
    <input type="text" v-model.trim="input" id="addinput" @keyup.enter="add">
    <!-- <button @click="add">添加</button> -->
    <div v-for="(item, index) in list" :key="index">
        <p>
            <span id="count">{{ index + 1 }}</span>
            <span id="title">{{ item}}</span>
            <button id="delete" @click="del(index)">删除</button>
        </p>
    </div>
    <div style="margin-left: 50px;" v-if="list.length > 0">
        <span style="margin-right: 40%;">条数：{{ list.length }} </span>
        
        <button @click="clear">清除所有记录</button>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const input = ref("Hello Vue 3.0 World!")
const list = ref([])
const isDisplay=ref(0)
// const count=ref(0)
function add() {
    // console.log(input.value);
    if (input.value != "Hello Vue 3.0 World!" && input.value != "") {
        list.value.push(input.value)
        input.value=""
    }
}
function del(index){
    // console.log(index);
    list.value.splice(index,1)
}
function clear(){
    list.value=[]
}
</script>
<style scoped>
#count {
    display: inline-block;
    width: 30px;
    /* height: 30px; */
    text-align: center;
    background-color: #ccc;
    line-height: 30px;
    margin-right: 10px;
    border-radius: 10px;
}
#title{

}
#delete {
    display: inline-block;
    margin-left: auto;
}
p {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 50px;
    height: 50px;
    border-bottom: 1px solid black
}


</style>