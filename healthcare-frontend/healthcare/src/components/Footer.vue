<template>
  <div class="footer mt-15 pa-10">
    <v-row class="mt-15 mb-15">
      <v-col xs="8" md="3" sm="6" class="moristanCol">
        <v-row >
          <v-icon color="rgb(226, 59, 100)" x-large>mdi-plus-box</v-icon>
          <h3 class="moristan">Moristan</h3>
        </v-row>
        <v-row >
          <v-icon class="mr-2 px-2 pb-4">mdi-email-outline</v-icon>
          <p class="py-1">{{ contactInfo.email }}</p>
        </v-row>
        <v-row>
          <v-icon class="mr-2 px-2 pb-4">mdi-phone-incoming</v-icon>
          <p class="py-1">+{{ contactInfo.phone }}</p>
        </v-row>
        <v-row>
          <v-icon class="mr-2 px-2 pb-4">mdi-map-marker-radius</v-icon>
          <p class="py-1">{{ contactInfo.location }}</p>
        </v-row>
        <v-row>
          <v-btn class="smicon" icon><v-icon>mdi-facebook</v-icon></v-btn>
          <v-btn class="smicon" icon><v-icon>mdi-instagram</v-icon></v-btn>
          <v-btn class="smicon" icon><v-icon>mdi-twitter</v-icon></v-btn>
          <v-btn class="smicon" icon><v-icon>mdi-linkedin</v-icon></v-btn>
        </v-row>
      </v-col>
      <v-col xs="4" md="2" sm="3">
        <h6 class="increaseFont ml-0">Talk to us</h6>
        <p class="mt-5" @click="routerfunction('about')">About Us</p>
        <p>Registration</p>
        <p>Blog</p>
        <p @click="routerfunction('help')">Contact</p>
      </v-col>
      <v-col xs="4" md="2" sm="2">
        <h6 class="increaseFont ml-0">Support</h6>
        <p class="mt-5">Documentation</p>
        <p @click="routerfunction('faqs')">FAQs</p>
        <p>Conditions</p>
      </v-col>
      <v-col xs="10" md="4" sm="10" class="newsCol">
        <h6 class="increaseFont ml-0">Newsletter</h6>
        <p class="mt-5">Get our offers & News in your inbox</p>
        <v-text-field
          rounded
          label="Enter Email"
          dense
          outlined
          color="rgb(226, 59, 100)"
          ><template v-slot:append>
            <v-btn
              dark
              rounded
              color="rgb(226, 59, 100)"
              class="mb-2"
              height="30"
              >Subrscribe</v-btn
            >
          </template>
        </v-text-field>
      </v-col>
    </v-row>
    <p class="text-center">&#169;2021 Navadhiti</p>
  </div>
</template>

<script>
import axios from 'axios' 
export default {
  data() {
    return {
      contactInfo: [
        // email: "fortis@gmail.com",
        // phoneNo: "+230 437 4438",
        // location: "Gladstone, Rose hill",
      ],
    };
  },
  mounted(){
      this.getContactInfo()
  },
  methods: {
    routerfunction(routingname) {
      switch (routingname) {
        case "home":
          this.$router.push("/");

          break;
        case "about":
          this.$router.push("/about");
          break;
        case "service":
          this.$router.push("/service");
          break;
        case "faqs":
          this.$router.push("/faqs");
          break;
        case "gallery":
          this.$router.push("/gallery");
          break;
        case "help":
          this.$router.push("/helpcenter");
          break;
        default:
          break;
      }
    },

    async getContactInfo() {
    let response = await axios.get('http://localhost:9000/api/contact/get')
    this.contactInfo = response.data[0];
    //console.log(this.contactInfo)
    console.warn(response.data)
}
  },
};
</script>

<style scoped>
.footer {
  background-color: rgba(231, 230, 230, 0.829);
}

/*.moristanCol{
    margin-left: 50px;
}*/

.increaseFont {
  font-size: 20px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}
/*.newsCol{
    margin-right: 50px;
}*/
.v-text-field--outlined >>> fieldset {
  border-color: rgb(253, 37, 91);
}
</style>