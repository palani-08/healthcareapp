<template>
  <div class="homediv1 mx-10 px-10">
    <v-row align="center">
      <v-col xs="12" md="5" sm="12" class="col1">
        <h1 class="hd1">{{ heading1 }}</h1>
        <br />
        <p>{{ paragragh1 }}</p>
        <br />
        <v-btn rounded color="rgb(226, 59, 100)" dark href="#makeAppointment">Make Appointment</v-btn>
      </v-col>
      <v-col xs="8" md="6" sm="11">
        <v-img
          :src="img1"
          class="image1"
          max-height="600"
          max-width="900"
        ></v-img>
      </v-col>
      <v-col xs="4" md="1" sm="1" class="smiconcol my-15 py-10">
        <v-btn class="smicon" icon><v-icon>mdi-facebook</v-icon></v-btn>
        <br />
        <v-btn class="smicon" icon><v-icon>mdi-instagram</v-icon></v-btn>
        <br />
        <v-btn class="smicon" icon><v-icon>mdi-twitter</v-icon></v-btn>
        <br />
        <v-btn class="smicon" icon><v-icon>mdi-linkedin</v-icon></v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      heading1: "",
      paragragh1: "",
      img1: "",
    };
  },
  mounted() {
    this.heading1 = "Where there is healing, there is hope.";
    this.paragragh1 =
      "The mission of Moristan is to provide a responsive healing environment for patients and their families, and to improve the quality of life for all members of our community.";
    this.img1 =
      "https://mk0ehealtheletsj3t14.kinstacdn.com/wp-content/uploads/2009/07/best-hospital-in-south-india.jpg";
  },
};
</script>

<style>
.image1 {
  border-radius: 2%;
}
.homediv1 {
  margin-top: 30px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.col1 {
  padding-top: 60px;
  /*margin-right: 30px;*/
}
.hd1 {
  color: rgb(3, 3, 80);
}
/*.smiconcol {
  margin-top: 100px;
  margin-left: 50px;
}*/
</style>
