<template>
<div class="grey lighten-3">
  <v-layout row wrap>
    <v-flex xs12 md6>
      <DropdownTeam :dropdownTeam.sync="filterByTeam"></DropdownTeam>
    </v-flex>
    <v-flex xs12 md6>
      <DropdownDate :dropdownDate.sync="filterByDate"></DropdownDate>
    </v-select>
    </v-flex>
  </v-layout>

  <v-card flat class="grey lighten-3">
    <v-layout row wrap flat>
      <v-flex xs2 v-for="header in headers" :key="header.id">
            <div caption class="grey--text">{{header.text}}</div>
      </v-flex>
      <v-flex xs12>
        <v-layout row wrap flat v-for="game in filterGames" :key="game.id">
          <v-flex xs2>
            <div>{{ game.date }}</div>
          </v-flex>
          <v-flex xs2>
            <div>{{game.times}}</div>
          </v-flex>
          <v-flex xs2>
            <v-chip small :class="`${game.home_team} white--text`">{{ game.home_team }}</v-chip>
          </v-flex>
          <v-flex xs2>
            <v-chip small :class="`${game.away_team} white--text`">{{ game.away_team }}</v-chip>
          </v-flex>
          <v-flex xs4>
            <div @click="goToMap(game)">
                <router-link to="/location"><v-icon color="black" class="right">arrow_forward_ios</v-icon></router-link>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>
  </div>
</template>



<script>
import DropdownTeam from "@/components/DropdownTeam.vue";
import DropdownDate from "@/components/DropdownDate.vue";

export default {
  name: 'DataTable',
  components: {
    DropdownTeam,
    DropdownDate
    
  },
  data() {
    return {
      headers: [
        {text: "Date", value: "date"},
        {text: "Time", value: "times"},
        {text: "Home", value: "home_team"},
        {text: "Away", value: "away_team"},
      ],
      filterByTeam: "",
      filterByDate: "",
    }
  },
  mounted() {
    this.$store.dispatch('loadGames')
  },

  computed: {

    filterGames() {
      let filterArr = this.$store.state.games;

      if(this.filterByTeam != ""){
        filterArr = filterArr.filter(game => this.filterByTeam.includes(game.home_team) || this.filterByTeam.includes(game.away_team));
      }
      
      if(this.filterByDate != "") {
        filterArr = filterArr.filter(game => this.filterByDate.includes(game.date));
      }
      return filterArr;
    }
  },
  methods: {
    goToMap(game){
      this.$router.push({name:'location', params: {adress: game }})
    }
  }
}

</script>

<style>
  .v-chip.U1{
    background-color:rgb(99, 99, 218);
  }
  .v-chip.U2{
    background-color:#EE82EE;
  }
  .v-chip.U3{
    background-color:rgb(241, 245, 30);
  }
  .v-chip.U4{
    background-color:rgb(139, 250, 135);
  }
  .v-chip.U5{
    background-color:rgb(204, 91, 76);
  }
  .v-chip.U6{
    background-color:rgb(125, 191, 211);
  }
</style>



