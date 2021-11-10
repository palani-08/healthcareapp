<template>
  <div>
    <v-app-bar flat color="white">
      <v-row>
        <v-col cols="1" md="1" class="pt-10 pb-8"
          ><v-icon color="rgb(226, 59, 100)" x-large
            >mdi-plus-box</v-icon
          ></v-col
        >
        <v-col cols="1" md="1" class="text-center hidden-sm-and-down">
          <h3 class="moristan pt-4">Moristan</h3>
        </v-col>
        <v-col cols="1" sm="2" class="text-center hidden-md-and-up ml-6">
          <h3 class="moristan pt-4" color="rgb(6, 6, 104)">Moristan</h3>
        </v-col>
      </v-row>
      <v-col cols="6 hidden-sm-and-down">
        <v-row class="mt-3">
          <v-col>
            <h5 class="nav1 text-center" @click="routerfunction('home')">
              Home
            </h5>
          </v-col>
          <v-col>
            <h5 class="nav1 text-center" @click="routerfunction('about')">
              About
            </h5>
          </v-col>
          <v-col>
            <h5 class="nav1 text-center" @click="routerfunction('service')">
              Service
            </h5>
          </v-col>
          <v-col>
            <h5 class="nav1 text-center" @click="routerfunction('faqs')">
              FAQ
            </h5>
          </v-col>
          <v-col>
            <h5 class="nav1 text-center" @click="routerfunction('gallery')">
              Gallery
            </h5>
          </v-col>
          <v-col>
            <h5 class="nav1 text-center" @click="routerfunction('help')">
              Help Center
            </h5>
          </v-col>
        </v-row>
      </v-col>
      <v-col class="hidden-md-and-up text-center pb-0 ml-5">
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-app-bar-nav-icon v-on="on"></v-app-bar-nav-icon>
          </template>
          <v-list class="responsiveMenu">
            <v-list-item>
              <v-list-item-title @click="routerfunction('home')"
                >Home</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="routerfunction('about')"
                >About</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="routerfunction('service')"
                >Services</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="routerfunction('faqs')"
                >FAQ</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="routerfunction('gallery')"
                >Gallery</v-list-item-title
              >
            </v-list-item>
            <v-list-item>
              <v-list-item-title @click="routerfunction('help')"
                >Help Center</v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </v-col>

      <v-col cols="1" xs="1" class="hidden-xs-only">
        <v-btn icon class="mt-4">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-col>
    </v-app-bar>
  </div>
</template>
<script>
export default {
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
  },
};
</script>


<style>
.moristan {
  color: rgb(6, 6, 104);
  font-size: 40px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
}

.nav1::after {
  content: "";
  position: relative;
  display: block;
  width: 100%;
  height: 2px;
  background-color: rgb(226, 59, 100);
  transform: scaleX(0);
  transition: transform 0.3s ease;
}
.nav1:hover::after {
  transform: scaleX(1);
}
.nav1:hover {
  color: rgb(226, 59, 100);
}
</style>
