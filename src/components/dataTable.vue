<template>
  <v-data-table
    :headers="headers"
    :items="item"
    class="elevation-1"
    hide-default-footer
    :loading="loading"
  >


    <template v-slot:[`item.action`]="{ item }">
      <div class="py-3">
        <v-btn depressed outlined color="primary" small class="mr-1">Edit</v-btn>
        <v-btn @click="delete(item.id)" depressed outlined color="primary" small class="mr-1">Delete</v-btn>
        <v-btn depressed outlined color="primary" small><v-icon>mdi-dots-vertical</v-icon></v-btn>
      </div>
    </template>
    <template v-slot:[`item.contact`]="{ item }">
    <!-- {{item.contact.length}} -->
    
      <div v-if="item.contact.length>0">
       
        <div v-for="con in item.contact" :key="con.id">
        {{con.name}}
        {{con.Mob}}
        {{con.mail}}
        <!-- {{item.contact.name}} -->
      </div>
      </div>
      <div v-else>
        <p>--</p>
      </div>
    </template>
    <template v-slot:[`item.name`]="{ item }">
      <div>
      <div v-if="item.name != ''">
        {{item.name}}
      </div>
      <div v-else>
          <p>--</p>
      </div>
    </div>
    </template>
  </v-data-table>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      headers: [
        {
          text: "Registration Date",
          align: "center",
          sortable: false,
          value: "date",
          class: 'clr'
        },
        { text: "Client Name", value: "name", align: "center", sortable: false,class: 'clr' },
        { text: "Contact", value: "contact", align: "center", sortable: false, class: 'clr' },
        { text: "Referred By", value: "refer", align: "center", sortable: false, class: 'clr' },
        { text: "Source", value: "source", align: "center", sortable: false, class: 'clr' },
        { text: "Action", value: "action", align: "center", sortable: false, class: 'clr'},
      ],
      item:[],
      user: [
        {
          id: 1,
          date: "17/05/22",
          name: "Amit Jain",
          refer: "Sujay",
          source: "IVR Call",
          action: "",
          contact: [
            { name: "Shilpi", Mob: 1234, mail: "shilpi@gmail.com" },
            { name: "Raveen", Mob: 1234, mail: "raveen@gmail.com" },
          ],
        },
        {
          id: 2,
          date: "17/05/22",
          name: "",
          refer: "Sujay",
          source: "IVR Call",
          action: "",
          contact: [],
        },
      ],
    };
  },
  methods: {
    delete(id) {
      console.log(id);
    },
  },
  mounted() {
  //   setTimeout(() => (
  //     this.item=this.user
  //     this.loading = false), 2000);
  // },
  setTimeout(() => {
    this.item=this.user;
      this.loading = false;
  }, 2000);
}}
</script>
  <style>
button {
  border: #3584fa;
}
.clr{
  background-color: #ECECEC;
}

</style>