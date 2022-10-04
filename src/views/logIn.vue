<template>
<div style="background-color: #B9D5FF;height:100%;padding-top:10%;" class="align-center">
<div class="login-div">
    <p>Welcome, please signin</p>
    <v-form>
    <v-container>
      <v-row no-gutters>
    <v-col
          cols="12"
          
        >
          <v-text-field
            label="Email"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          
        >
          <v-text-field
            label="Password"
            type="password"
            outlined
            dense
          ></v-text-field>
        </v-col>
        <v-col text-center>
            <v-btn class="signin-btn" block tile color="#3584FA" width="10px" @click="signin">Sign in</v-btn>
            <span class="forgot" @click="forpassword">forgot password?</span>
        </v-col>
        
    </v-row>
    </v-container>
  </v-form>
</div>
</div>    
</template>
<script>
    export default{
        name:'logIn',
        methods:{
            forpassword(){
              this.$router.push({ name: "forgotPassword" });
            },
            signin(){
              this.$router.push({ name: "homeView" });
            }
        },
    };
</script>
<style scoped>
.login-div{
    background-color: #fff;
    width: 300px;
  margin: auto;
  text-align:center;
  padding:15px;
  border-radius: 5px;
}
.login-div p{
    color:#3584FA;
    font-weight: 600;
font-size: 18px;
}
.signin-btn{
    background-color: #3584FA;
border-radius: 5px;
color:#fff;
}
.forgot{
    color:#FF4C34;
    cursor:pointer;
}
</style>