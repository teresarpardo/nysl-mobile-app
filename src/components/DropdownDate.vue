<template>
    <v-select v-model="filterByDate" :items="dates" label="Choose a Date:" multiple outline>
      <v-list-tile slot="prepend-item" ripple @click="toggle">
        <v-list-tile-action>
          <v-icon :color="filterByDate.length > 0 ? 'green darken-4' : ''">{{ icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-title>Select All</v-list-tile-title>
      </v-list-tile>
      <v-divider slot="prepend-item" class="mt-2"></v-divider>
    </v-select>
</template>

<script>
export default {
  name: 'DropdownDate',
  data() {
    return {
      filterByDate: "",
    }
  },
  computed: {
    dates() {
      return this.$store.state.dates;
    },
    selectAll() {
      return this.filterByDate.length === this.dates.length;
    },
    selectSome() {
      return this.filterByDate.length > 0 && !this.selectAll;
    },
    icon() {
      if (this.selectAll) return 'mdi-close-box'
      if (this.selectSome) return 'mdi-minus-box'
      return 'mdi-checkbox-blank-outline'
    }
  },
  methods: {
    toggle () {
      this.$nextTick(() => {
        if (this.selectAll) {this.filterByDate = []} 
        else {this.filterByDate = this.dates.slice()}
      })
    },
    changeDates(date){
    date = date.split("/");
    if(date[1]=== "09"){date[1] = "September"}
    if(date[1]=== "10"){date[1] = "October"}
    date = date.join(" of ");
    return date
    }
  },
  watch: {
    filterByDate: function(val){
        this.$emit('update:dropdownDate', val)
      } 
  }
}
</script>

