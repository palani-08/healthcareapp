<template>
  <div class="mt-15">
    <v-row class="abtDiv2">
      <v-col cols="10" md="5" sm="10">
        <v-img class="abtimage" :src="img" max-width="600" max-height="600">
        </v-img>
      </v-col>

      <v-col  cols="10" md="5" sm="10">
        <h1 class="ml-10 hd1">{{ heading }}</h1>
        <p class="ml-10 mt-5">{{ paragragh }}</p>
        <v-row class="mt-5 ml-15">
          <v-btn icon>
            <v-icon size="55px" color="pink">mdi-play-circle</v-icon>
          </v-btn>
          <p class="ml-10 mt-2">Play this video</p></v-row
        >
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      video: "",
      heading: "",
      paragragh: "",
      img: "",
    };
  },
  mounted() {
    //call api

    // setTimeout(() => {
    this.heading = "Welcome to Fortis Hospital";
    this.paragragh =
      "The mission of Moristan is to provide a responsive healing environment for patients and their families, and to improve the quality of life for all members of our community. ";
    this.img =
      "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg";
  },
};
</script>
<style>
.abtDiv2 {
  display: flex;
  align-items: center;
  justify-content: center;
}
.abtimage {
  border-radius: 7%;
}
</style>