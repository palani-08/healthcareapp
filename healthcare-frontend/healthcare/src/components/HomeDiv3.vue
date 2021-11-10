<template>
  <div class="div3 mt-15">
    <h2 class="hd1 text-center pricingTitle">Our Pricing</h2>
      <v-row class="div3row">
        <v-col xs="4" md="3" sm="12" >
        <v-card
        
          class="priceCards ma-5"
          id="priceCards1"
          elevation="0"
        >
          <v-card-subtitle class="mt-5 text-center">{{
            packageT1
          }}</v-card-subtitle>
          <v-card-title class="justify-center"
            >{{ packageP1 }}<sub> Per Year</sub></v-card-title
          >
          <v-card-text class="pa-5">
            <ul>
              <li>{{ packageList11 }}</li>
              <li>{{ packageList12 }}</li>
              <li>{{ packageList13 }}</li>
              <li>{{ packageList14 }}</li>
            </ul>
          </v-card-text>
          <v-card-text class="text-center">
            <v-btn rounded color="rgb(226, 59, 100)" dark>Choose</v-btn>
          </v-card-text>
        </v-card></v-col>
        <v-col xs="4" md="3" sm="12">
        <v-card  class="priceCards ma-5" id="priceCards2" elevation="0">
          <v-card-subtitle class="mt-5 text-center">{{
            packageT2
          }}</v-card-subtitle>
          <v-card-title class="justify-center"
            >{{ packageP2 }}<sub> Per Year</sub></v-card-title
          >
          <v-card-text class="pa-5">
            <ul>
              <li>{{ packageList21 }}</li>
              <li>{{ packageList22 }}</li>
              <li>{{ packageList23 }}</li>
              <li>{{ packageList24 }}</li>
            </ul>
          </v-card-text>
          <v-card-text class="text-center">
            <v-btn rounded color="rgb(226, 59, 100)" dark>Choose</v-btn>
          </v-card-text>
        </v-card></v-col>
        <v-col xs="4" md="3" sm="12">
        <v-card  class="priceCards ma-5" id="priceCards3" elevation="0">
          <v-card-subtitle class="mt-5 text-center">{{
            packageT3
          }}</v-card-subtitle>
          <v-card-title class="justify-center"
            >{{ packageP3 }}<sub> Per Year</sub></v-card-title
          >
          <v-card-text class="pa-5">
            <ul>
              <li>{{ packageList31 }}</li>
              <li>{{ packageList32 }}</li>
              <li>{{ packageList33 }}</li>
              <li>{{ packageList34 }}</li>
            </ul>
          </v-card-text>
          <v-card-text class="text-center">
            <v-btn rounded color="rgb(226, 59, 100)" dark>Choose</v-btn>
          </v-card-text>
        </v-card></v-col>
      </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      packageT1: "",
      packageP1: "",
      packageList11: "",
      packageList12: "",
      packageList13: "",
      packageList14: "",
      packageT2: "",
      packageP2: "",
      packageList21: "",
      packageList22: "",
      packageList23: "",
      packageList24: "",
      packageT3: "",
      packageP3: "",
      packageList31: "",
      packageList32: "",
      packageList33: "",
      packageList34: "",
    };
  },
  mounted() {
    (this.packageT1 = "STANDARD"),
      (this.packageP1 = "$150"),
      (this.packageList11 = "3 Departments"),
      (this.packageList12 = "15 Tests"),
      (this.packageList13 = "15 Emergency"),
      (this.packageList14 = "No Medical Assistance"),
      (this.packageT2 = "SILVER"),
      (this.packageP2 = "$230"),
      (this.packageList21 = "5 Departments"),
      (this.packageList22 = "20 Tests"),
      (this.packageList23 = "20 Emergency"),
      (this.packageList24 = "No Medical Assistance"),
      (this.packageT3 = "PREMIUM"),
      (this.packageP3 = "$450"),
      (this.packageList31 = "10 Departments"),
      (this.packageList32 = "25 Tests"),
      (this.packageList33 = "25 Emergency"),
      (this.packageList34 = "Medical Assistance");
  },
};
</script>

<style>
.div3row {
  display: flex;
  align-items: center;
  justify-content: center;
 
}

.priceCards {
  background-image: url("https://media.istockphoto.com/photos/nurse-gestures-as-she-talks-with-senior-male-patient-picture-id517850776?k=20&m=517850776&s=612x612&w=0&h=36B2nt34LrrxsyoxRRKCdkB_dtsaRkC4ZLJQEc_an_s=");
  background-repeat: repeat;
  background-size: auto;
  opacity: 0.7;
  width: auto;
  height: auto;
  transition: ease-in-out;
}

#priceCards1 {
  background-position: left top;
}
#priceCards2 {
  background-position: center top;
}
#priceCards3 {
  background-position: right top;
}

.priceCards:hover {
  transform: scale(1.1);
}
.pricingTitle::before {
  content: "";
  position: relative;
  display: block;
  width: 100%;
  height: 2px;
  background-color: rgb(226, 59, 100);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.pricingTitle:hover::before {
  transform: scaleX(0.5);
}
</style>
