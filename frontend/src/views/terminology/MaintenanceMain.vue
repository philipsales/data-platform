<template>
  <div class="terminology-page">
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold mb-3 page-label">
          Maintenance Home
        </h1>
        <v-divider></v-divider>
      </v-col>
      <v-col class="mb-5" cols="12" >
        <v-row justify="center"> </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'MaintenanceMain',
  data() {
    return {
      drawer: true,
      mini: true,
    };
  },
};
</script>
<style scoped>
.terminology-page {
  width: 100%;
  background-color: ed;
  height: 1000px;
}
.page-sidebar {
  z-index: 1;
  margin-top:10px;
}
</style>
