<template>
    <div class="container">
       <h2>{{this.$route.params.adress}}</h2>
       <p>{{showAdress(this.$route.params.adress)}}</p>
       <h2>the product id is :{{this.$route.params.adress}}</h2>
       <!-- <div class="col-md-12" v-for="(game,index) in games" :key="index">
     <div v-if="adress == game.location">
      <h1>{{game.date}}</h1> -->
     </div>
    </div>
    </div> 
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'AdressInfo',
  data(){
    return{
      adress: this.$route.params.adress,
      title:"AdressInfo"
    }
  },

  mounted() {
    this.$store.dispatch('loadGames')
  },

  computed: {
    locations() {
      return this.$store.state.games.map(game => game.location);
    },
  },
  methods: {
      showAdress(place) {
          if (place === "AJ Katzenmaier" ) {return "24 W. Walton St., Chicago, IL 60610"}
          if (place === "Greenbay Elementary" ) {return "1734 N. Orleans St., Chicago, IL 60614"}
          if (place === "Howard A Yeager Elementary") {return "2245 N. Southport Ave., Chicago, IL 60614"}
          if (place === "Marjorie P Hart Elementary") {return "2625 N. Orchard St., Chicago, IL 60614"}
          if (place === "North Elementaryr" ) {return "1409 N. Ogden Ave., Chicago, IL 60610"}
          if (place === "South Elementary" ) {return "2101 N. Fremont St., Chicago, IL 60614"}   
      }
  }
}
    
</script>

