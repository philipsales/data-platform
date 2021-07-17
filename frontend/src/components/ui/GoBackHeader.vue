<template>
  <v-row class="back-header">
    <go-back-button></go-back-button>
    <h3 class="font-weight-bold"> &nbsp; &nbsp; &nbsp; {{headerTitle}} </h3>
  </v-row>
</template>

<script>
import GoBackButton from './GoBackButton.vue';

export default {
  name: 'GoBackHeader',
  components: {
    GoBackButton,
  },
  props: {
    headerTitle: String,
  },
  methods: {
    goBack() {
      return this.$router.go(-1);
    },
  },
};
</script>

<style scoped>
.back-header {
  height: 50px;
  margin: 1px 5px 10px 3px;
}
</style>
