<template>
    <v-toolbar flat fixed-header elevation="2">
      <v-toolbar-title class="main-title">
        SALES PORTAL  <span class="title-span">Client Management<span class="span-text">/Leads</span></span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-avatar color="#333333" size="46" class="avtr">Ak</v-avatar>
          <span class="avtr-text">A K Satish</span>
          <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn icon v-bind="attrs" v-on="on">
          <v-icon>mdi-chevron-down</v-icon>
        </v-btn>
      </template>
      <!-- <v-list>
        <v-list-item>one</v-list-item>
      </v-list> -->
      <div class="drpdwn">
        <div style="padding:20px 20px 0 20px">
        <v-avatar color="#333333" size="50" class="avtr" text--center>Ak</v-avatar>
        <h4>A K Satish</h4>
        <p style="font-size:15px">operations.head@gmail.com</p>
      </div>
        <v-divider></v-divider>
        <div style="padding:20px 0">
        <p class="drpdwn-text">CHANGE PASSWORD</p>
        <span class="drpdwn-text" @click="logout">LOGOUT</span>
      </div>
      </div>
      </v-menu>
    </v-toolbar>
</template>
<script>
// import VueRouter from 'vue-router'
export default{
  methods:{
    logout(){
      
     this.$router.push({ name: "logIn" });
    }
  }
};
</script>


  <style>
    .main-title{
      color:#3584FA;
      font-size:16px;
      font-weight:700;
    }
    .title-span{
      font-size:16px;
      color:#333333;
      font-weight:600;
    }
    .avtr{
      color: #fff;
      padding: 8px 10px;
    }
    .avtr-text{
      padding:5px;
      margin-bottom:2px;
    }
    .drpdwn{
      background-color: #fff;
      text-align: center;
      
    }
    /* .drpdwn div{
      margin: 10px 10px 0 10px;
    } */
    .drpdwn-text{
      font-size:16px;
      font-weight: bold;
      letter-spacing: 2px;
      cursor:pointer;
    }
    .span-text{
      font-weight: 400;
    }
  </style>