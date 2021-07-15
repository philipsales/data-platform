<template>
  <div class="terminology-page">
    <go-back-header :headerTitle="headerTitle"></go-back-header>
  <v-stepper
    v-model="e6"
    vertical>
    <v-stepper-step
      :complete="e6 > 1"
      step="1">
      Configure Cohort
      <small>Create cohort criteria</small>
    </v-stepper-step>

    <v-stepper-content step="1">
      <v-btn
        color="primary"
        @click="e6 = 2">
        Continue
      </v-btn>
      <v-btn text>
        Cancel
      </v-btn>
    </v-stepper-content>

  </v-stepper>
    <div style="background: red">
      <v-card
        color="grey lighten-1"
        class="mb-12"
        height="200px">
        <h1>Hello world</h1>
      </v-card>
    </div>
  </div>
</template>

<script>
import GoBackHeader from '../../components/ui/GoBackHeader.vue';

export default {
  name: 'ValuesetCreate',
  components: {
    GoBackHeader,
  },
  data() {
    return {
      drawer: true,
      mini: true,
      headerTitle: 'Create Valueset',
      e6: 1,
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
</style>
