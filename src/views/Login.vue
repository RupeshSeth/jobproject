<template>
    <div class="OpsSignIn" style="height:100vh" >
        <!-- <div class="bg" ><v-img contain :src="bgImage" /></div> -->
        <div class="bg" :style="{ 'background-image': 'url(' + bgImage + ')' }"></div>
        <v-layout align-center justify-center fill-height>
        <v-flex xs12 sm8 md4>
             
            <v-card class="elevation-12">
            <v-toolbar dark color="#B00020">
                <v-toolbar-title>Operation's Sign-In</v-toolbar-title>
            </v-toolbar>
           
            <v-card-text>
                <v-form v-model="valid" ref="form">
                <v-text-field
                    prepend-icon="person"
                    name="login"
                    label="Email id"
                    id="emailId"
                    type="text"
                    :rules="emailRules"
                    v-model="emailId"
                ></v-text-field>
                
                </v-form>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn dark color="#B00020" @click="login">Submit</v-btn>
            </v-card-actions>
            </v-card>
        </v-flex>
        </v-layout>
        </div>
    
</template>

<script lang="ts">
import Vue from "vue";
import { Component, Prop } from 'vue-property-decorator';
import * as Snackbar from 'node-snackbar';

@Component({})
export default class Login extends Vue {
    private emailId: string = '';
    private password: string = '';
    private show1: boolean = false;
    private valid: boolean = true;
    private emailRules = [
        (v: any) => !!v || 'Email is required',
        (v: any) => /.+@.+/.test(v) || 'E-mail must be valid'
    ];
    
    private bgImage: any = require('@/assets/bg2.jpg');

    private mounted() {
        const login = window.localStorage.getItem('login');
        if (login === 'success') {
        this.$router.push({ name: 'Root.Home' });
        } else {
        window.localStorage.clear();
        }
    }


    private login() {
        
    const ref = this.$refs.form as any;
    if (ref.validate()) {

        // We can call the rest API Here.
        if (this.emailId === 'test@gmail.com') {
            window.localStorage.setItem('login', 'success');
            window.localStorage.setItem('userEmailId', this.emailId);
            this.$router.push({name: 'Root.Home'});
        } else {
            Snackbar.show({text: 'The email-id is incorrect. Please try test@gmail.com', backgroundColor: '#B00020', textColor: '#fff', actionTextColor: '#fff',pos: 'top-center'});
        }
    }   
    }
};
</script>

<style scoped>
.bg {
  /* The image used */
  

  /* Full height */
  height: 100%; 

  /* Center and scale the image nicely */
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}


</style>