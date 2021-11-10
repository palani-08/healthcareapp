<template>
  <div class="helpdiv2 mt-10 mx-10 px-10">
    <v-row>
      <v-col cols="12" md="6" sm="12">
        <v-img
          :src="img1"
          max-height="500"
          max-width="500"
          style="border-radius: 10px"
        ></v-img>
      </v-col>
      <v-col cols="12" md="6" sm="12">
        <h6 class="help ml-0 mb-4" style="margin-top: 100px">Help Center</h6>
        <h1 class="hd1 mb-4">{{ heading1 }}</h1>
        <p class="pb-4">{{ para1 }}</p>
        <v-text-field
          rounded
          class="mt-4"
          label="What can we help you with"
          dense
          outlined
          append-icon="mdi-magnify"
          color="rgb(3, 3, 80)"
        ></v-text-field>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img1: "",
      heading1: "",
      para1: "",
    };
  },
  mounted() {
    this.img1 =
      "https://play-lh.googleusercontent.com/H6BAQ2IWlZjdlFEefpkrDySyvPMc8rZLu_FR9U2y5vrwv1Q8RDNfibAZz9455AZe0kY";
    (this.heading1 = "How can we help you?"),
      (this.para1 =
        "We are just one call, one text, one mail away from you. we will be there for you all you have to do is ask help.");
  },
};
</script>

<style scoped>
.help {
  color: rgb(226, 59, 100);
}
.hd1 {
  color: rgb(3, 3, 80);
}
.v-input__icon--append {
  background-color: rgb(238, 70, 112);
}
.v-text-field--outlined >>> fieldset {
  border-color: rgb(253, 37, 91);
}
</style>