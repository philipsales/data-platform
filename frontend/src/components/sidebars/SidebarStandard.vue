<template>
  <div class="">
    <v-navigation-drawer v-model="drawer"
      :mini-variant.sync="mini"
      fixed
      permanent
      expand-on-hover
      class="page-sidebar" >
      <v-list>
        <v-list-item> </v-list-item>
        <v-list-item>
          <router-link class="nav-link" :to="{name: content.title.link}" exact>
            <v-list-item-icon>
              <v-icon> {{content.title.icon}} </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                {{content.title.description}}
              </v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          v-for="item in content.items"
          :key="item.title"
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
export default {
  name: 'SidebarStandard',
  props: {
    content: {
      title: String,
      items: Array,
    },
  },
  data() {
    return {
      drawer: true,
      mini: true,
    };
  },
};
</script>
<style scoped>
.page-sidebar {
  z-index: 1;
  margin-top: -12px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  vertical-align: middle;
}
</style>
