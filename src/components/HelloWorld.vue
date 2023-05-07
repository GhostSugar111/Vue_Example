<template>
  <div class="hello">
    <h1>Vue练习</h1>
    <!-- <el-text class="mx-1" size="large" type="success" >Vue练习</el-text> -->
    <!-- <router-link :to="{ path: 'notebook' }" active-class="active">notebook</router-link> -->
    <!-- to用v-bind绑定path或name 查询参数为color:red -->
    <el-row justify="center" :gutter="20">
      <el-col :span="2">
        <router-link :to="{ path: 'guessNumber' }" active-class="active" style="text-decoration: none;">
          <el-button type="primary" round>guessNumber</el-button>
        </router-link>
      </el-col>
      <el-col :span="2">
        <router-link :to="{ path: 'notebook' }" active-class="active" style="text-decoration: none;">
          <el-button type="primary" round>notebook</el-button>
        </router-link>
      </el-col>
      <el-col :span="2">
        <router-link :to="{ path: 'shoppingcart' }" active-class="active" style="text-decoration: none;">
          <el-button type="primary" round>shoppingcart</el-button>
        </router-link>
      </el-col>
      <el-col :span="2">
        <router-link :to="{ path: 'movieticket' }" active-class="active" style="text-decoration: none;">
          <el-button type="primary" round>movieticket</el-button>
        </router-link>
      </el-col>
      <el-col :span="2">
        <router-link :to="{ path: '/user' ,query:{name:'xh',age:'21'}}" active-class="active" style="text-decoration: none;">
          <el-button type="primary" round>用户</el-button>
        </router-link>
      </el-col>
      <el-col :span="2">
        <router-link :to="{ path: 'slider' }" active-class="active" style="text-decoration: none;">
          <el-button type="primary" round>slider</el-button>
        </router-link>
      </el-col>
      <!-- <el-button type="primary" round @Click="toMovie()">movieticket</el-button> -->
      

    </el-row>

    <!-- to用v-bind绑定path或name 路由参数为color:red -->
    <!-- <router-link :to="{ path: 'notebook', params: { color: red } }" active-class="active">notebook</router-link> -->

  </div>
</template>

<script>
// import { query } from 'express';
import { defineComponent,reactive, toRefs, computed } from 'vue';
import { useRouter } from 'vue-router';
// import { ElButton } from 'element-plus';
export default defineComponent({
  name: 'HelloWorld',
  setup() {
    const state = reactive({
      userid: 'user'+Math.floor(Math.random()*100)
    });
    const router = useRouter();
    // router.addRoute('HelloWorld',{
    //   path: '/user',
    //   name: 'user',
    //   component: () => import('../views/User.vue'),
    //   meta: {
    //     title: '用户'
    //   }
    // });
    console.log("router.meta");
    console.log(router.currentRoute.value.meta);//获取路由元信息
    const toMovie = () => {
      // router.push({ path: 'movieticket' });
      router.go(-1);
    };
    return {
      ...toRefs(state),
      toMovie,
      router
    };
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* @import 'element-plus/theme-chalk/index.css'; */
.hello {
  /* display: flex; */
  text-align: center;
  color: #2c3e50;
}

/* el-row {
  display: flex;
  justify-content: center;
  align-items: center;
} */

.active {
  color: red;
}
</style>
