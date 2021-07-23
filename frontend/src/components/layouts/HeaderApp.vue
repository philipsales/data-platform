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
    <v-navigation-drawer
        v-model="drawer"
        fixed
        class="main-drawer"
        :style="{ top: $vuetify.application.top + 'px', zIndex: 4, width: 293 }"
        height="140%"
        >
      <v-list >
        <v-list-item
          class="app-list-item"
          v-for="item in items"
          :key="item.title"
          @click.stop="drawer = !drawer"
          :to="{name: item.link}"
          exact
          link>
          <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
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
  method: {
    foo() {
      console.log('foo');
    },
  },
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
        {
          title: 'Access Management',
          icon: 'mdi-shield-account',
          link: 'UserList',
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
.app-list-item {
  padding: 0 21px;
  height: 20px;
}
.main-drawer {
  width: 293px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  vertical-align: middle;
}
</style>
