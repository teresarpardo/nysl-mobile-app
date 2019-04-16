<template>
    <v-select v-model="filterByTeam" :items="teams" label="Choose your Team:" multiple outline>
      <v-list-tile slot="prepend-item" ripple @click="toggle">
        <v-list-tile-action>
          <v-icon :color="filterByTeam.length > 0 ? 'green darken-4' : ''">{{ icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Select All</v-list-tile-title>
      </v-list-tile>
      <v-divider slot="prepend-item" class="mt-2"></v-divider>
    </v-select>
</template>

<script>
export default {
  name: 'DropdownTeam',
  data() {
    return {
      filterByTeam: "",
    }
  },
  computed: {
    teams() {
      return this.$store.state.teams;
    },
    selectAll () {
        return this.filterByTeam.length === this.teams.length
      },
    selectSome() {
        return this.filterByTeam.length > 0 && !this.selectAll
      },
    icon () {
        if (this.selectAll) return 'mdi-close-box'
        if (this.selectSome) return 'mdi-minus-box'
        return 'mdi-checkbox-blank-outline'
      }
    },
    methods: {
      toggle () {
        this.$nextTick(() => {
          if (this.selectAll) {this.filterByTeam = []} 
          else {this.filterByTeam = this.teams.slice()}
        })
      }
    },
    watch: {
      filterByTeam: function(val){
          this.$emit('update:dropdownTeam', val)
        } 
    }
}
</script>