<template>
  <div class="mt-10 mx-5">
    <v-card elevation="0">
      <v-tabs color="deep-purple accent-4" centered>
        <v-tab>All</v-tab>
        <v-tab>Events</v-tab>
        <v-tab>LatestNews</v-tab>
        <v-tab>updates</v-tab>

        <v-tab-item v-for="n in 4" :key="n">
          <v-container fluid>
            <v-row class="imgrow">
              <v-col v-for="i in 3" :key="i" xs="5" md="4" sm="4">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${
                    i * n * 5 + 10
                  }`"
               
                  class="img"
                ></v-img>
              </v-col>
            </v-row>
            <v-row class="imgrow">
              <v-col v-for="i in 3" :key="i" xs="5" md="4" sm="4">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${
                    i * n * 5 + 10
                  }`"
                  class="img"
                ></v-img>
              </v-col>
            </v-row>
            <v-row class="imgrow">
              <v-col v-for="i in 3" :key="i" xs="5" md="4" sm="4">
                <v-img
                  :src="`https://picsum.photos/500/300?image=${i * n * 5 + 10}`"
                  :lazy-src="`https://picsum.photos/10/6?image=${
                    i * n * 5 + 10
                  }`"
                 
                  class="img"
                ></v-img>
              </v-col>
            </v-row>
          </v-container>
        </v-tab-item>
      </v-tabs>
    </v-card>
    
  </div>
</template>
<script>
export default {
  data() {
    return {
      page: 1,
    };
  },
};
</script>
<style>
/*.imgrow {
  margin-left: 250px;
  margin-right: 100px;
}*/
.img {
  border-radius: 10%;
}
.second {
   display: flex;
  align-items: center;
  justify-content: center;
}
</style>