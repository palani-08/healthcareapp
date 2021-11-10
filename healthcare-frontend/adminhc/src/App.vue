<template>

  <v-app class="mt-2">
   <Navigation />
    <Header />  
    
   <v-content>
     <v-container>
      <router-view />
     </v-container>
   </v-content>
   
  </v-app>

</template>

<script>
import Navigation from './components/Navigation.vue';
import Header from './components/Header.vue';

export default {
  components: {
    Navigation, 
    Header,
     },
  name: 'App',

};
</script>
