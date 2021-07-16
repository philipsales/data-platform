<template>
  <div class="terminology-page">
  <go-back-header :headerTitle="headerTitle"></go-back-header>

    <v-row class="" style="min-height: 400px">
      <v-col cols="6" style="background-color: gree">
        <div style="background: red">
          <v-row align="center">
            <v-col
              class="d-flex"
              cols="12"
              sm="6">
              <v-select
                :items="vocabularies"
                :model="vocabularies"
                name="label"
                item-text="label"
                label="Domain">
              </v-select>
            </v-col>
            <v-col
              class="d-flex"
              cols="12"
              sm="6">
            <v-text-field
              prepend-inner-icon="mdi-magnify"
              single-line
              label="Valuset"
              class="d-flex">
              required></v-text-field>
            </v-col>
            </v-row>
        </div>
      </v-col>
      <v-col cols="6" style="background-color: blu">
        <div style="background: red">
          <v-card
            color="lighten-1"
            class="mb-12"
            height="200px">
          </v-card>
        </div>
      </v-col>
    </v-row>
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
      search: '',
      headerTitle: 'Create Valueset',
      vocabularies: [
        { label: 'RxNorm', value: 'rxnorm' },
        { label: 'ICD10 CM', value: 'icd10cm' },
        { label: 'SNOMED CT', value: 'snomedct' },
        { label: 'LOINC', value: 'loinc' },
      ],
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
