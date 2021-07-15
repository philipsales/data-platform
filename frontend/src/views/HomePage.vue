<template>
  <v-container class="terminology-page">
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/medcheck.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>

      <v-col class="mb-4">
        <h1 class="display-2 font-weight-bold mb-3">
          Medcheck Data Platform
        </h1>
      </v-col>

      <v-col class="mb-5" cols="12" >
        <v-row justify="center"> </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Vocabulary', icon: 'mdi-home-city' },
        { title: 'Maintenance', icon: 'mdi-account' },
      ],
      mini: true,
    };
  },
};
</script>
<style scoped>
.terminology-page {
  width: 100%;
}
</style>
