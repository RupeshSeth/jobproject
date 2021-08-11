
<template>
 <div>
  <v-container fluid ma-0 pa-0>
     <v-layout row wrap>
     <v-flex xs12>
         <router-view name='header'  />
     </v-flex>
     <v-flex xs12>
         <v-layout>
             <v-flex shrink class="sideNav">
                 <div class='verticalPageScroll sideNav'>
                 <router-view name='leftnav'></router-view>
                 </div>
             </v-flex>
             <v-flex>
                 <div class='verticalPageScroll defaultView'>
                    <router-view/>
                    <router-view name='footer' />
                 </div>
             </v-flex>
         </v-layout>
     </v-flex>
     <!-- <v-flex xs12>
         
     </v-flex> -->
     </v-layout>
 </v-container>
  
 </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class OpsLayout extends Vue {
}
</script>

