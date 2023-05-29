<template>
    <el-row>
        <el-col :span="6">
            <el-menu default-active="2" @open="handleOpen" class="sidebar-menu" @close="handleClose">
                <el-menu-item index="1">
                    <el-icon>
                        <HomeFilled />
                    </el-icon>
                    <span>首页</span>
                </el-menu-item>
                <el-sub-menu index="2">
                    <template #title>
                        <el-icon>
                            <Document />
                        </el-icon>
                        <span>文档</span>
                    </template>
                    <el-menu-item index="2-1">
                        <el-icon>
                            <Reading />
                        </el-icon>
                        文字
                    </el-menu-item>
                    <el-sub-menu index="2-2">
                        <template #title>
                            <el-icon>
                                <location />
                            </el-icon>
                            <span>图片</span>
                        </template>
                        <el-menu-item index="2-2-1">png</el-menu-item>
                        <el-menu-item index="2-2-2">jpg</el-menu-item>
                    </el-sub-menu>
                </el-sub-menu>
                <el-menu-item index="3">
                    <el-icon><icon-menu /></el-icon>
                    <span>选项</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <el-icon>
                        <Clock />
                    </el-icon>
                    <span>日期</span>
                </el-menu-item>
            </el-menu>
        </el-col>
        <el-col :span="18">
            <el-table :data="tableData" style="width: 100%">
                <el-table-column fixed prop="date" label="日期" width="150" />
                <el-table-column prop="name" label="姓名" width="120" />
                <el-table-column prop="state" label="省份" width="120" />
                <el-table-column prop="city" label="市区" width="120" />
                <el-table-column prop="address" label="地址" width="500" />
                <el-table-column prop="zip" label="邮编" width="120" />
                <el-table-column fixed="right" label="操作" width="120">
                    <el-row :gutter="5">
                        <el-col :span="12">
                            <el-button size="small" @click="handleClick">编辑</el-button>
                        </el-col>
                        <el-col :span="12">
                            <el-button type="primary" size="small">删除</el-button>
                        </el-col>
                    </el-row>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script setup>
import { onMounted,onBeforeMount  } from 'vue';

// created 生命周期函数
onBeforeMount (()=>{
    axios.get('data.php')
        .then(response => {
            // 获取响应中的 JSON 数据
            const jsonData = response.data;
            console.log(jsonData);
            // 解析 JSON 数据
            const parsedData = JSON.parse(jsonData);
            // 在控制台打印解析后的数据
            console.log(parsedData);
            // 可以对解析后的数据进行进一步操作
            // 例如，遍历数组并访问每个对象的属性
            parsedData.forEach(author => {
                console.log('姓名:', author.name);
                console.log('省份:', author.province);
                console.log('城市:', author.city);
                console.log('地址:', author.address);
                console.log('邮编:', author.zip);
                console.log('-------------------');
            });
        })
        .catch(error => {
            console.error(error);
        });
})
onMounted(() => {
  console.log('组件已经挂载');
});
    

import {
    Menu as IconMenu,
    Location,
    HomeFilled,
    Document,
    Reading,
    Clock,
} from '@element-plus/icons-vue'
import axios from 'axios';

const tableData = [
    {
        date: '2021-05-02',
        name: '刘兵1',
        state: '湖北',
        city: '武汉市',
        address: '武汉解放大道717号',
        zip: '420104',
        tag: 'Home',
    },
    {
        date: '2021-08-13',
        name: '旺琼1',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
    {
        date: '2016-05-04',
        name: '刘兵2',
        state: '湖北',
        city: '武汉市',
        address: '武汉解放大道717号',
        zip: '420104',
        tag: 'Home',
    },
    {
        date: '2021-08-13',
        name: '旺琼2',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
    {
        date: '2016-05-01',
        name: '刘兵3',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
    {
        date: '2021-08-13',
        name: '旺琼3',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
        tag: 'Office',
    },
]
</script>
<style scoped>
.sidebar-menu {
    width: 200px;
}
</style>