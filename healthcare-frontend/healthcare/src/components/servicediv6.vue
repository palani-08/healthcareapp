<template>
  <div class="mt-10 px-10 mx-10">
    <v-expansion-panels multiple>
      <v-row class="service6 mt-5">
        <v-col cols="12" md="8" sm="12">
          <v-expansion-panel
            v-for="item in faqInfo" v-bind:key="item.id"
            class="panels mb-5"
            style="border: 0px"
          >
            <v-expansion-panel-header expand-icon="mdi-plus">
              {{ item.question }}
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              {{ item.answer }}
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-col>
      </v-row>
    </v-expansion-panels>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      // genQue: [
      //   {
      //     que: "What are the signs and symptoms of step throat",
      //     ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   },
      //   {
      //     que: "What are the signs and symptoms of step throat",
      //     ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   },
      //   {
      //     que: "What are the signs and symptoms of step throat",
      //     ans: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      //   },
      // ],
       faqInfo:[]
    };
  },
   mounted() {
    this.getFaqInfo()
  },
  methods:{
    async getFaqInfo() {
     let response = await axios.get('http://localhost:9000/api/faq/get')
    this.faqInfo = response.data;
    console.warn(resp.data)
}
  }
};
</script>

<style  scoped>
.panels {
  border-radius: 50px;
}
.service6{
   display: flex;
  align-items: center;
  justify-content: center;
}

/*.genQ::before{
  content: '';
  margin-right: 100px;
  display: block;
  width: 100%;
  height: 2px;
  background-color:rgb(226, 59, 100) ;
  transform: scaleX(.1);
  transition: transform 0.3s ease;
}*/
</style>