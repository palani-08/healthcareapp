<template>
  <div class="div2 px-15">
    <v-row>
      <v-col cols="12" md="5" sm="12" class="col1 mt-15">
        <h2 class="hd1 mt-10">{{ heading2 }}</h2>
        <br />
        <p>{{ paragragh2 }}</p>
        <br />
        <v-btn rounded color="rgb(226, 59, 100)" dark>Learn More</v-btn>
      </v-col>
      <v-col  cols="12" md="2" sm="5">
        <v-card class="text-center mt-10 mb-10 pt-5" elevation="0">
          <v-icon large color="rgb(226, 59, 100)">mdi-tooth</v-icon>
          <v-card-title class="justify-center">Dental</v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet, ad vix fisset adicit
            lobricit</v-card-text
          >
        </v-card>
        <v-card class="text-center pt-5" elevation="0">
          <v-icon large color="rgb(226, 59, 100)">mdi-cards-heart</v-icon>
          <v-card-title class="justify-center">Cardiovascular</v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet, ad vix fisset adicit
            lobricit</v-card-text
          >
        </v-card>
      </v-col>
      <v-col cols="12" md="2" sm="5" >
        <v-card class="text-center mt-15 mb-10 pt-5" elevation="0">
          <v-icon large color="rgb(226, 59, 100)">mdi-brain</v-icon>
          <v-card-title class="justify-center">Neurology</v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet, ad vix fisset adicit
            lobricit</v-card-text
          >
        </v-card>
        <v-card class="text-center pt-5" elevation="0">
          <v-icon large color="rgb(226, 59, 100)"
            >mdi-eye-circle-outline</v-icon
          >
          <v-card-title class="justify-center">Ophtalmologue</v-card-title>
          <v-card-text
            >Lorem ipsum dolor sit amet, ad vix fisset adicit
            lobricit</v-card-text
          >
        </v-card>
      </v-col>
      <v-col class="hidden-xs" md="2" sm="2">
        <v-btn-toggle
          class="icons2 float-right"
          v-model="toggle_exclusive"
          rounded
          style="flex-direction: column"
        >
          <v-btn icon style="border: 0px"
            ><v-icon>mdi-phone-incoming</v-icon></v-btn
          >
          <v-btn icon style="border: 0px"
            ><v-icon>mdi-map-marker-radius</v-icon></v-btn
          >
          <v-btn icon style="border: 0px"
            ><v-icon>mdi-clock-time-four-outline</v-icon></v-btn
          >
        </v-btn-toggle>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
   data(){
  return{
    heading2:'',
    paragragh2:'',
    toggle_exclusive:true
    }
  },
  mounted() {
    this.heading2 = "Why Patients Choose Our Hospital?";
    this.paragragh2 =
      "We are committed to delivering medical solutions for even the most difficult cases for the benefit of patients from around the world.";
  },
};
</script>

<style>
.div2 {
 display: flex;
  align-items: center;
  justify-content: center;
}
.icons2 {
  margin-top: 180px;

}
</style>
