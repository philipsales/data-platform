<template>
  <div>
    <v-row class="text-center" >
      <v-col cols="1" style="background-color: gree">
          <h3 class="font-weight-bold mb-2">
            {{content.name}}
          </h3>
      </v-col>
      <v-col cols="9" class="d-flex algin-start mb-1" style="background-color: re">
        <v-btn tile color="white" style="margin-top: -5px;
          border: none; background: none; outline: none; letter-spacing: 0">
          <router-link class="nav-link" :to="{name: content.link}" exact>
          <h3 class="font-weight-bold">
          <v-icon>mdi-plus-box</v-icon>
          &nbsp; Create {{content.buttonName}}
          </h3>
          </router-link>
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: 'LandingCreate',
  props: {
    content: {
      name: String,
      link: String,
      buttonName: String,
    },
  },
  data() {
    return {
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
.page-label {
  position: left;
}
.nav-link {
  text-decoration: none;
  color: inherit;
  display: flex;
  vertical-align: middle;
}
</style>
