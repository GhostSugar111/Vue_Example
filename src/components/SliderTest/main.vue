<template>
  <div>
    <slider :images="images" :currentIndex="currentIndex" />
    <div class="controls">
      <button @click="prev()">Prev</button>
      <span>{{ currentIndex + 1 }}/{{ images.length }}</span>
      <button @click="next()">Next</button>
    </div>
  </div>
</template>
  
<script>
import Slider from './Slider.vue'

export default {
  data() {
    return {
      images: [
        require("@/assets/scenery1.jpg"),
        require("@/assets/scenery2.jpg"),
        require("@/assets/scenery3.jpg")
      ],
      currentIndex: 0,
    }
  },
  components: {
    Slider,
  },
  methods: {
    prev() {
      this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length
    },
    next() {
      this.currentIndex = (this.currentIndex + 1) % this.images.length
    },
  },
  mounted() {
    // 启动轮播定时器，每 2 秒钟更新一次当前显示的图片索引
    setInterval(() => {
      this.currentIndex = (this.currentIndex + 1) % this.images.length;
    }, 2000);
  },
}
</script>
  