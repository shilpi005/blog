<template>
  <v-row justify="end" class="text-right mr-2">
    <v-dialog v-model="dialog" persistent max-width="600px" scrollable>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="#3584FA" class="lead-btn" dark v-bind="attrs" v-on="on"><v-icon>mdi-plus</v-icon>
          Add Lead
        </v-btn>
      </template>
      <v-card>
        <v-card-title class="text-h5 lead-heading" >
          <span>Add Lead</span>
          <v-spacer></v-spacer>
          <v-btn icon color="black" text @click="dialog = false">
            <v-icon color="white">mdi-close</v-icon>
          </v-btn>
        </v-card-title>

        <!-- <v-form> -->
        <v-card-text class="form-card">
          <v-row no-gutters>
            <v-col cols="12" sm="6" md="6" class="pr-2">
              <v-text-field
                label="First Name" outlined dense flat ></v-text-field>
            </v-col>
            <v-col cols="12" sm="6" md="6">
              <v-text-field label="Last Name" outlined dense></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field label="Mobile Number" outlined dense></v-text-field>
            </v-col>
            <v-col cols="12" sm="12" md="12">
              <v-text-field label="Email" outlined dense></v-text-field>
            </v-col>
            <v-col cols="12" sm="12">
              <v-select
                 :closeOnSelect="true"
                :menu-props="{ bottom: true, offsetY: true }"
                :items="items"
                label="select city"
                flat
                outlined
                dense
                append-icon="mdi-chevron-down"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="12">
              <v-select
                :closeOnSelect="true"
                :menu-props="{ bottom: true, offsetY: true }"
                :items="items"
                label="state"
                outlined
                dense
                append-icon="mdi-chevron-down"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="12">
              <v-select
                :closeOnSelect="true"
                :menu-props="{ bottom: true, offsetY: true }"
                :items="items"
                label="Referred By"
                outlined
                dense
                append-icon="mdi-chevron-down"
              ></v-select>
            </v-col>
            <v-col cols="12" sm="12">
              <v-select
                :closeOnSelect="true"
                :menu-props="{ bottom: true, offsetY: true }"
                :items="items"
                label="source"
                outlined
                dense
                append-icon="mdi-chevron-down"
              ></v-select>
            </v-col>
            <v-col
        cols="12"
        md="12"
      >
        <v-textarea
          outlined
          depressed
          name="input-7-4"
          label="Type remarks here.."
          value=""
        ></v-textarea>
      </v-col>
          </v-row>
        </v-card-text>
        <!-- </v-form> -->
          <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn class="save-lead" text>
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    {{dialogshow}}
  </v-row>
</template>

  <script>
export default {
  name: "addLead",
  data: () => ({
    dialog: false,
    items:[]
  }),

  props: ['dialogshow']
  
};
</script>

<style scoped>
.lead-heading {
  background-color: #3584fa;
  padding: 12px;
  color: #fff;
  
}
.close-btn {
  color: #fff;
  transform: rotate(45deg);
}
.lead-heading h2 {
  color: #fff;
}
.form-card {
  margin: 10px 0;
 
}
.lead-form {
  padding: 10px;
}
/* .v-text-field.v-text-field--enclosed .v-text-field__details {
    display: none;
    padding:0;
    
} */
.lead-btn{
  position:absolute;
  float:right;
  text-align: right;
  color:#fff;
  font-size:14px;
  font-weight:500;
  padding: 8px 13px;
  margin-top: 13px;
}
.save-lead{
  background-color: #3584FA;
  color: #fff;
  padding:15px 43px;
  width:165px;
  margin-right: 10px;
}
</style>