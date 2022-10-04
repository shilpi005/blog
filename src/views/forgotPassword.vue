<template>
    <div style="background-color: #B9D5FF;height:100%;padding-top:10%;">
<div class="password-div">
    <p>Forgot Password</p>
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
        
        <v-col text-center>
            <v-btn class="otp-btn" block tile color="#3584FA" width="10px" @click="signin">Send OTP</v-btn>
            <span class="forgot" @click="forpassword">Signin</span>
        </v-col>
        
    </v-row>
    </v-container>
  </v-form>
</div>
</div>
</template>

<script>

export default{
    name:'forgotPassword',
    methods:{
        forpassword(){
            this.$router.push({ name: "logIn" });
        }
    }

}
</script>

<style scoped>
.password-div{
    background-color: #fff;
    width: 300px;
  margin: auto;
  text-align:center;
  padding:15px;
  border-radius: 5px;
}
.password-div p{
    color:#3584FA;
    font-weight: 600;
font-size: 18px;
}
.otp-btn{
    background-color: #3584FA;
border-radius: 5px;
color:#fff;
}
.forgot{
    color:#FF4C34;
    cursor:pointer;
}
</style>
