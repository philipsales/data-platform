<template>
 <v-app-bar
      class="subheader-app-bar"
      app
      color="white"
      dense
      flat
      style="margin-top: 48px; z-index: 2; "
    >
    <v-toolbar-title class="create-title" >
      <h5>
        {{contents.pageTitle}}
      </h5>
    </v-toolbar-title>
    <div v-for="(content, index) in contents.commands" :key="index" >
        <v-btn text color="primary" class="generic-create-button">
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
    </div>
 </v-app-bar>
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
.subheader-app-bar {
  padding-left: 80px;
  border-bottom: 1px  solid #E0E0E0 !important;;
}

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
  padding-right: 20px;
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
