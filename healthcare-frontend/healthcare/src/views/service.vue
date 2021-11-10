<template>
<v-main>

<servicediv-1/>
<servicediv-2/>
<servicediv-3/>
<servicediv-4/>
<servicediv-5/>
<servicediv-6/>

  </v-main>
</template>
<script>
import servicediv1 from '../components/servicediv1.vue'
import Servicediv2 from '../components/servicediv2.vue'
import Servicediv3 from '../components/servicediv3.vue'
import Servicediv4 from '../components/servicediv4.vue'
import Servicediv5 from '../components/servicediv5.vue'
import Servicediv6 from '../components/servicediv6.vue'
export default {
  components: { servicediv1, Servicediv2, Servicediv3, Servicediv4, Servicediv5, Servicediv6 },
  name:'Service',
 data(){
   return{
     
   }
 },

}
</script>
<style>





</style>