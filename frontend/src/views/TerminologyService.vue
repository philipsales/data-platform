<template>
  <v-container fluid class="pa-0 ma-0">
  <br> <br> <br> <br> <br>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar" :contents="sidebarContent"></router-view>
      </aside>
      <main>
        <router-view name="default"></router-view>
      </main>
    </div>
  </v-container>
</template>

<script>
export default {
  name: 'TerminologyService',
  components: {
  },
  data() {
    return {
      drawer: true,
      // mini: true,
      sidebarContent: {
        title: {
          description: 'Terminology Service',
          icon: 'mdi-database',
          link: 'TerminologyService',
        },
        items: [
          {
            title: 'Vocabulary',
            icon: 'mdi-home-city',
            link: 'VocabularyList',
          },
          {
            title: 'Valueset',
            icon: 'mdi-account',
            link: 'ValuesetList',
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
.terminology-page {
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

}
.aside {
  background-color: grey;
}
</style>
