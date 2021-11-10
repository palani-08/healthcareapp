<template>
    <div class="div1 mt-5"  height="200">
  <v-row>
  <v-col>
  <h4>Frequently Asked Questions</h4>
  <v-row>
  <v-col xs="4" md="1"  sm="2">
  <h6 class="home mb-10" @click="routerfunction('home')">Home</h6>
  </v-col>
  <v-col xs="6" md="4" sm="4">
  <h6 class="mb-10 ml-10">/&nbsp; &nbsp;  FAQs</h6>
  </v-col>
  </v-row>
  </v-col>
  </v-row>
  </div>
</template>
<script>
export default {
methods:{
    routerfunction(routingname){
switch (routingname) {
    case "home":
        this.$router.push("/")
        
        break;
        case "about":
        this.$router.push("/about")
         break;
        case "service":
        this.$router.push("/service")
break;
 case "faqs":
        this.$router.push("/faqs")
break;
 case "gallery":
        this.$router.push("/gallery")
break;
 case "help":
        this.$router.push("/helpcenter")
break;
    default:
        break;
}
    }
}
}
</script>
<style>
.div1 h4{
  font-weight: 400;
  font: bolder;
  color: rgb(6, 6, 104);
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  
}
.div1 
{
  background-color: rgba(132, 204, 206, 0.123);
}

.home{
  color: rgb(226, 59, 100);
}
</style>