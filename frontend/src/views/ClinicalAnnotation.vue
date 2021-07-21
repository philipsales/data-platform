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
      <aside class="aside" >
        <router-view
          name="sidebar"
          class="sidebar-standard" :contents="sidebarContent"></router-view>
      </aside>
      <main>
        <router-view name="default"></router-view>
      </main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ClinicalAnnotation',
  data() {
    return {
      drawer: true,
      items: [
        { title: 'Project', icon: 'mdi-home-city' },
      ],
      mini: true,
      sidebarContent: {
        title: {
          description: 'Clinical Annotation',
          icon: 'mdi-pencil-box-multiple',
          link: 'ClinicalAnnotation',
        },
        items: [
          {
            title: 'Project',
            icon: 'mdi-home-city',
            link: 'ProjectList',
          },
          {
            title: 'Review',
            icon: 'mdi-clipboard-list-outline',
            link: 'ReviewList',
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
.sidebar-standard {
  background-color: red;
}
</style>
