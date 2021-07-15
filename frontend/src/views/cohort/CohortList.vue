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
  name: 'CohortList',
  components: {
    LandingListTable,
    LandingCreate,
  },
  data() {
    return {
      drawer: true,
      mini: true,
      createListContent: {
        name: 'Cohorts',
        link: 'VocabularyCreate',
        buttonName: 'Cohort',
      },
      tableContent: {
        headers: [
          {
            text: 'Index',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Index name', value: 'indexName' },
          { text: 'version', value: 'version' },
          { text: 'Environment', value: 'environment' },
          { text: 'Status', value: 'status' },
          { text: 'Date Created', value: 'dateCreated' },
          { text: 'Storage', value: 'storage' },
          { text: 'URL', value: 'url' },
        ],
        rows: [
          {
            name: 'Medication List',
            indexName: 'medication-2021.v5.0.0',
            version: 'v5.0.0',
            environment: 'production',
            status: 'active',
            dateCreated: '2021-06-15',
            storage: 'ElasticSearch',
            url: 'https://34.87.79.18:9200/dev.medication-2021.v5.0.0',
          },
          {
            name: 'Diagnosis List',
            indexName: 'diagnosis-2021.v5.0.0',
            version: 'v5.0.0',
            environment: 'production',
            status: 'active',
            dateCreated: '2021-06-15',
            storage: 'ElasticSearch',
            url: 'https://34.87.79.18:9200/diagnosis-2021.v5.0.0',
          },
          {
            name: 'Procedure List',
            indexName: 'procedure-2021.v5.0.0',
            version: 'v5.0.0',
            environment: 'production',
            status: 'active',
            dateCreated: '2021-06-15',
            storage: 'ElasticSearch',
            url: 'https://34.87.79.18:9200/dev.medication-2021.v5.0.0',
          },
          {
            name: 'Problem or Complaint List',
            indexName: 'problem-2021.v5.0.0',
            version: 'v5.0.0',
            environment: 'production',
            status: 'active',
            dateCreated: '2021-06-15',
            storage: 'ElasticSearch',
            url: 'https://34.87.79.18:9200/dev.medication-2021.v5.0.0',
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
