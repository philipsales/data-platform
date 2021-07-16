<template>
  <div class="terminology-page">
  <go-back-header :headerTitle="headerTitle"></go-back-header>
    <v-row class="" style="min-height: 600px">
      <v-col cols="6" style="background-color: geen">
        <div style="background: re">
          <v-row >
            <v-col
              class="d-flex"
              cols="12"
              sm="6">
            <v-text-field
              prepend-inner-icon="mdi-magnify"
              single-line
              label="Type to Search"
              outlined
              class="rounded-r-0 rounded-l-md d-flex"
              required></v-text-field>
            </v-col>
            <v-col
              class="d-flex"
              cols="12"
              style="margin-left: -25px"
              sm="4">
              <v-select
                class="rounded-l-0 rounded-r-md"
                :items="vocabularies"
                :model="vocabularies"
                name="label"
                item-text="label"
                outlined
                label="Domain">
              </v-select>
            </v-col>
          </v-row>
        </div>
      </v-col>
      <v-divider vertical inset></v-divider>
      <v-col cols="6" style="background-color: blu">
        <div style="background: re">
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
      cards: [
        { title: 'Pre-fab homes', src: 'https://cdn.vuetifyjs.com/images/cards/house.jpg', flex: 12 },
        { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },
        { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },
      ],
      subsetContent: {
        headers: [
          {
            text: 'Drug Code',
            align: 'start',
            sortable: false,
            value: 'drugCode',
          },
          { text: 'Drug Code Type', value: 'drugCodeType' },
          { text: 'Description', value: 'description' },
          { text: 'Preferred Name', value: 'preferredName' },
          { text: 'Brand Name', value: 'brandName' },
          { text: 'Generic Name', value: 'genericName' },
          { text: 'Strength', value: 'strength' },
          { text: 'Form', value: 'form' },
          { text: 'Route', value: 'route' },
          { text: 'Content', value: 'content' },
          { text: 'Dosage', value: 'dosage' },
          { text: 'Amount', value: 'amount' },
          { text: 'Batch expiration date', value: 'batchExpirationDate' },
          { text: 'Batch lot number', value: 'batchExpirationDate' },
          { text: 'Status', value: 'status' },
          { text: 'Reference URL', value: 'referenceURL' },
          { text: 'Reference Description', value: 'referenceDescription' },
          { text: 'Substance Category', value: 'substanceCategory' },
        ],
        rows: [
          {
            name: 'Cardiovascular Diseases',
          },
          {
            name: 'NSAIDS Medications',
          },
          {
            name: 'Kidney Disease',
          },
          {
            name: 'Diabetes Medications',
          },
          {
            name: 'Ulcer Medications',
          },
        ],
      },
    };
  },
};
</script>
<style scoped>
.terminology-page {
  width: 100%;
  background-color: ed;
  /* height: 1000px; */
}
.page-sidebar {
  z-index: 1;
  margin-top:10px;
}
</style>
