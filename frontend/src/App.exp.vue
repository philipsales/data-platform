<template>
  <v-app class="container">
    <!-- <AppSidebar :drawer="drawer" @partSelected="setDrawer" /> -->
    <AppSidebar/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import AppSidebar from './components/sidebars/SidebarApp.vue';

export default {
  name: 'App',
  components: {
    AppSidebar,
  },
  data() {
    return {
      // drawer: false,
      items: [
        {
          title: 'Terminology Server',
          icon: 'mdi-database',
          link: 'TerminologyService',
        }, {
          title: 'Clinical Annotation',
          icon: 'mdi-pencil-box-multiple',
          link: 'ClinicalAnnotation',
        },
        {
          title: 'Cohort Builder',
          icon: 'mdi-account-multiple-check',
          link: 'CohortBuilder',
        },
      ],
      mini: true,
    };
  },
  computed: {
  },
};
</script>
<style>

</style>

<style scoped>
.home-sidebar {
  /* display: flex ; */
  overflow:hidden;
  background: aqua;
  margin-left: -80px;
}
.one {
  height: 800px;
  background: red;
  float: left;
}
.nav-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  vertical-align: middle;
}
</style>
