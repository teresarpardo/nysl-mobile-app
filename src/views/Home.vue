<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/nysl_logo.png" />
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
