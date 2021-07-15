<template>
  <div>
    <v-col cols="2" style="background-color: gree">
        <h3 class="font-weight-bold mb-2">
        <go-back-button></go-back-button>
        <!-- <router-link class="nav-link" :to="{name: 'VocabularyList'}" exact>
          <go-back> </go-back>
        </router-link> -->
        &nbsp; {{headerTitle}}
        </h3>
    </v-col>
  </div>
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
.go-back {
  display: flex;
  cursor: pointer;
}
button {
  border: 0;
}
</style>
