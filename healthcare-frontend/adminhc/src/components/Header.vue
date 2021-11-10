<template>
    <v-app-bar flat color="white" app>
      <v-row>
        <!--<v-btn icon class=" pt-15 pb-5"><v-icon large >mdi-format-list-bulleted</v-icon></v-btn>-->
          <v-icon color="rgb(226, 59, 100)" x-large class=" pt-10 pb-8"
            >mdi-plus-box</v-icon>
        <v-col cols="1" md="8" class="hidden-sm-and-down ">
          <h1 class="moristan pt-4">Moristan</h1>
        </v-col>
        <v-col cols="1" sm="7" class="text-center hidden-md-and-up">
          <h3 class="moristan pt-4" color="rgb(6, 6, 104)">Moristan</h3>
        </v-col>
        <!--<v-col md="1" sm="2" class="ml-15">
          <v-btn class="error mr-0  mt-8">Log Out</v-btn>
        </v-col>-->
      </v-row>
    </v-app-bar>
  
</template>
<script>
export default {

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
