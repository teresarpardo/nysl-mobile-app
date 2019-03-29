<template>
  <div class="home">
    <h1>Welcome to NYSL Games Schedule</h1>
    <p>Choose your team</p> <!-- Aqui va un dropdown button para filtar la tabla por equipo -->

    <DataTable/>
  </div>
</template>

<script>
// @ is an alias to /src
import DataTable from "@/components/DataTable.vue";

export default {
  name: "home",
  components: {
    DataTable
  }
};
</script>
