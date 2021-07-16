<template>
  <div>
      <v-data-table
        :headers="content.headers"
        :items="content.rows"
        :items-per-page="5"
        class="elevation-1"
      ></v-data-table>
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
.table-row {

}
</style>
