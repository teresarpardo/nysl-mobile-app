<template>
<div>
  <v-layout row wrap>
    <v-flex xs12 md6>
      <v-select :items="teams" v-model="filterByTeam" label="Choose your team:" outline>
        <option class="dropdown-item" value="All teams">All teams</option>
        <option class="dropdown-item" v-for="team in teams" :key="team.id" :value="team">{{ team }}</option>
      </v-select>
    </v-flex>
    <v-flex xs12 md6>
    <v-select :items="dates" v-model="filterByDate" label="Choose your date:" outline>
      <option class="dropdown-item" value="All calendar">All Calendar</option>
      <option class="dropdown-item" v-for="date in dates" :key="date.id" :value="date">{{ changeDates(date) }}</option>
    </v-select>
    </v-flex>
  </v-layout>

  <v-card flat class="grey lighten-3">
    <v-layout row wrap flat>
      <v-flex xs2 sm3 v-for="header in headers" :key="header.id">
            <div caption class="grey--text">{{header.text}}</div>
      </v-flex>
      <v-flex xs12>
        <v-layout row wrap flat v-for="game in filterGames" :key="game.id">
          <v-flex xs2 sm3>
            <div>{{ game.date }}</div>
          </v-flex>
          <v-flex xs2 sm3>
            <div>{{game.times}}</div>
          </v-flex>
          <v-flex xs2 sm3>
            <v-chip small :class="`${game.home_team} white--text`">{{ game.home_team }}</v-chip>
          </v-flex>
          <v-flex xs2 sm2>
            <v-chip small :class="`${game.away_team} white--text`">{{ game.away_team }}</v-chip>
          </v-flex>
          <v-flex xs4 sm1>
            <div @click="goToMap(game)">
              <router-link to="/location"><v-icon color="black" class="right">arrow_forward_ios</v-icon></router-link>
            </div>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-card>

  <!-- <v-layout row wrap>
    <v-flex xs12>
      <v-data-table
        :headers="headers"
        :items="filterGames"
        hide-actions
        pa-3
      >
        <template v-slot:items="games">
          <tr v-for="game in filterGames" :key="game.id" class="grey lighten-2">
            <td xs3>{{ changeDates(game.date) }}</td>
            <td xs1>{{ game.home_team }}</td>
            <td xs1>{{ game.away_team }}</td>
            <td xs3>{{ game.times }}</td>
            <td xs5 @click="goToMap(game)"><router-link to="/location">{{game.location}} </router-link></td>
          </tr>
        </template>
       </v-data-table>
    </v-flex>
  </v-layout> -->
   
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  data() {
    return {
      headers: [
        {text: "Date", value: "date"},
        {text: "Time", value: "times"},
        {text: "Home", value: "home_team"},
        {text: "Away", value: "away_team"},
      ],
      filterByTeam: "All teams",
      filterByDate: "All calendar",
    }
  },
  mounted() {
    this.$store.dispatch('loadGames')
  },

  computed: {
    teams() {
      return this.$store.state.teams;
    },
    dates() {
      return this.$store.state.dates;
    },
    filterGames() {
      let filterArr = this.$store.state.games;
      if (this.filterByTeam != "All teams") {
        filterArr = filterArr.filter(game => game.home_team === this.filterByTeam || game.away_team === this.filterByTeam);
      }
      if(this.filterByDate != "All calendar") {
        filterArr = filterArr.filter(game => game.date === this.filterByDate);
      }
      return filterArr;
    }
  },
  methods: {
    changeDates(date){
      date = date.split("/");
      if(date[1]=== "09"){date[1] = "September"}
      if(date[1]=== "10"){date[1] = "October"}
      date = date.join(" of ");
      return date
    },
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



