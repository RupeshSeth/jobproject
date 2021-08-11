<template>
  <div class="Header">
    <v-layout px-3 row wrap align-center>
      <v-flex v-if="$vuetify.breakpoint.smAndDown">
         <v-icon size="36" color="#fff" @click="showLeftMenuClick">view_headline</v-icon>
      </v-flex>
     
      <v-flex><h1 class="white--text">My Blog</h1></v-flex>
      <v-spacer></v-spacer>
      <v-flex shrink>
         
         <v-list dark style="background-color: transparent;color: #fff">
          <v-list-item >
                    <v-list-item-content>
                        <v-list-item-title class="title text-right" color="#fff" >Welcome</v-list-item-title>
                        <v-list-item-subtitle class="text-right" color="#fff">{{emailId}}</v-list-item-subtitle>
                    </v-list-item-content> 

                    </v-list-item>
                </v-list>
      </v-flex>
      <v-flex shrink>
          <v-btn  @click="logout">Logout</v-btn>
      </v-flex>

      


    </v-layout>
  </div>













             
</template>

<script lang="ts">
import { Vue, Component, Prop, Emit, Watch } from "vue-property-decorator";

@Component
export default class Header extends Vue {
  private userProfile: any = "";
  private on: any;
  private showLeftMenu: boolean = false;
  get emailId() {
    return window.localStorage.getItem("userEmailId") as string;
  }

  private mounted() {
    this.getUserProfile();
  }

  private logout() {
    window.localStorage.clear();
    this.$router.push({ name: "Auth.Login" });
  }

  private getUserProfile() {
    const output = {
      name: "Admin",
      userId: "5f1d2afe59187c08334b5502",
      photoURL:
        "https://cdn.vuetifyjs.com/images/john.png",
    };
    this.userProfile = output;
  }


  private showLeftMenuClick() {
   
    this.showLeftMenu  = !this.showLeftMenu
    this.$root.$emit('openMenu', this.showLeftMenu);
  }



}
</script>

<style>
</style>
