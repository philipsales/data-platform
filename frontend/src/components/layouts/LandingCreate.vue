<template>
  <v-row class="create-header">
    <v-col
      sm="2"
      md="1"
      xl="1"
      class="create-title"
    >
      <h3>
        {{content.name}}
      </h3>
    </v-col>
    <v-col>
      <v-btn text class="create-button">
        <router-link
          class="create-link"
          :to="{name: content.link}" exact
        >
        <h3>
        <v-icon>mdi-plus-box</v-icon>
        &nbsp; Create {{content.buttonName}}
        </h3>
        </router-link>
      </v-btn>
    </v-col>
  </v-row>
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

.create-header {
  height: 50px;
  margin-bottom: 20px;
  margin-left: 1px;
  background-color: pik;
  width: 100%;
}
.create-button {
  color: white;
  margin-top: -3px;
  border: none;
  background: none;
  outline: none;
  letter-spacing: 0;
}
.create-link {
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: flex;
  vertical-align: middle;
}
.create-title {
  margin-right: 30px;
}
</style>
