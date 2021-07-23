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
      <!-- SIDEBAR -->
      <aside class="aside">
        <sidebar-standard name="sidebar" :contents="sidebarContent"></sidebar-standard>
      </aside>
      <!-- MAIN PAGE -->
      <main>
        <v-container class="generic-table-page">
          <landing-create :contents="createRoleContent"></landing-create>

          <v-row class="" style="">
            <v-col cols="12" style="background-color: ed">
              <v-card style="padding: 0px 5px;" class="rounded-sm">
                <v-text-field
                  v-model="search"
                  prepend-inner-icon="mdi-magnify"
                  label="Search"
                  single-line
                  hide-details
                ></v-text-field>
              </v-card>
                <v-data-table
                  :headers="searchValuesetContent.headers"
                  :items="searchValuesetContent.rows"
                  item-key="roleId"
                  show-select
                  :items-per-page="5"
                  class="elevation-1">
                  <template v-slot:item.option="{ item }">
                    <a href="" class="descendant linkable">
                    <v-icon color="blue darken-1"
                      v-model="item.option"
                      text
                    >mdi-magnify</v-icon>
                    </a>
                  </template>
                </v-data-table>
            </v-col>
          </v-row>
        </v-container>
      </main>
    </div>
  </div>

</template>

<script>
import LandingCreate from '../../components/layouts/LandingCreate.vue';
// import LandingListTable from '../../components/layouts/LandingListTable.vue';
import SidebarStandard from '../../components/sidebars/SidebarStandard.vue';

export default {
  name: 'RoleList',
  components: {
    // LandingListTable,
    LandingCreate,
    SidebarStandard,
  },
  data() {
    return {
      drawer: true,
      mini: true,
      createRoleContent: {
        pageTitle: 'Roles',
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
      searchValuesetContent: {
        headers: [
          {
            text: 'Title',
            align: 'start',
            sortable: true,
            value: 'title',
          },
          { text: 'Module', value: 'module' },
          { text: 'Status', value: 'status' },
          { text: 'Permissions', value: 'permission' },
          { text: '', value: 'option' },
        ],
        rows: [
          {
            roleId: '1',
            title: 'Terminology Server Owner',
            module: 'Terminology Server',
            status: 'Enabled',
            permission: '3',
          },
          {
            roleId: '2',
            title: 'Terminology Server Editor',
            module: 'Terminology Server',
            status: 'Enabled',
            permission: '33',
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
