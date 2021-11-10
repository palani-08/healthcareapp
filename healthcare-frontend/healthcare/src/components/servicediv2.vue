<template>
  <div class="mt-15">
    <v-row class="service2">
      <v-col cols="10" md="5" sm="10">
          <h1 class="hd1">{{heading}}</h1>
          <p class="mt-5">{{paragraph}}</p>
        <v-row class="mt-5">
        <v-btn icon class="ml-5">
          <v-icon size="55px" color="pink">mdi-play-circle</v-icon>
        </v-btn>
        <p class="ml-5">Play this video</p></v-row>
      </v-col>
      <v-col cols="8" md="5" sm="10">
        <v-img class="im" :src="img" max-width="600" max-height="600"> </v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default{
    data(){
   return{
   heading:'',
   paragraph:'',
   img:''
   }
    },
     mounted(){
      //call api
      this.heading="How we root the canal of your teeth"
      this.paragraph="A root canal is performed when the endodontist removes the infected pulp and nerve in the root of the tooth, cleans and shapes the inside of the root canal, then fills and seals the space. Afterward, your dentist will place a crown on the tooth to protect and restore it to its original function. "
      this.img="https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg"
}
}
</script>
<style>
.im{
  border-radius: 7%;
}
.service2{
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>