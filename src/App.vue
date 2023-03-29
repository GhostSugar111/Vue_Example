<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <!-- <test1></test1> -->
  <notebook></notebook>
  <!-- <button v-on:click="handleClick('参数')">测试</button>
  <button @click.stop="handleClick('参数',$event)">测试</button> -->

  <!-- <a href="https://www.baidu.com" target="_blank" >测试</a>
  <a href="https://www.baidu.com" target="_blank" @click="handleClick('参数',$event)">测试</a>
  <a href="https://www.baidu.com" target="_blank" @click.prevent="handleClick('参数',$event)">测试</a> -->
  <!-- <input v-on:keyup.13="submit" >
  <input v-on:keyup.enter="submit" autofocus >
  <input @keyup.ctrl="submit" autofocus> -->
  
</template>
<script setup>
import test1 from './components/test1.vue'
import notebook from './components/NoteBook.vue'
// import { reactive, toRefs } from 'vue'

</script>
<script>
// import HelloWorld from './components/HelloWorld.vue'

// export default {
  // name: 'App',
  // methods: {
  //   submit() {
  //     console.log('submit')
  //     alert(1)
  //   },
  // },

  // components: {
  //   // HelloWorld,
    // test1

  // }

// }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
