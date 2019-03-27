<template>
  <div class="container">
    <table class="table table-striped">
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
        <tr v-for="game in games" :key="game.id">
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
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'DataTable',
  mounted () {
    this.$store.dispatch('loadGames')
  },
  computed: mapState([
    'games'
  ])
}

</script>