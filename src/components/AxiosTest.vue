<template>
    <h5>axios</h5>
    <el-menu default-active="2" @open="handleOpen" class="sidebar-menu" @close="handleClose">
        <el-menu-item index="1">
            <el-icon><icon-menu /></el-icon>
            <span>首页</span>
        </el-menu-item>
        <el-sub-menu index="2">
            <template #title>
                <el-icon>
                    <location />
                </el-icon>
                <span>文档</span>
            </template>
            <el-menu-item index="2-1">
                <i class="el-icon-document"></i>
                <span slot="title">文字</span>
            </el-menu-item>
            <el-sub-menu index="2-2">
                <template #title>
                    <i class="el-icon-picture"></i>
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
            <el-icon><icon-menu /></el-icon>
            <span>日期</span>
        </el-menu-item>
    </el-menu>
</template>

<script>

</script>
<style scoped>
.sidebar-menu {
    width: 200px;
}
</style>