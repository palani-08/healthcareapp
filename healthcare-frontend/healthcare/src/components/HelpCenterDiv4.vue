<template>
  <div class="mt-10">
    <v-row>
      <v-col cols="10" md="4" sm="9" class="ml-10">
        <h2 class="hd1 mb-10">Leave it here.</h2>
        <v-form>
          Email
          <v-text-field
            rounded
            height="40"
            placeholder=""
            required
            background-color="rgb(232,232,232)"
          ></v-text-field>
          Message
          <v-textarea
            rounded
            placeholder=""
            required
            background-color="rgb(232,232,232)"
          ></v-textarea>
          <v-btn rounded color="rgb(226, 59, 100)" dark x-large
            >Send Message</v-btn
          >
        </v-form>
      </v-col>
      <v-col cols="10" md="5 " sm="9" class="ml-10">
        <v-img
          :src="img1"
          class="ml-1"
          max-height="500"
          max-width="600"
          style="border-radius: 10px"
        ></v-img>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img1: "",
    };
  },
  mounted() {
    this.img1 =
      "https://3frc1t1a7amucpi331ueys21-wpengine.netdna-ssl.com/wp-content/uploads/2018/06/Doctor-and-patient-resize-1024x731.jpg";
  },
};
</script>