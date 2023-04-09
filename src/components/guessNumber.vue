
<template >
    <div class="continer">
        <p class="title">猜数游戏</p>
        <p class="ti">请输入一个0~99之间的随机数:</p>
        <div style="margin-bottom: 10px;">
            <input id="input" type="text" style="margin-right: 10px;" v-model.number="input">
            <button style="margin-right: 5px;" @click="submit">提交</button>
            <button @click="start" :disabled="disabled">开始</button>
        </div>
        <div style="margin-bottom: 10px;">
            <span>结果：</span>
            <input id="result" type="text" style="margin-right: 10px;width: 300px;" disabled v-model.trim="result">
        </div>
        <div>
            <span>当前还可以测试次数：</span>
            <input id="state" type="text" style="margin-right: 10px;width: 200px;" disabled v-model.trim.number="state">
        </div>
    </div>
</template>
<script setup>
import { ref } from 'vue'
const input = ref('')
const result = ref('')
const state = ref(0)
const random = ref(0)
const disabled = ref()

function start() {
    input.value = ''
    result.value = ''
    state.value = 5
    random.value = Math.floor(Math.random() * 100)
    disabled.value=true
    console.log(random.value);
}

function submit() {
    if (state.value > 0) {
        if (input.value === random.value) {
            result.value = '恭喜你猜对了！'
            // state.value = -1
        } else if (input.value > random.value) {
            result.value = '太大了！'
            state.value--
        } else if (input.value < random.value) {
            result.value = '太小了！'
            state.value--
        }
        input.value = ''
        if (state.value === 0) {
            result.value += `很遗憾你没猜对！正确答案是${random.value}`
        }
    }
}
</script>
<style scoped>
.continer {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
}

.title {
    font-size: 26px;
    color: #8b8989;
}

.ti {
    font-weight: bold;
}
</style>