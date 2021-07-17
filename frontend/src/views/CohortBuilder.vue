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
     <div class="container" color="red">
      <aside class="aside sidebar-aside">
        <router-view name="sidebar" :content="sidebarContent"></router-view>
      </aside>
      <main>
        <router-view name="default"></router-view>
      </main>
    </div>

  </div>
</template>

<script>
export default {
  name: 'CohortBuilder',
  data() {
    return {
      drawer: true,
      // mini: true,
      sidebarContent: {
        title: {
          description: 'Cohort Builder',
          icon: 'mdi-account-multiple-check',
          link: 'CohortBuilder',
        },
        items: [
          {
            title: 'Subset',
            icon: 'mdi-view-list',
            link: 'SubsetList',
          },
          {
            title: 'Cohort',
            icon: 'mdi-clipboard-list-outline',
            link: 'CohortList',
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
.nav-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  vertical-align: middle;
}
.sidebar-aside {
  background-color: grey;
  color: red;
}
</style>
