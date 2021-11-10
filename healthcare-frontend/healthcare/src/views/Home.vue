<template>
<main>
<home-div-1 />
<home-div-2 />
<home-div-3 />
<home-div-4 />
<home-div-5 />
<home-div-6 />
<home-div-7 />
<home-div-8 />
</main>
</template>

<script>
import HomeDiv1 from '../components/HomeDiv1.vue' 
import HomeDiv2 from '../components/HomeDiv2.vue'
import HomeDiv3 from '../components/HomeDiv3.vue'
import HomeDiv4 from '../components/HomeDiv4.vue'
import HomeDiv5 from '../components/HomeDiv5.vue'
import HomeDiv6 from '../components/HomeDiv6.vue'
import HomeDiv7 from '../components/HomeDiv7.vue'
import HomeDiv8 from '../components/HomeDiv8.vue'
export default {
    name: 'Home',
    components : {
      HomeDiv1,
      HomeDiv2,
      HomeDiv3,
      HomeDiv4,
      HomeDiv5,
      HomeDiv6,
      HomeDiv7,
      HomeDiv8
    } 
  }
</script>
