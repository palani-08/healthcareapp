<template>
  <v-data-table
    :headers="headers"
    :items="email"
    sort-by="email"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Contact</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="800px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Add New Contact
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-form ref="form">
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        :disabled="idDisabled"
                        v-model="editedItem.id"
                        label="Id"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.email"
                        :rules="emailRules"
                        label="email"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.phone"
                        :rules="phoneRules"
                        label="phone"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.location"
                        :rules="phoneRules"
                        label="location"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.createdBy"
                        :rules="nameRules"
                        label="CreatedBy"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        v-model="editedItem.updatedBy"
                        :rules="nameRules"
                        label="UpdatedBy"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-form>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="close"> Cancel </v-btn>
              <v-btn color="blue darken-1" text  :loading="isloading" @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
         <v-dialog v-model="dialogadd"
     persistent
      max-width="650">
      <v-card>
        <v-card-title>
      {{addmsg}}
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialogadd = false"
          >
            ok
          </v-btn> 
           </v-card-actions>
      </v-card>
    </v-dialog>
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

    <v-dialog v-model="dialogdel"
     persistent
      max-width="650">
      <v-card>
        <v-card-title>
      {{delmsg}}
      
        </v-card-title>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="dialogdel = false"
          >
            ok
          </v-btn> 
           </v-card-actions>
      </v-card>
    </v-dialog>

        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5"
              >Are you sure you want to delete this contact?</v-card-title
            >
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete"
                >Cancel</v-btn
              >
              <v-btn
                color="blue darken-1"
                text
                :loading="isloading"
                @click="deleteItemConfirm"
                >OK</v-btn
              >
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon small class="mr-2" @click="editItem(item)"> mdi-pencil </v-icon>
      <v-icon small  @click="deleteItem(item)"> mdi-delete </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="getAllContact"> Reset </v-btn>
    </template>
  </v-data-table>
</template>
<script>
import axios from "axios";
export default {
  data: () => ({
    addmsg:'',
     updatemsg:'',
     delmsg:'',
     dialogupd:false,
     dialogdel:false,
     dialogadd:false,
    idDisabled: false,
    isloading: false,
    nameRules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],
    phoneRules: [(v) => v.length >= 10 || "Minimum length is 10 characters"],
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    deletingId: 0,
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Email",
        align: "start",
        sortable: false,
        value: "email",
      },
      //{ text: "Id", value: "id" },
      { text: "CreatedBy", value: "createdBy" },
      { text: "UpdatedBy", value: "updatedBy" },
      { text: "Phone", value: "phone" },
      { text: "Location", value: "location" },

      { text: "Actions", value: "actions", sortable: false },
    ],
    email: [],
    editedIndex: -1,
    editedItem: {
      id: "",
      phone: "",
      location: "",
      createdBy: "",
      updatedBy: "",
    },
    defaultItem: {
      id: "",
      phone: "",
      location: "",
      createdBy: "",
      updatedBy: "",
    },
  }),

  computed: {
    formTitle() {
      this.editedIndex === -1
        ? (this.idDisabled = true)
        : (this.idDisabled = false);
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },
  mounted() {
    this.getAllContact();
  },

  // created () {
  //   this.initialize()
  // },

  methods: {
    // initialize () {
    //   this.email = [
    //     {   id:1,
    //         email:'palani7pavan@gmail.com',
    //       phone: '9638527410',
    //       location: 'banglore',
    //       createdby:"amogha",
    //       updatedby:"pavan"

    //     },
    //      {   id:2,
    //           email:'palani7pavan@gmail.com',
    //       phone: '9638527410',
    //       location: 'banglore',
    //        createdby:"amogha",
    //       updatedby:"pavan"

    //     }, {
    //       id:3,
    //          email:'palani7pavan@gmail.com',
    //       phone: '9638527410',
    //       location: 'banglore',
    //        createdby:"amogha",
    //       updatedby:"pavan"

    //     }

    //   ]
    // },
    async getAllContact() {
      let email = await axios.get("http://localhost:9000/api/contact/get");
      this.email = email.data;
    },

    editItem(item) {
      this.editedIndex = this.email.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.deletingId = item.id;
      this.editedIndex = this.email.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    async deleteItemConfirm() {
      this.isloading = true;
      let response = await axios.put(
        "http://localhost:9000/api/contact/delete",
        { id: this.deletingId }
      );
      this.delmsg =response.data.message;
        this.dialogdel=true;
      if (response.data.status) {
        this.getAllContact();
      }
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    async save() {
      if (this.editedIndex > -1) {
        if (this.$refs.form.validate()) {
          this.isloading = true;
          let response = await axios.put(
            "http://localhost:9000/api/contact/update",
            this.editedItem
          );
          if (response.data.status) {
             this.isloading = false;
            this.updatemsg = response.data.message;
            this.dialogupd=true
            this.getAllContact();
          }
        }
      } else {
        if (this.$refs.form.validate()) {
           this.isloading = true;
          let response = await axios.post(
            "http://localhost:9000/api/contact/post",
            this.editedItem
          );
          if (response.data.status) {
            this.isloading = false;
            this.addmsg = response.data.message;
            this.dialogadd=true;
            this.getAllContact();
            this.$refs.form.reset();
          }
        }
      }
      this.close();
    },
  },
};
</script>