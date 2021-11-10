<template>
  <v-main>
  <help-center-div-1 />
  <help-center-div-2 />
  <help-center-div-3 />
  <help-center-div-4 />
  </v-main>
</template>
<script>
import  HelpCenterDiv1  from '../components/helpcenterdiv1.vue'
import  HelpCenterDiv2  from '../components/HelpCenterDiv2.vue'
import HelpCenterDiv3 from '../components/HelpCenterDiv3.vue'
import HelpCenterDiv4 from '../components/HelpCenterDiv4.vue'
export default {
  name : 'HelpCenter',
  components :{
     HelpCenterDiv1,
     HelpCenterDiv2,
     HelpCenterDiv3,
     HelpCenterDiv4
  }
}
</script>
<style>

</style>