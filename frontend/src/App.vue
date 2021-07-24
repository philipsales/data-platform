<template>
  <v-app>
    <header-app></header-app>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import HeaderApp from './components/layouts/HeaderApp.vue';

export default {
  name: 'App',
  components: {
    HeaderApp,
  },
  data() {
    return {
    };
  },
};
</script>
<style>
.main-container {
  background: blue;
  color: blue;
}
.generic-table-page {
  width: 103%;
  background-color: bluxe;
  margin-top: -70px;
  /* height: 1000px; */
}
.generic-container {
  min-width: 100%;
}
.aside {
  width: 69px;
}
.dynamic-delete-button {
  margin-top: -30px;
  cursor: pointer;
}
.generic-create-button {
  color: #009e99;
  margin-top: -3px;
  border: none;
  background: none;
  padding-top: 20px;
  outline: none;
  letter-spacing: 0;
}
.linkable {
  text-decoration: none;
  color: inherit;
  display: flex;
  vertical-align: middle;
}
</style>

<style scoped>

</style>
