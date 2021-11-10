<template>
     <div class="mt-15">
     <h1 class="hd1 text-center">Our Doctors</h1>
 <v-carousel hide-delimiters>
    <v-carousel-item v-for="item in docinfo" :key="item.id">
     <v-row class="abtDiv3 mt-10">
       <v-col cols="8" md="5" sm="10" class="doc">
    <h2>{{item.name}}</h2>
    <p>{{item.qualification}}</p>
 <v-icon class="mb-2 mr-1">mdi-facebook</v-icon>
  <v-icon class="mb-2 mr-1">mdi-instagram</v-icon>
   <v-icon class="mb-2 mr-1">mdi-twitter</v-icon>
    <v-icon class="mb-2 mr-1">mdi-linkedin</v-icon>
 <p class="mt-1">{{item.description}}</p>
        <v-select
        class="selectbox mr-4 mb-0"
        label="Surguries"
          v-model="select"
          :items="items"
          rounded
          outlined
        ></v-select>
       <p class="mt-0 mb-0">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <v-rating
        class="mt-0"
      v-model="rating"
      background-color="yellow"
      color="yellow"
      large
    ></v-rating>
     <v-btn
    class="bt mt-0"
      rounded
      color="pink"
      dark
      href="http://localhost:8081/#makeAppointment"
    >
      Make Appointment
    </v-btn>
  </v-col>
  <v-col cols="10" md="4" sm="10" class="hidden-sm-and-down">
     <v-img class="ad2roundedimage"
      :src="item.image"
      max-width="400"
      max-height="400"
    >
   </v-img>
  </v-col>
     </v-row>
    </v-carousel-item>
       </v-carousel>
    
  </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return{
    rating:0,
    // docname:'',
    // docsep:'',
    // docdesp:'',
    // docimg:'',
     select: ['Surgeries'],
        items: [
          'Programming',
          'Design',
          'Vue',
          'Vuetify',
        ],
    docinfo: []
    }
    },
    mounted(){
      // this.docname="Dr.Robert De'Nero"
      // this.docsep="Neuralogy"
      // this.docdesp="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. "
      // this.docimg="https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg"
      this.getdocinfo()
  },
  methods:{
    async getdocinfo() {
     let response = await axios.get('http://localhost:9000/api/doctors/get')
    this.docinfo = response.data;
    console.warn(response.data)
}
    }
}
</script>
<style>

.abtDiv3{
  display: flex;
  align-items: center;
  justify-content: center;
  }
/*.doctortext{
  margin-left: 600px;
  margin-top: 5px;
  font-weight: 400;
  color: darkblue;
}*/
/* .doc{
  margin-top: 5 px;
} */
/* .doc p {
margin-top: 10px;
margin-bottom: 10px;

} */

.ad2roundedimage{
  border-radius: 7%;
}
/* 
.bt{
  margin-top: 5px;
} */

</style>