<template>
  <v-data-table
    :headers="headers"
    :items="patients"
    sort-by="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Appointment</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="800px">
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>
            <v-card-text>
              <v-container>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    hidden
                    v-model="editedItem.status"
                    label="Status"
                  ></v-text-field>
                </v-col>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text> Cancel </v-btn>
              <v-btn color="blue darken-1" text> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogUpdate" max-width="680px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to accept/reject this appointment?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeUpdate"
                >Cancel</v-btn
              >
              <v-btn
                color="blue darken-1"
                text
                :loading="isloading"
                @click="updateItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template 
    v-slot:[`item.actions`]="{ item }">
    
     <v-card-text>{{item.status == true ? "Accepted":item.status== false ?"Rejected":"Pending"}}</v-card-text>
      <v-btn v-if="item.status == null "
        class="success mr-2"
        small
        @click="yesItem(item)"
      >
        Accept
      </v-btn>
      <v-btn v-if="item.status == null "
      class="error"
        small
        @click="noItem(item)"
      >
        Reject
      </v-btn>
       <v-dialog v-model="dialogupd"
     persistent
      max-width="650">
      <v-card>
        <v-card-title>
      {{updatemsg}}
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialogupd = false"
          >
            ok
          </v-btn> 
           </v-card-actions>
      </v-card>
    </v-dialog>
      
    </template>
   
    <template v-slot:no-data>
      <v-btn color="primary" @click="getAllAppointment"> Reset </v-btn>
    </template>
  </v-data-table>
  
</template>

<script>
import axios from "axios";
export default {
  data: () => ({
    dialogupd:false,
    updatemsg:'',
    isloading: false,
    dialog: false,
    updateId: 0,
    updateStatus: Boolean,
    updateEmail:'',
    updateDoc:'',
    updateDate:'',
    dialogUpdate: false,
    headers: [
      {
        text: "Patient Name",
        align: "start",
        sortable: false,
        value: "patientName",
      },
      //{ text: 'Id', value: 'id' },
      // { text: 'CreatedBy', value: 'createdby' },
      // { text: 'UpdatedBy', value: 'updatedby' },
      { text: "Email", value: "email" },
      { text: "Doctor Name", value: "doctorName" },
      { text: "Gender", value: "gender" },
      { text: "Date", value: "date" },
      { text: "Department", value: "department" },
      //{ text: 'Status', value: 'status', },
      { text: "Actions", value: "actions", sortable: false },
    ],
    patients: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      status: "",
      email: "",
      gender: "",
      date: "",
      doctorName: "",
    },
    defaultItem: {
      id: "",
      status: "",
      email: "",
      gender: "",
      date: "",
      doctorName: "",
    },
  }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'New Appointment' : 'Edit Appointment'
      },
    },
 

  watch: {
    dialog(val) {
      val || this.close();
    },
    /*dialogDelete (val) {
        val || this.closeDelete()
      },*/
  },

  // created () {
  //   this.getAllAppointment()
  // },
  mounted() {
    this.getAllAppointment();
  },

  methods: {
    async getAllAppointment() {
      let patients = await axios.get(
        "http://localhost:9000/api/appointment/get"
      );
      this.patients = patients.data;
    },

    yesItem(item) {
      this.updateId = item.id;
      // item.status = true;
      this.updateStatus = true;
      this.updateEmail = item.email;
      this.updateDoc = item.doctorName;
      this.updateDate = item.date;
      this.dialogUpdate = true;
      // this.updateStatus = item.status
      // let response = await axios.put('http://localhost:3000/api/appointment/update', {id:this.updateId, status:updateStatus})
      // if (response.data.status) {
      //   alert(response.data.message)
      //   this.getAllAppointment();
      // }
    },
    noItem(item) {
      this.updateId = item.id;
      //item.status = false;
       this.updateEmail = item.email;
        this.updateDoc = item.doctorName;
      this.updateDate = item.date;
      this.updateStatus = false;
      this.dialogUpdate = true;
    },

    async updateItemConfirm() {
      this.isloading = true;
      let response = await axios.put(
        "http://localhost:9000/api/appointment/update",
        { id: this.updateId, status: this.updateStatus ,email:this.updateEmail,date:this.updateDate,doctorName:this.updateDoc}
      );
      if (response.data.status) {
        this.isloading = false;
        this.updatemsg = response.data.message;
       this.dialogupd = true;
        this.getAllAppointment();
      }
      this.closeUpdate();
    },
    closeUpdate() {
      this.dialogUpdate = false;
      this.$nextTick(() => {
        this.getAllAppointment();
      });
    },

    /*   editItem (item) {
        this.editedIndex = this.patients.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialog = true
      },

      deleteItem (item) {
        this.editedIndex = this.patients.indexOf(item)
        this.editedItem = Object.assign({}, item)
        this.dialogDelete = true
      },

      deleteItemConfirm () {
        this.patients.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.patients[this.editedIndex], this.editedItem)
        } else {
          this.patients.push(this.editedItem)
        }
        this.close()
      },*/
  },
};
</script>