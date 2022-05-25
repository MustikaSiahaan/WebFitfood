<template>
  <div class="menu">
    <FirstMenu/>
    <SecondMenu/>
    <ThirdMenu/>
  </div>
</template>

<script>

import FirstMenu from '@/components/FirstMenu.vue';
import SecondMenu from '@/components/SecondMenu.vue'
import ThirdMenu from '@/components/ThirdMenu.vue'

export default {
  name: 'Menu',
  components: {
    FirstMenu,
    SecondMenu,
    ThirdMenu

}
}
</script>

