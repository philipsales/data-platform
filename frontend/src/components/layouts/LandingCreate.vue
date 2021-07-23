<template>
  <v-row class="create-header">
    <v-col
      sm="2"
      md="1"
      xl="1"
      class="create-title"
    >
      <h3>
        {{contents.pageTitle}}
      </h3>
    </v-col>
    <div v-for="(content, index) in contents.commands" :key="index">
    <v-col>
        <v-btn text class="generic-create-button">
          <router-link
            class="create-link"
            :to="{name: content.link}"
          >
          <h4>
          <v-icon>{{content.icon}}</v-icon>
          {{content.buttonName}}
          </h4>
          </router-link>
        </v-btn>
    </v-col>
    </div>
  </v-row>
</template>

<script>
export default {
  name: 'LandingCreate',
  props: {
    contents: {
      pageTitle: String,
      commands: [{
        name: String,
        link: String,
        buttonName: String,
      }],
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
  width: 120%;
}
.create-button {
  color: white;
  margin-top: -3px;
  border: none;
  background: none;
  padding-top: 20px;
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
.generic-create-button {
  color: #009e99;
  margin-top: -3px;
  border: none;
  background: none;
  padding-top: 20px;
  outline: none;
  letter-spacing: 0;
}
.create-permission-button {
  color: #009e99;
  margin-top: -3px;
  border: none;
  background: none;
  padding-top: 20px;
  outline: none;
  letter-spacing: 0;
}
</style>
