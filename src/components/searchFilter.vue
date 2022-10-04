<template>
    <div style="display:flex;padding:10px 0 0 10px;">
     <v-row>
        <v-col sm="3">
          <v-text-field prepend-inner-icon="mdi-magnify"
            label="Search name, email, etc" solo dense flat ></v-text-field>
        </v-col>
        <v-col cols="12" sm="2">
        <v-select
        :closeOnSelect="true"
        :menu-props="{ bottom: true, offsetY: true }"
        :items="items"
        item-text="state"
          item-value="abbr"
          label="Filter by source" flat
          dense
          solo
        append-icon="mdi-chevron-down"></v-select>
      </v-col>
      <v-spacer></v-spacer>
    <v-col class="text-right mr-2" >
      <addLead />
    </v-col>
    </v-row>
    </div>
</template>

<script>
 import addLead from './addLead.vue'
export default{
    name:'searchFilter',
    components:{
      addLead
    },
    data(){
      return{
      items: [
          { state: 'Florida', abbr: 'FL' },
          { state: 'Georgia', abbr: 'GA' },
          { state: 'Nebraska', abbr: 'NE' },
          { state: 'California', abbr: 'CA' },
          { state: 'New York', abbr: 'NY' },
        ],
      }
    }
    
}
</script>

<style scoped>
/* .lead-btn{
  text-align: left;
  color:#fff;
  font-size:14px;
  font-weight:500;
  padding: 8px 13px;
} */
</style>

