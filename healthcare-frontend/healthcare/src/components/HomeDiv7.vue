<template>
  <div class="mt-10">
    <h2 class="hd1 text-center pricingTitle">Testimonials</h2>
    <v-row class="div7 mt-10">
      <v-col  xs="10" md="2" sm="10" class="hidden-sm-and-down">
        <v-img
          :src="testimonialImg1"
          style="border-radius: 15px"
          height="500"
        ></v-img>
      </v-col>
      <v-col  xs="10" md="2" sm="10" class="hidden-sm-and-down" >
        <v-img
          :src="testimonialImg2"
          style="border-radius: 15px"
          height="500"
        ></v-img>
      </v-col>
      <v-col  xs="10" md="2" sm="10" class="hidden-sm-and-down">
        <v-img
          :src="testimonialImg3"
          style="border-radius: 15px"
          height="500"
        ></v-img>
      </v-col>
      <v-col  xs="10" md="2" sm="10" class="hidden-sm-and-down" >
        <v-img
          :src="testimonialImg4"
          style="border-radius: 15px"
          height="500"
        ></v-img>
      </v-col>

      <v-col xs="10" md="3" sm="10">
        <v-card elevation="0">
          <v-carousel show-arrows-on-hover dark hide-delimiters>
            <v-carousel-item v-for="item in testimonialInfo" :key="item.id">
              <v-card-title class="hd1">{{ item.name }}</v-card-title>
              <v-card-subtitle>{{ item.description }}</v-card-subtitle>
              <v-card-text>{{ item.story }}</v-card-text>
            </v-carousel-item>
            <!-- <v-carousel-item>
              <v-card-title class="hd1">{{  }}</v-card-title>
              <v-card-subtitle>{{ patientType2 }}</v-card-subtitle>
              <v-card-text>{{ patientDes2 }}</v-card-text>
            </v-carousel-item> -->
          </v-carousel>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      testimonialImg1: "",
      testimonialImg2: "",
      testimonialImg3: "",
      testimonialImg4: "",
      // patientName1: "",
      // patientType1: "",
      // patientName2: "",
      // patientType2: "",
      // patientDes1: "",
      // patientDes2: "",
      testimonialInfo:[]
    };
  },

  mounted() {
    (this.testimonialImg1 =
      "https://cdn8.dissolve.com/p/D187_204_042/D187_204_042_1200.jpg"),
      (this.testimonialImg2 =
        "https://dralegal.org/wp-content/uploads/2020/08/First-Urology.jpg"),
      (this.testimonialImg3 =
        "https://previews.123rf.com/images/gballgiggs/gballgiggs1906/gballgiggs190600169/125722452-asian-beautiful-woman-patients-raise-up-your-hand-sign-symbol-and-sitting-on-wheelchair-at-hospital-.jpg"),
      (this.testimonialImg4 =
        "https://www.harlanhrc.com/hrc-content/uploads/2019/08/iStock-1029340354-e1565355120630.jpg");
    // (this.patientName1 = "Jennifer J. Bordner"),
    //   (this.patientType1 = "Dental Patient"),
    //   (this.patientDes1 =
    //     "Dr.Andrew Bernard is one of the best Dentist in USA an well known around the globe. Dr.Andy has performed quarter-centry dental surgeries successfully and been recognized as the No need of the colgate.");
    // (this.patientName2 = "Steffany J. Guardner"),
    //   (this.patientType2 = "Neuro Patient"),
    //   (this.patientDes2 =
    //     "Dr.Andrew Bernard is one of the best Dentist in USA an well known around the globe. Dr.Andy has performed quarter-centry dental surgeries successfully and been recognized as the No need of the colgate.");
    this.getTestimonialInfo()
    },
    methods:{
    async getTestimonialInfo() {
     let response = await axios.get('http://localhost:9000/api/testimonials/get')
    this.testimonialInfo = response.data;
    console.warn(resp.data)
}
    }
};
</script>

<style scoped>

.div7{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>

