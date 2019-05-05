<template>
  <div class="home">
    <h1 class="text-xs-center subheading grey--text" >Welcome to NYSL Games Schedule</h1>
    <v-container>
        <DataTable/>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src
import DataTable from "@/components/DataTable.vue";

export default {
  name: "home",
  components: {
    DataTable
  },
};
</script>
