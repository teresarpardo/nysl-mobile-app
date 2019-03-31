<template>
  <div class="container">
    <h2>Choose your team:</h2>
    <select v-model="filterByTeam">
      <option class="dropdown-item" value="All teams">All teams</option>
      <option class="dropdown-item" v-for="team in teams" :key="team.id" :value="team">{{ team }}</option>
    </select>
    <h2>Choose your date:</h2>
    <select v-model="filterByDate">
      <option class="dropdown-item" value="All calendar">All Calendar</option>
      <option class="dropdown-item" v-for="date in dates" :key="date.id" :value="date">{{ changeDates(date) }}</option>
    </select>
       
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Timetable</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="game in filterGames" :key="game.id">
            <td>{{ changeDates(game.date) }}</td>
            <td>{{ game.home_team }}</td>
            <td>{{ game.away_team }}</td>
            <td>{{ game.times }}</td>
            <td>{{ game.location}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DataTable',
  data() {
    return {
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
    }
  }
  
}

</script>

