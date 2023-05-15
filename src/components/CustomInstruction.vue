<template>
    <div class="checkedBoxs">
        <div v-for="(item, index) in data" :key="index">
            <input type="checkbox" :name="item.name" v-model="item.checked" />
            {{ item.name }}
        </div>
    </div>
    <div>数据定义格式: {{ data }}</div>
    <button v-check:all>全选</button>
    <button v-check:none>取消全选</button>
</template>
  
<script>
import { reactive, toRefs, computed } from "vue";

export default {
    setup() {
        const state = reactive({
            data: [
                { name: "足球", checked: false },
                { name: "篮球", checked: false },
                { name: "乒乓球", checked: false },
            ],
        });

        return {
            ...toRefs(state),
        };
    },
    directives: {
        'check': {
            mounted(el, binding) {
                el.addEventListener('click', function () {
                    // 处理点击事件
                    console.log('按钮被点击了',binding.arg);
                    binding.instance.data.forEach(item => { 
                        item.checked = binding.arg==='all'? true : false; 	
                    })
                });
            }
        }
    }

};
</script>
  
<style scoped>
.checkedBoxs {
    margin: 30px 50px;
}
</style>
  