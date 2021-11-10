<template>
  <v-app>
   <Header />

    <v-main class="mt-2">
      <router-view/>
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Header from '../src/components/Header.vue'
import Footer from '../src/components/Footer.vue'
export default {
  name: 'App',
  components:{
    Header,
    Footer
  },

  data: () => ({
    //
  }),
};
</script>
