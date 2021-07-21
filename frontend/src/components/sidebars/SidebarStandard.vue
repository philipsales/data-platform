<template>
  <div class="">
    <v-navigation-drawer v-model="drawer"
      :mini-variant.sync="mini"
      fixed
      expand-on-hover
      permanent
      class="sidebar"
      height="120%"
    >
      <v-list>
        <v-list-item> </v-list-item>
        <v-list-item class="first-list-item">
          <router-link class="nav-link" :to="{name: content.title.link}" exact>
            <v-list-item-icon>
              <v-icon large> {{content.title.icon}} </v-icon>
            </v-list-item-icon>
            <v-list-item-content
              class="first-list-content"
            >
              <v-list-item-title>
                {{content.title.description}}
              </v-list-item-title>
            </v-list-item-content>
          </router-link>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item
          dense
          class="next-list-item"
          v-for="item in content.items"
          :key="item.title"
          link>
            <router-link class="nav-link" :to="{name: item.link}" exact>
              <v-list-item-icon>
                <v-icon dense>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              <v-list-item-content
                class="next-list-content"
              >
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
.sidebar {
  z-index: 1;
  margin-top: -16px;
  min-width: 64px;
}
.first-list-item {
  padding-left: 15px;
  padding-top: 0px;
  margin-bottom: -12px;
}
.first-list-content {
  margin-left: -16px;
}
.next-list-item {
  padding-left: 21px;
}
.next-list-content {
  padding-top: 10px;
  margin-left: -10px;
}
.nav-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  vertical-align: middle;
}
</style>
