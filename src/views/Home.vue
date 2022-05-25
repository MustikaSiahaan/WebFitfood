<template>
  <div class="home">
    <LandingCarousels/>  
    <LandingPage />
  </div>
</template>

<script>

import LandingCarousels from '@/components/LandingCarousels.vue'
import LandingPage from '@/components/LandingPage.vue'
export default {
  name: 'Home',
  components: {
    LandingCarousels,
    LandingPage

}
}
</script>
