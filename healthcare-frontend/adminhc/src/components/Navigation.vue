<template>
<div>
     <v-navigation-drawer app>
          <h1 class="moristan pt-4 text-center">Moristan</h1>
 <v-divider></v-divider>

  <v-list>
      <v-list-item-group>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="nav1 text-center" @click="routerfunction('Appointment')">Appointment</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="nav1 text-center" @click="routerfunction('Department')">Department</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="nav1 text-center" @click="routerfunction('Doctors')">Doctors</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="nav1 text-center" @click="routerfunction('Faq')">FAQ</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="nav1 text-center" @click="routerfunction('Stories')">Stories</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="nav1 text-center" @click="routerfunction('Testimonials')">Testimonials</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
         <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="nav1 text-center" @click="routerfunction('Contact')">Contacts</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
      </v-navigation-drawer>
</div>
</template>

<script>
export default {
    methods: {
    routerfunction(routingname) {
      switch (routingname) {
        case "Appointment":
          this.$router.push("/appointment");

          break;
        case "Department":
          this.$router.push("/department");
          break;
        case "Doctors":
          this.$router.push("/doctors");
          break;
        case "Faq":
          this.$router.push("/faq");
          break;
        case "Stories":
          this.$router.push("/stories");
          break;
        case "Testimonials":
          this.$router.push("/testimonials");
          break;
          case "Contact":
          this.$router.push("/contact");
          break;
        default:
          break;
      }
    },
  },
}
</script>

<style scoped>
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
