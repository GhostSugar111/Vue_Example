<template>
    <div>字符串反转：{{ state.message}}</div>
    <div>计算器：{{count }}该数据是响应式数据否：{{iscountRef}}</div>
    <button @click="btn">测试</button>
</template>
<script>
import {reactive,ref,isRef} from 'vue'
export default {
    setup() {    //setup函数可以返回一个组件实例，也可以返回一个函数。组件实例
        const state = reactive({
            message: 'Hello Vue3 World!'
        })
        const count = ref(0)
        const iscountRef = ref(isRef(count))
        function btn(){
            state.message = state.message.toString().split('').reverse().join('')   
            count.value++	
            console.log(isRef(count));
        }
        return {
            state,
            count,
            iscountRef,
            btn
        }
    }
} 	
</script >
