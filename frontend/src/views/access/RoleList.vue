<template>
<div class="terminology-page">
    <v-row class="text-center">
      <v-col class="mb-4">
        <h1 class="display-1 font-weight-bold page-label">
          <!-- Terminology Services -->
        </h1>
      </v-col>
      <v-col class="mb-5" cols="12" >
        <v-row> </v-row>
      </v-col>
    </v-row>
     <div class="container">
      <aside class="aside">
        <sidebar-standard name="sidebar" :contents="sidebarContent"></sidebar-standard>
      </aside>
      <main>
        <v-container class="generic-table-page">
          <landing-create :contents="createListContent"></landing-create>
          <landing-list-table :contents="tableContent"></landing-list-table>
        </v-container>
      </main>
    </div>
  </div>

</template>

<script>
import LandingCreate from '../../components/layouts/LandingCreate.vue';
import LandingListTable from '../../components/layouts/LandingListTable.vue';
import SidebarStandard from '../../components/sidebars/SidebarStandard.vue';

export default {
  name: 'RoleList',
  components: {
    LandingListTable,
    LandingCreate,
    SidebarStandard,
  },
  data() {
    return {
      drawer: true,
      mini: true,
      createListContent: {
        pageTitle: 'Vocabularies',
        commands: [
          {
            link: 'RoleCreate',
            icon: 'mdi-plus-box',
            buttonName: 'Create Role',
          },
        ],
      },
      sidebarContent: {
        title: {
          description: 'Access Management',
          icon: 'mdi-shield-account',
          link: 'UserList',
        },
        items: [
          {
            title: 'User',
            icon: 'mdi-account-plus',
            link: 'UserList',
          },
          {
            title: 'Role',
            icon: 'mdi-hat-fedora',
            link: 'RoleList',
          },
        ],
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
.sidebar {
  z-index: 1;
  margin-top: -16px;
  min-width: 64px;
}
.first-list-item {
  padding-left: 15px;
  padding-top: 0px;
  margin-bottom: -12px;
}
.first-list-content {
  margin-left: -16px;
}
.next-list-item {
  padding-left: 21px;
}
.next-list-content {
  padding-top: 10px;
  margin-left: -10px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  vertical-align: middle;
}
</style>
