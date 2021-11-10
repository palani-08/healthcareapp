<template>
  <div class="mt-15">
    <v-sheet color="grey lighten-4">
      <v-row class="abtDiv4">
        <v-col cols="11" md="5" sm="10">
          <v-img class="image" :src="docimg" position="right"> </v-img>
        </v-col>
        <v-col cols="11" md="5" sm="10">
          <h1 class="hd1">Why paitents choose our hospital?</h1>
         <v-row class="ml-10" cols="8">
            <v-icon color= "rgb(252, 38, 73)" >mdi-checkbox-marked</v-icon>
            <p class="mt-5">
              Hospital Review
            </p>
          </v-row>
          <v-row class="ml-10">
            <v-icon color= "rgb(252, 38, 73)" >mdi-checkbox-marked</v-icon>
            <p class="mt-5">
              Doctors
            </p>
          </v-row>
          <v-row class="ml-10">
            <v-icon color= "rgb(252, 38, 73)" >mdi-checkbox-marked</v-icon>
            <p class="mt-5">
              Location
            </p>
          </v-row>
          <v-row class="ml-10">
            <v-icon color= "rgb(252, 38, 73)" >mdi-checkbox-marked</v-icon>
            <p class="mt-5">
              Infrastructure
            </p>
          </v-row>
        </v-col>
      </v-row>
    </v-sheet>
  </div>
</template>
<script>
export default {
  data() {
    return {
      docimg: "",
      selected: "",
    };
  },
  mounted() {
    this.docimg =
      "https://t4.ftcdn.net/jpg/02/60/04/09/360_F_260040900_oO6YW1sHTnKxby4GcjCvtypUCWjnQRg5.jpg";
  },
};
</script>
<style>
.abtDiv4{
  display: flex;
  align-items: center;
  justify-content: center;
}

.image {
  
  border-radius: 7%;
}
</style>