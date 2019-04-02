<template>
<div>

  <v-layout row wrap>
    <v-flex xs12 md6>
        <h2>Choose your team:</h2>
      <v-select :items="teams" v-model="filterByTeam" label="Choose your team:" outline>
        <option class="dropdown-item" value="All teams">All teams</option>
        <option class="dropdown-item" v-for="team in teams" :key="team.id" :value="team">{{ team }}</option>
      </v-select>
    </v-flex>
    <v-flex xs12 md6>
      <h2>Choose your date:</h2>
    <v-select :items="dates" v-model="filterByDate" label="Choose your date:" outline>
      <option class="dropdown-item" value="All calendar">All Calendar</option>
      <option class="dropdown-item" v-for="date in dates" :key="date.id" :value="date">{{ changeDates(date) }}</option>
    </v-select>
    </v-flex>
  </v-layout>

  <v-layout row wrap>
    <v-flex xs12>
      <v-data-table
        :headers="headers"
        :items="filterGames"
        hide-actions
        pa-3
      >
        <template v-slot:items="games">
          <tr v-for="game in filterGames" :key="game.id">
            <td>{{ changeDates(game.date) }}</td>
            <td>{{ game.home_team }}</td>
            <td>{{ game.away_team }}</td>
            <td>{{ game.times }}</td>
            <td @click="goToMap(game)"><router-link to="/location">{{game.location}} </router-link></td>
          </tr>
        </template>
       </v-data-table>
    </v-flex>
  </v-layout>
   
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  data() {
    return {
      headers: [
        {text: "Date", value: "date"},
        {text: "Home Team", value: "home_team"},
        {text: "Away Team", value: "away_team"},
        {text: "Timetable", value: "times"},
        {text:"Location", value: "location"}
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

