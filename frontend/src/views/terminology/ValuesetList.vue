<template>
  <div class="terminology-page">
    <landing-create :content="createListContent"></landing-create>
    <landing-list-table :content="tableContent"></landing-list-table>
  </div>
</template>

<script>
import LandingCreate from '../../components/layouts/LandingCreate.vue';
import LandingListTable from '../../components/layouts/LandingListTable.vue';

export default {
  name: 'ValusetList',
  components: {
    LandingListTable,
    LandingCreate,
  },
  data() {
    return {
      drawer: true,
      mini: true,
      createListContent: {
        name: 'Valuesets',
        link: 'ValuesetCreate',
        buttonName: 'Valueset',
      },
      tableContent: {
        headers: [
          {
            text: 'Term',
            align: 'start',
            sortable: false,
            value: 'term',
          },
          { text: 'Vocabulary', value: 'vocabulary' },
          { text: 'Status', value: 'status' },
          { text: 'Author', value: 'author' },
          { text: 'Storage', value: 'storage' },
          { text: 'Date Created', value: 'dateCreated' },
        ],
        rows: [
          {
            term: 'T2DM',
            vocabulary: 'diagnosis-2021.v5.0.0',
            author: 'Philip',
            status: 'active',
            dateCreated: '2021-06-15',
            storage: 'ElasticSearch',
          },
          {
            term: 'd2tm',
            vocabulary: 'diagnosis-2021.v5.0.0',
            author: 'Philip',
            status: 'active',
            dateCreated: '2021-06-15',
            storage: 'ElasticSearch',
          },
          {
            term: 'Diabetes Type 2',
            vocabulary: 'diagnosis-2021.v5.0.0',
            author: 'Philip',
            status: 'active',
            dateCreated: '2021-06-15',
            storage: 'ElasticSearch',
          },
        ],
      },
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
.page-label {
  position: left;
}
.nav-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  vertical-align: middle;
}
</style>
