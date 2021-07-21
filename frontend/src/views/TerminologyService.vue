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
        <router-view name="sidebar" :contents="sidebarContent"></router-view>
      </aside>
      <main>
        <router-view name="default"></router-view>
      </main>
    </div>

  </div>
</template>

<script>
export default {
  name: 'TerminologyService',
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

}
.aside {
  background-color: grey;
}
</style>
