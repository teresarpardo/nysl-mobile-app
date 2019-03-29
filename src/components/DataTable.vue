<template>
  <div class="container">
    
    <select v-model="filterByTeam">
      <option class="dropdown-item" value="All teams">All teams</option>
      <option class="dropdown-item" v-for="team in teams" :key="team.id" :value="team">{{ team }}</option>
    </select>
       
    <div>
      <table class="table">
        <thead>
          <tr>
            <th>Month</th>
            <th>Date</th>
            <th>Home Team</th>
            <th>Away Team</th>
            <th>Timetable</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="game in filterGames" :key="game.id">
            <td>{{ game.month }}</td>
            <td>{{ game.date }}</td>
            <td>{{ game.home_team }}</td>
            <td>{{ game.away_team }}</td>
            <td>{{ game.time }}</td>
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
  data () {
    return {
      filterByTeam: "All teams",
    }
  },
  mounted () {
    this.$store.dispatch('loadGames')
  },

  computed: {
    teams(){
    return this.$store.state.teams;
    },

    filterGames () {
      let filterArr = this.$store.state.games;
      if (this.filterByTeam != "All teams") {
        filterArr = filterArr.filter(game => game.home_team === this.filterByTeam || game.away_team === this.filterByTeam);
      }
      return filterArr;
    }
  },

  
}

</script>

