<template>
  <div>
    <v-row align="center" justify="left" style="margin-left: 20px;">
      <v-layout child-flex>
      <v-data-table
        :headers="content.headers"
        :items="content.rows"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
      </v-layout>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'LandingListTable',
  props: {
    content: {
      headers: Array,
      rows: Array,
    },
  },
  data() {
    return {
    };
  },
};
</script>
<style scoped>
</style>
