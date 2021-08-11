<template>
    <div class="Dashboard" >
        <v-layout>
            <v-flex xs12><h1 class="h2 font-weight-bold" style="color: #999">Posts</h1></v-flex>
           
        </v-layout>
        <v-divider></v-divider>
       

        <v-layout class="mt-5">
            <v-flex>

                <v-data-table
                :headers="headers"
                :items="posts"
                :items-per-page="10"
                class="elevation-1"
            >
        

                <template v-slot:body="{ items }">
                    <tbody>
                        <tr v-for="item in items" :key="item.id">
                        <td class="text-md-left">
                            <v-chip class="ma-2" color="primary">{{item.id}}</v-chip>
                        </td>
                        <td><v-chip class="ma-2" color="indigo" text-color="white">
                            
                                {{item.userId}}</v-chip>
                        </td>
                        <td class="text-md-left">
                            {{item.title}}
                        </td>
                        <td class="text-md-left font-weight-bold">{{item.body}}</td>
                      
                    </tr>
                    </tbody>
                </template>
            
            
            </v-data-table>
            </v-flex>
        </v-layout>
       
    </div>
</template>

<script lang="ts">
import Vue from "vue"
import Component from "vue-class-component";

@Component({})
export default class Dashboard extends Vue {
 private  posts = [];

private headers: any = [
    { text: 'ID', align: 'center', sortable: true, value: 'id'},
    { text: 'USER ID', align: 'center', sortable: true, value: 'userId', width:'100'},
    { text: 'TITLE', align: 'start', sortable: true, value: 'title' },
    { text: 'BODY', align: 'start', sortable: true, value: 'body' },
    ];

private mounted() {
    this.getPost();
}

async  getPost() {
  // GET request using fetch with async/await
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  this.posts = data;
  console.log(this.posts)

} 

   

    

    



};
</script>

<style>




</style>