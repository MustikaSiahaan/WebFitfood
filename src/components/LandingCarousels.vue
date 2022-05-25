<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
      reverse-transition="fade-transition"
      transition="fade-transition"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    name: "LandingCarousels",
    data () {
      return {
        items: [
          {
            src: require("./../assets/images/carousel.jpg") ,
          },
          {
            src: require("./../assets/images/carousel2.jpg") ,
          },
          {
            src: require("./../assets/images/carousel3.jpg") ,
          },
          {
            src: require("./../assets/images/carousel4.jpg") ,
          },
        ],
      }
    },
  }
</script>