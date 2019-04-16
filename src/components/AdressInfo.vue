<template>
 <v-layout class="align-center justify-center">
    <v-flex>
      <h1 class="text-xs-center subheading grey--text">Field Adress</h1>
      <v-container class="my-2 text-xs-center">
        <p>
          <span class="font-weight-black">Date:</span> 
          {{this.name.date}} |  
          <span class="font-weight-black">Time:</span> 
          {{this.name.times}}
        </p>
        <p class="display-1">
          {{this.name.home_team}} vs {{this.name.away_team}} 
        </p>

        <p class="font-weight-black">{{this.name.location}} School</p>
        <p>{{this.name.adress}}</p>
       <iframe :src="this.name.google_maps" width="100%" height="300" frameborder="0" style="border:0" allowfullscreen></iframe>
      </v-container>
      
    </v-flex>
  </v-layout>
</template>

<script>

export default {
  name: 'AdressInfo',
  data(){
    return{
      name: this.$route.params.adress,
      title:"AdressInfo"
    }
  },
}   
</script>




