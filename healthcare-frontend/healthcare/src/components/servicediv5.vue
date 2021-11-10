<template>
  <div class="mt-15">
    <v-row class="fifth">
      <v-sheet color="cyan lighten-5" elevation="0" height="250" width="800">
        <v-row>
          <v-col cols="12" md="7" sm="7">
            <p>starts from</p>
            <h4>$29.99</h4>
            <h5>How we root the canal of your teeth</h5>
          </v-col>
          <v-col  cols="12" md="4" sm="7">
            <v-simple-table class="table">
              <template>
                <tbody class="tabody">
                  <tr v-for="item in desserts" :key="item.name">
                    <td>{{ item.name }}</td>
                    <td>{{ item.calories }}</td>
                  </tr>
                </tbody>
              </template>
            </v-simple-table>
          </v-col>
        </v-row>
      </v-sheet>
    </v-row>
  </div>
</template>
<script>
export default {
    data(){
        return{
     desserts: [
          {
            name: 'Dental Implants from',
            calories: 159,
          },
          {
            name: 'Crowns from',
            calories: 237,
          },
          {
            name: 'Veneers from',
            calories: 262,
          },
          {
            name: ' Implants from',
            calories: 305,
          },
           {
            name: 'Crown from',
            calories: 305,
          }
         
    ]
        }
},
}
</script>
<style>
.fifth {
   display: flex;
  align-items: center;
  justify-content: center;
}
.table {
  
  width: 230px;
  height: 240px;
  background-color: aquamarine;
}
.tabody {
  color: black;
  background-color: #e0f7fa;
}
.fifth p {
  margin-left: 100px;
  padding-top: 50px;
}
.fifth h4 {
  margin-top: 2px;
}
.fifth h5 {
  margin-left: 100px;
  font-size: 20px;
  font-weight: 100px;
}
</style>