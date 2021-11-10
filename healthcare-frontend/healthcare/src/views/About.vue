<template>
<v-main>
 <aboutdiv-1/>
 <aboutdiv-2/>
 <aboutdiv-3/>
 <aboutdiv-4/>
 <aboutdiv-5/>
 <aboutdiv-6/>
 <aboutdiv-7/>
</v-main>

  
</template>

<script>
import aboutdiv1 from '../components/aboutdiv1.vue'
import Aboutdiv2 from '../components/aboutdiv2.vue'
import Aboutdiv3 from '../components/aboutdiv3.vue'
import Aboutdiv4 from '../components/aboutdiv4.vue'
import Aboutdiv5 from '../components/aboutdiv5.vue'
import Aboutdiv6 from '../components/aboutdiv6.vue'
import Aboutdiv7 from '../components/aboutdiv7.vue'
export default {
  components: { aboutdiv1, Aboutdiv2, Aboutdiv3, Aboutdiv4, Aboutdiv5, Aboutdiv6, Aboutdiv7 },
 name: 'About',
        
     
    }
    
  

</script>
<style>
h4{
  font-size: 3rem;
  font-weight: 300;
 margin-left: 100px;
 margin-top: 50px;
 margin-bottom: 10px;
}
h6{
  font-size: 1rem;
  margin-left: 100px;
  font-weight: 300;
}

 









.timelinetext{
  margin-left: 550px;
  font-weight: 400;
  color: darkblue;
}


</style>