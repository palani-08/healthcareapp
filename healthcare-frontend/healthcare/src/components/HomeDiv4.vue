<template>
  <div class="mt-10" >
    <h2 class="hd1 text-center pricingTitle">Our Doctors</h2>
    <v-carousel class="div3" hide-delimiters>
      <v-carousel-item v-for="item in docinfo" :key="item.id">
        <v-row>
          <v-col  md="4" class="hidden-sm-and-down">
            <v-img
              :src="item.image"
              class="image1 mt-10 ml-15"
              max-width="400"
              max-height="400"
            ></v-img>
            
          </v-col>
          <v-col  cols="10" md="6" sm="12">
            <v-card elevation="0" class="mt-15 pt-15 ml-5">
              <v-card-title>{{ item.name}}</v-card-title>
              <v-card-subtitle>{{ item.qualification }}</v-card-subtitle>
              <v-card-text>{{ item.description }}</v-card-text>
              <v-btn rounded class="ml-3" color="rgb(226, 59, 100)" dark
                >Learn More</v-btn
              >
              <v-btn class="ml-10" icon
                ><v-icon x-large color="rgb(226, 59, 100)" class="float-right"
                  >mdi-play-circle</v-icon
                ></v-btn
              >
            </v-card>
          </v-col>
        </v-row>
      </v-carousel-item> 
    </v-carousel>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      // docname1: "",
      // docspl1: "",
      // docdes1: "",
      // docimg1: "",
      // docname2: "",
      // docspl2: "",
      // docdes2: "",
      // docimg2: "",
      docinfo: []
    };
  },
  mounted() {
  //   (this.docname1 = "Angela Atkinson"),
  //     (this.docspl1 = "Neurologist"),
  //     (this.docdes1 =
  //       "Dr.Angela Atkinson is one of the best Neurologist in USA and well known around the globe. Dr.Angela has performed quarter-centry surgeries successfully and been recognized as the Doctor Strange of real wolrd."),
  //     (this.docimg1 =
  //       "https://images.theconversation.com/files/304957/original/file-20191203-66986-im7o5.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=1200&h=1200.0&fit=crop");
  //   (this.docname2 = "Andrew Bernard"),
  //     (this.docspl2 = "Dentist"),
  //     (this.docdes2 =
  //       "Dr.Andrew Bernard is one of the best Dentist in USA an well known around the globe. Dr.Andy has performed quarter-centry dental surgeries successfully and been recognized as the No need of the colgate."),
  //     (this.docimg2 =
  //       "https://3e58ge5bin4ni2ikwsni1b8b-wpengine.netdna-ssl.com/wp-content/uploads/bb-plugin/cache/iStock-493526440-1024x683-square.jpg");
  // 
  this.getdocinfo()
  },
  methods:{
    async getdocinfo() {
     let response = await axios.get('http://localhost:9000/api/doctors/get')
    this.docinfo = response.data;
    console.warn(response.data)
}
    }
};
</script>

<style>
.div4{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
