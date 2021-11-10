<template>
<div>
  <h2 class="hd1 text-center pricingTitle">Statistics</h2>
  <v-row class="div5 mx-10">
  <v-col  cols="12" md="4" sm="12" class="col1">
    <h2 class="hd1">{{statheading}}</h2>
    <br>
    <p>{{statpara}}</p>
    <br>
    <v-btn rounded
      color="rgb(226, 59, 100)"
      dark
      >Learn More</v-btn>
    </v-col>
    <v-col  cols="12" md="5" sm="12">
      <v-progress-linear rounded 
      style="border-radius:20px"
      color="rgb(200, 200, 223)"
       :value="dentistStat" height="40" class="mt-10">
      <span class="progress-bar-txt mr-5">Dental</span>
      <span class="progress-bar-cent">{{dentistStat}}%</span>
      </v-progress-linear>
      <v-progress-linear rounded 
      style="border-radius:20px"
       color="rgb(200, 200, 223)" 
       :value="cardioStat" height="40" class="mt-5">
      <span class="progress-bar-txt mr-5">Cardio</span>
      <span class="progress-bar-cent">{{cardioStat}}%</span>
      </v-progress-linear>
      <v-progress-linear rounded 
      style="border-radius:20px"
       color= "rgb(200, 200, 223)"
       :value="neuroStat" height="40" class="mt-5">
      <span class="progress-bar-txt float-right">Neurology</span>
      <span class="progress-bar-cent">{{neuroStat}}%</span>
      </v-progress-linear>
      <v-progress-linear rounded 
      style="border-radius:20px"
       color = "rgb(200, 200, 223)"
       :value="orthoStat" height="40" class="mt-5">
      <span class="progress-bar-txt float-right">Orthopedy</span>
      <span class="progress-bar-cent">{{orthoStat}}%</span>
      </v-progress-linear> 
    </v-col>
  </v-row>
</div>
</template>

<script>
   export default {
   data(){
  return{
    statheading:'',
    statpara:'',
    dentistStat : '',
    cardioStat : '',
    neuroStat : '',
    orthoStat : ''
    }
  },
  mounted(){
    this.statheading = "Modern equipment and specialists",
     this.statpara = "The mission of Moristan is to provide a responsive healing environment for patients and their families, and to improve the quality of life for all members of our community."
     this.dentistStat = 90,
     this.cardioStat = 70,
     this.neuroStat = 85,
     this.orthoStat = 65
    }
}
</script>

<style>
.div5{
  display: flex;
  align-items: center;
  justify-content: center;
}
.progress-bar-cent{
  color: rgb(197, 8, 33);
  margin-left: 300px;
}
</style>
