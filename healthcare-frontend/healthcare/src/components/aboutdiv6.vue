<template>
  <div class="mt-15">
    <h1 class="text-center hd1">Our Mission</h1>
    <v-row class="abtDiv6">
      <v-col>
        <v-col cols="12" md="8" sm="12">
        <v-toolbar width="100%" elevation="0">
          <template>
            <v-tabs v-model="tabs" color="pink" centered>
              <v-tab>Creation</v-tab>
              <v-tab>Analysis</v-tab>
              <v-tab>Strategy</v-tab>
            </v-tabs>
          </template>
        </v-toolbar>

        <v-tabs-items v-model="tabs">
          <v-tab-item>
            <v-card>
              <v-card-text class="para">
                <p>
                  Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor
                  rutrum auctor. Vestibulum facilisis, purus nec pulvinar
                  iaculis, ligula mi congue nunc, vitae euismod ligula urna in
                  dolor. Praesent congue erat at massa.
                </p>

                <p>
                  Aenean posuere, tortor sed cursus feugiat, nunc augue blandit
                  nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque
                  egestas, neque sit amet convallis pulvinar, justo nulla
                  eleifend augue, ac auctor orci leo non est. Etiam sit amet
                  orci eget eros faucibus tincidunt. Donec sodales sagittis
                  magna.
                </p>

                <p class="mb-0">
                  Ut leo. Suspendisse potenti. Duis vel nibh at velit
                  scelerisque suscipit. Fusce pharetra convallis urna.
                </p>
              </v-card-text>
              <v-card-title class="text-h5  hd1">
                Award and Recognitions
              </v-card-title>
              <v-row>
                <v-col>
                  <v-card-title class="text-h5 hd1">
                    Excellence
                  </v-card-title>
                  <p class="ml-4">Excellence in surgery</p>
                </v-col>
                <v-col>
                  <v-card-title class="text-h5  hd1">
                    Winner
                  </v-card-title>
                  <p class="ml-4">Hospital winner Award</p>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card>
              <v-card-text class="para">
                <p>
                  Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor
                  rutrum auctor. Vestibulum facilisis, purus nec pulvinar
                  iaculis, ligula mi congue nunc, vitae euismod ligula urna in
                  dolor. Praesent congue erat at massa.
                </p>

                <p>
                  Aenean posuere, tortor sed cursus feugiat, nunc augue blandit
                  nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque
                  egestas, neque sit amet convallis pulvinar, justo nulla
                  eleifend augue, ac auctor orci leo non est. Etiam sit amet
                  orci eget eros faucibus tincidunt. Donec sodales sagittis
                  magna.
                </p>

                <p class="mb-0">
                  Ut leo. Suspendisse potenti. Duis vel nibh at velit
                  scelerisque suscipit. Fusce pharetra convallis urna.
                </p>
              </v-card-text>
              <v-card-title class="text-h5 hd1">
                Award and Recognitions
              </v-card-title>
              <v-row>
                <v-col>
                  <v-card-title class="text-h5 hd1">
                    Excellence
                  </v-card-title>
                  <p class="ml-4">Excellence in surgery</p>
                </v-col>
                <v-col>
                  <v-card-title class="text-h5 hd1">
                    Winner
                  </v-card-title>
                  <p class="ml-4">Hospital winner Award</p>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
          <v-tab-item>
            <v-card>
              <v-card-text class="para">
                <p>
                  Duis lobortis massa imperdiet quam. Donec vitae orci sed dolor
                  rutrum auctor. Vestibulum facilisis, purus nec pulvinar
                  iaculis, ligula mi congue nunc, vitae euismod ligula urna in
                  dolor. Praesent congue erat at massa.
                </p>

                <p>
                  Aenean posuere, tortor sed cursus feugiat, nunc augue blandit
                  nunc, eu sollicitudin urna dolor sagittis lacus. Pellentesque
                  egestas, neque sit amet convallis pulvinar, justo nulla
                  eleifend augue, ac auctor orci leo non est. Etiam sit amet
                  orci eget eros faucibus tincidunt. Donec sodales sagittis
                  magna.
                </p>

                <p class="mb-0">
                  Ut leo. Suspendisse potenti. Duis vel nibh at velit
                  scelerisque suscipit. Fusce pharetra convallis urna.
                </p>
              </v-card-text>
              <v-card-title class="text-h5 hd1">
                Award and Recognitions
              </v-card-title>
              <v-row>
                <v-col>
                  <v-card-title class="text-h5 hd1">
                    Excellence
                  </v-card-title>
                  <p class="ml-4">Excellence in surgery</p>
                </v-col>
                <v-col>
                  <v-card-title class="text-h5 hd1">
                    Winner
                  </v-card-title>
                  <p class="ml-4">Hospital winner Award</p>
                </v-col>
              </v-row>
            </v-card>
          </v-tab-item>
        </v-tabs-items>
        </v-col>
      </v-col>
      <v-col cols="10" md="4" sm="10">
        <v-img
          class="roundedimage"
          :src="docimg"
          max-width="500"
          max-height="500"
        >
        </v-img>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tabs: "creation,analysis,statergy",
      docimg: "",
    };
  },
  mounted() {
    this.docimg =
      "https://thumbs.dreamstime.com/b/hospital-building-modern-parking-lot-59693686.jpg";
  },
};
</script>
<style scoped>
/*.divider2 {
  margin-left: 700px;
  width: 30px;
}
.fourth {
  margin-left: 100px;
}*/
.abtDiv6{
  display: flex;
  align-items: center;
  justify-content: center;
}
.roundedimage {
  border-radius: 7%;
}
.titl {
  font-weight: 300;
  color: darkblue;
}
</style>