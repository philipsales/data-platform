<template>
  <v-app class="container">
    <HeaderApp/>
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
.route-enter-from {
  opacity: 0;
  transform: translateY(-30px);
}

.route-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.route-enter-active {
  transition: all 0.3s ease-out;
}

.route-leave-active {
  transition: all 0.3s ease-in;
}

.route-enter-to,
.route-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
