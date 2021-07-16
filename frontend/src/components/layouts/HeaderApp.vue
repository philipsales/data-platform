<template>
  <div>
    <v-app-bar
      app
      clipped-left
      color="#009e99"
      class="main-app-bar"
      dark
      dense
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <router-link class="nav-link" :to="{name: 'HomePage'}" exact>
        <strong> Medcheck Data Platform </strong>
        </router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest"
          target="_blank"
          text>
          <span class="mr-2">Account</span>
          <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-overlay :value="drawer" z-index="4"> </v-overlay>
    <v-navigation-drawer v-model="drawer"
        fixed
        :style="{ top: $vuetify.application.top + 'px', zIndex: 6 }"
        >
      <v-list dense>
        <v-list-item
          v-for="item in items"
          :key="item.title"
          @click.stop="drawer = !drawer"
          link>
        <router-link class="nav-link" :to="{name: item.link}" exact>
          <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
// import HelloWorld from './views/HomePage.vue';

export default {
  // name: 'AppHeader',
  name: 'HeaderApp',
  // components: {
  // HelloWorld,
  // },
  data() {
    return {
      drawer: false,
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
};
</script>
<style>

</style>

<style scoped>
.main-app-bar {
  height: 648px;
  background-color: #009e99;
}
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
