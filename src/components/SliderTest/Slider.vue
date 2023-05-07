<template>
  <div class="slider">
      <div class="slide" v-for="(image, index) in nowimages" :key="index">
        <img :src="image" v-if="index==currentIndex">
      </div>
    </div>
</template>

<script>
export default {
  props: {
    images: {
      type: Array,
      required: true,
    },
    currentIndex: {
      type: Number,
      required: true,
    },
  },
  data(){
    return{
      nowimages:this.images
    }
  },
  watch: {
    currentIndex: function (newIndex, oldIndex) {
      console.log('currentIndex changed from', oldIndex, 'to', newIndex)
      console.log('nowimages0', this.nowimages[0])
      
    },
    images: function (newIndex, oldIndex) {
      // console.log('currentIndex changed from', oldIndex, 'to', newIndex)
      
    },
  },
};
</script>
