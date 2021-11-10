<template>
  <div id="makeAppointment">
    <h2 class="hd1 mt-10 text-center pricingTitle">Make an appointment</h2>
    <v-row class="div6 mx-2">
      <v-col xs="6" md="4" sm="6">
        <v-img
          :src="docimgurl"
          class="image1 mt-10"
          max-width="350"
          max-height="250"
        >
        </v-img>
        <h5 class="ml-15">{{ docname }}</h5>
        <h5 class="ml-15">{{ docqualification }}</h5>
      </v-col>
      <v-col cols="12" md="8" sm="6">
        <v-form ref="form" class="mt-4">
          <v-row>
            <v-col cols="12" md="6" sm="12">
              <v-text-field
                v-model="appointmentItem.patientName"
                :rules="nameRules"
                label="Your Name"
                rounded
                dense
                outlined
                required
              ></v-text-field>
              <v-text-field
                v-model="appointmentItem.email"
                rounded
                label="Your Email"
                :rules="emailRules"
                dense
                outlined
                required
              ></v-text-field>
              <v-select
                v-model="appointmentItem.doctorName"
                :items="docinfo"
                v-on:change="changedoc"
                :rules="[(v) => !!v || 'Doctor name required']"
                rounded
                dense
                outlined
                label="Doctor Name"
                required
                item-text="name"
              ></v-select>
            </v-col>
            <v-col cols="12" md="6" sm="12">
              <v-combobox
                :items="genders"
                v-model="appointmentItem.gender"
                :rules="[(v) => !!v || 'Gender is required']"
                rounded
                dense
                outlined
                label="Your Gender"
                required
              ></v-combobox>

              <!--<div class="mb-6">Active picker: <code>{{ activePicker || 'null' }}</code></div>-->
              <v-menu
                ref="menu"
                v-model="menu"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                min-width="auto"
              >
                <template v-slot:activator="{ on, attrs }">
                  <v-text-field
                    v-model="appointmentItem.date"
                    :rules="[(v) => !!v || 'Date is required']"
                    label="Date"
                    rounded
                    dense
                    outlined
                    append-icon="mdi-calendar"
                    readonly
                    required
                    v-bind="attrs"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="appointmentItem.date"
                  :active-picker.sync="activePicker"
                  :min="
                    new Date(
                      Date.now() - new Date().getTimezoneOffset() * 60000
                    )
                      .toISOString()
                      .substr(0, 10)
                  "
                  @change="save"
                ></v-date-picker>
              </v-menu>
              <v-text-field
                v-model="appointmentItem.department"
                :rules="[(v) => !!v || 'Department is required']"
                rounded
                dense
                outlined
                label="Departments"
                required
              ></v-text-field>
            </v-col>
            <v-btn
            class="ml-5"
              rounded
              color="rgb(226, 59, 100)"
              dark
              x-large
              :loading="isloading"
              @click="postAppointment"
              >Make Appointment
            </v-btn>

            <v-dialog v-model="dialog" persistent max-width="650">
              <v-card>
                <v-card-title>
                  {{ showmsg }}
                </v-card-title>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="green darken-1" text @click="dialog = false">
                    ok
                  </v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>
          </v-row>
        </v-form>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import { format, parseISO } from "date-fns";
export default {
  data() {
    return {
      docimgurl: "",
      docname: "",
      docqualification: "",
      showmsg: "",
      dialog: false,
      isloading: false,
      nameRules: [(v) => v.length >= 3 || "Minimum length is 3 characters"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
      ],
      genders: ["Male", "Female"],
      //departments: ["Dental","Neuro","ortho","optho"],
      // docname2: "",
      // docspl2: "",
      docinfo: [],
      // docimg2: "",
      select: null,
      docs: [],
      //gender: [],
      //activePicker: null,

      menu1: false,
      //departments: [],
      appointmentItem: {
        patientName: "",
        email: "",
        doctorName: "",
        date: format(parseISO(new Date().toISOString()), "yyyy-MM-dd"),
        // gender:'',

        // department:''
      },
    };
  },
  mounted() {
    //call api
    // (this.docname2 = "Andrew Bernard"),
    //   (this.docspl2 = "Dentist"),
    //   (this.docimg2 =
    //     "https://3e58ge5bin4ni2ikwsni1b8b-wpengine.netdna-ssl.com/wp-content/uploads/bb-plugin/cache/iStock-493526440-1024x683-square.jpg");
    // this.docs.push("Dr.Angela Atkinson");
    // this.docs.push("Dr.Andrew Bernard");
    // this.gender.push("Female");
    // this.gender.push("Male");
    // this.departments.push("Dental");
    // this.departments.push("Neuro");
    // this.departments.push("Ortho");
    // this.departments.push("Optho");
    this.getdocinfo();
    // this.appointmentItem.date = new Date().toJSON().slice(0, 10).replace(/-/g, "/");
  },
  // watch: {
  //   // menu(val) {
  //   //   val && setTimeout(() => (this.activePicker = "YEAR"));
  //   // },
  // },
  computed: {
    computedDateFormattedMomentjs() {
      return this.appointmentItem.date
        ? moment(this.appointmentItem.date).format("dddd, MMMM Do YYYY")
        : "";
    },
  },
  // watch: {
  //   date (val) {
  //     this.dateFormatted = this.formatDate(this.date)
  //   },
  // },
  methods: {
    //  formatDate (date) {
    //     if (!date) return null

    //     const [year, month, day] = date.split('-')
    //     return `${month}/${day}/${year}`
    //   },
    //   parseDate (date) {
    //     if (!date) return null

    //     const [month, day, year] = date.split('/')
    //     return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
    //   },
    changedoc() {
      let docobj = this.docinfo.find((a) => {
        if (a.name == this.appointmentItem.doctorName) {
          return true;
        }
      });
      this.docimgurl = docobj.image;
      this.docname = docobj.name;
      this.docqualification = docobj.qualification;
      this.appointmentItem.department = docobj.departmentDetail;
    },
    changeDate() {
      this.menu = true;
    },
    async getdocinfo() {
      let response = await axios.get("http://localhost:9000/api/doctors/get");
      this.docinfo = response.data;
      console.warn(response.data);
    },

    save(date1) {
      this.$refs.menu.save(date1);
    },
    async postAppointment() {
      if (this.$refs.form.validate()) {
        this.isloading = true;
        let response = await axios.post(
          "http://localhost:9000/api/appointment/post",
          this.appointmentItem
        );
        if (response.data.status) {
          this.isloading = false;
          this.showmsg = response.data.message;
          this.dialog = true;
          //  setTimeout(() => {
          //    this.dialog=false;
          //  }, 2000);

          this.$refs.form.reset();
        }
      }
    },
  },
};
</script>

<style scoped>
.div6 {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
