<template>
  <div class=" mt-10">
    <h1 class="hd1 ml-15 pl-15" >Our Other Services</h1>
    <v-carousel class="div8" height="300" hide-delimiters>
      <v-carousel-item>
        <v-row>
          <v-col cols="8" md="3" sm="6">
          <v-card class="mt-10" id="story1" height="250" width="250">
            <v-card-subtitle class="ml-5 mt-10" style="padding-top: 50px">{{
              storyDate1
            }}</v-card-subtitle>
            <v-card-title style="padding-bottom: 50px">{{
              storyTitle1
            }}</v-card-title>
          </v-card>
          </v-col>
          <v-col cols="8" md="3" sm="6">
          <v-card class="mt-10" id="story2" height="250" width="250">
            <v-card-subtitle class="ml-5 mt-10" style="padding-top: 50px">{{
              storyDate1
            }}</v-card-subtitle>
            <v-card-title style="padding-bottom: 50px">{{
              storyTitle1
            }}</v-card-title>
          </v-card>
          </v-col>
          <v-col xs="8" md="3">
          <v-card class="mt-10" id="story3" height="250" width="250">
            <v-card-subtitle class="ml-5 mt-10" style="padding-top: 50px">{{
              storyDate1
            }}</v-card-subtitle>
            <v-card-title style="padding-bottom: 50px">{{
              storyTitle1
            }}</v-card-title>
          </v-card>
          </v-col>
          <v-col xs="8" md="3">
          <v-card class="mt-10" id="story4" height="250" width="250">
            <v-card-subtitle class="ml-5 mt-10" style="padding-top: 50px">{{
              storyDate1
            }}</v-card-subtitle>
            <v-card-title style="padding-bottom: 50px">{{
              storyTitle1
            }}</v-card-title>
          </v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
       <v-carousel-item>
        <v-row>
          <v-col xs="8" md="3">
          <v-card class="mt-10" id="story1" height="250" width="250">
            <v-card-subtitle class="ml-5 mt-10" style="padding-top: 50px">{{
              storyDate1
            }}</v-card-subtitle>
            <v-card-title style="padding-bottom: 50px">{{
              storyTitle1
            }}</v-card-title>
          </v-card>
          </v-col>
          <v-col xs="8" md="3">
          <v-card class="mt-10" id="story2" height="250" width="250">
            <v-card-subtitle class="ml-5 mt-10" style="padding-top: 50px">{{
              storyDate1
            }}</v-card-subtitle>
            <v-card-title style="padding-bottom: 50px">{{
              storyTitle1
            }}</v-card-title>
          </v-card>
          </v-col>
          <v-col xs="8" md="3">
          <v-card class="mt-10" id="story3" height="250" width="250">
            <v-card-subtitle class="ml-5 mt-10" style="padding-top: 50px">{{
              storyDate1
            }}</v-card-subtitle>
            <v-card-title style="padding-bottom: 50px">{{
              storyTitle1
            }}</v-card-title>
          </v-card>
          </v-col>
          <v-col xs="8" md="3">
          <v-card class="mt-10" id="story4" height="250" width="250">
            <v-card-subtitle class="ml-5 mt-10" style="padding-top: 50px">{{
              storyDate1
            }}</v-card-subtitle>
            <v-card-title style="padding-bottom: 50px">{{
              storyTitle1
            }}</v-card-title>
          </v-card>
          </v-col>
        </v-row>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>


<script>
export default {
  data() {
    return {
      storyDate1: "",
      storyTitle1: "",
      storyDate2: "",
      storyTitle2: "",
      storyDate3: "",
      storyTitle3: "",
      storyDate4: "",
      storyTitle4: "",
      storyDate5: "",
      storyTitle5: "",
      storyDate6: "",
      storyTitle6: "",
      storyDate7: "",
      storyTitle7: "",
      storyDate8: "",
      storyTitle8: "",
    };
  },
  mounted() {
    this.storyDate1 = "7th Sep 2021";
    this.storyTitle1 = "What is new in genome editing";
  },
};
</script>

<style>
.div8{
  display: flex;
  align-items: center;
  justify-content: center;
}
#story1 {
  background-image: url("https://college.mayo.edu/media/mccms/content-assets/academics/health-sciences-training/medical-laboratory-science-florida-and-minnesota/mccms-medical-lab-science-program-3396025-0015-hero-mobile.jpg");
  background-position: center;
}
#story2 {
  background-image: url("https://assets.change.org/photos/5/jc/xx/HIJCXxMEbEGAUQd-1600x900-noPad.jpg?1588280555");
  background-position: center;
}
#story3 {
  background-image: url("https://s3.envato.com/files/220812504/preview.jpg");
}

#story4 {
  background-image: url("https://static7.depositphotos.com/1194063/755/i/600/depositphotos_7553939-stock-photo-scientist-working-at-the-laboratory.jpg");
  background-position: center;
}
#story8 {
  background-image: url("https://college.mayo.edu/media/mccms/content-assets/academics/health-sciences-training/medical-laboratory-science-florida-and-minnesota/mccms-medical-lab-science-program-3396025-0015-hero-mobile.jpg");
}
#story7 {
  background-image: url("https://assets.change.org/photos/5/jc/xx/HIJCXxMEbEGAUQd-1600x900-noPad.jpg?1588280555");
}
#story6 {
  background-image: url("https://s3.envato.com/files/220812504/preview.jpg");
}

#story5 {
  background-image: url("https://static7.depositphotos.com/1194063/755/i/600/depositphotos_7553939-stock-photo-scientist-working-at-the-laboratory.jpg");
}
</style>