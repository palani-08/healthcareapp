<template>
  <div class="mt-15">
    <v-row class="cardss">
      <v-col cols="10" md="2" sm="10">
        <v-card outlined class="text-center">
          <v-alert outlined color="grey lighten-6" elevation="2">
            <v-icon color= "rgb(252, 38, 73)"  large>mdi-book-edit-outline</v-icon>
            <v-card-title class="justify-center"> 25 </v-card-title>
            <v-card-text class="text-center"> Your Experience. </v-card-text>
          </v-alert>
        </v-card>
      </v-col>
      <v-col cols="10" md="2" sm="10">
        <v-card class="text-center">
          <v-alert outlined color="grey lighten-6" elevation="2">
            <v-icon color= "rgb(252, 38, 73)" large> mdi-cards-heart</v-icon>
            <v-card-title class="justify-center"> 2321 </v-card-title>
            <v-card-text class="text-center"> Our Happy Patients </v-card-text>
          </v-alert>
        </v-card>
      </v-col>
      <v-col cols="10" md="2" sm="10">
        <v-card class="text-center">
          <v-alert outlined color="grey lighten-6" elevation="2">
            <v-icon color= "rgb(252, 38, 73)"  large>mdi-doctor</v-icon>
            <v-card-title class="justify-center"> 154 </v-card-title>
            <v-card-text class="text-center"> Number of Doctors </v-card-text>
          </v-alert>
        </v-card>
      </v-col>
      <v-col cols="10" md="2" sm="10">
        <v-card class="text-center">
          <v-alert outlined color="grey lighten-6" elevation="2">
            <v-icon color= "rgb(252, 38, 73)"  large>mdi-mother-nurse</v-icon>
            <v-card-title class="justify-center"> 276 </v-card-title>
            <v-card-text class="text-center"> Number of staffs </v-card-text>
          </v-alert>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style>
.cardss {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>