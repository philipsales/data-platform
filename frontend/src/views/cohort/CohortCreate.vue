<template>
  <div class="terminology-page">
      <v-col cols="2" style="background-color: gree">
        <h3 class="font-weight-bold mb-2">
        <router-link class="nav-link" :to="{name: 'VocabularyMain'}" exact>
          <v-icon>mdi-arrow-left</v-icon>
        </router-link>
          &nbsp; Create Vocabulary
        </h3>
      </v-col>
    <v-divider></v-divider>
<v-card>
    <v-tabs vertical>
      <v-tab class="d-flex algin-start">
        <v-icon left>
          mdi-account
        </v-icon>
        Create1
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-lock
        </v-icon>
        Option 2
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-access-point
        </v-icon>
        Option 3
      </v-tab>

      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Sed aliquam ultrices mauris.
            </p>
            <p>
              Nam ipsum risus, rutrum vitae,
            </p>
            <p class="mb-0">
              Phasellus dolor. Fusce neque. Fusce fermentum odio
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Morbi nec metus.
            </p>
            <p>
              Suspendisse feugiat.
            </p>
            <p>
              Sed consequat,
            </p>
            <p>
              Etiam ut purus mattis mauris
            </p>
            <p class="mb-0">
              Donec venenatis vulputate lorem.
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
      <v-tab-item>
        <v-card flat>
          <v-card-text>
            <p>
              Fusce a quam. Phasellus nec
            </p>
            <p class="mb-0">
              Cras sagittis. Phasellus nec
            </p>
          </v-card-text>
        </v-card>
      </v-tab-item>
    </v-tabs>
  </v-card>
  </div>
</template>

<script>
export default {
  name: 'VocabularyCreate',
  data() {
    return {
      drawer: true,
      mini: true,
      headers: [
        {
          text: 'Index',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'Index name', value: 'indexName' },
        { text: 'version', value: 'version' },
        { text: 'Environment', value: 'environment' },
        { text: 'Status', value: 'status' },
        { text: 'Date Created', value: 'dateCreated' },
        { text: 'Storage', value: 'storage' },
        { text: 'URL', value: 'url' },
      ],
      vocabularies: [
        {
          name: 'Medication List',
          indexName: 'medication-2021.v5.0.0',
          version: 'v5.0.0',
          environment: 'production',
          status: 'active',
          dateCreated: '2021-06-15',
          storage: 'ElasticSearch',
          url: 'https://34.87.79.18:9200/dev.medication-2021.v5.0.0',
        },
        {
          name: 'Diagnosis List',
          indexName: 'diagnosis-2021.v5.0.0',
          version: 'v5.0.0',
          environment: 'production',
          status: 'active',
          dateCreated: '2021-06-15',
          storage: 'ElasticSearch',
          url: 'https://34.87.79.18:9200/diagnosis-2021.v5.0.0',
        },
        {
          name: 'Procedure List',
          indexName: 'procedure-2021.v5.0.0',
          version: 'v5.0.0',
          environment: 'production',
          status: 'active',
          dateCreated: '2021-06-15',
          storage: 'ElasticSearch',
          url: 'https://34.87.79.18:9200/dev.medication-2021.v5.0.0',
        },
        {
          name: 'Problem or Complaint List',
          indexName: 'problem-2021.v5.0.0',
          version: 'v5.0.0',
          environment: 'production',
          status: 'active',
          dateCreated: '2021-06-15',
          storage: 'ElasticSearch',
          url: 'https://34.87.79.18:9200/dev.medication-2021.v5.0.0',
        },
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
.page-label {
  position: left;
}
.nav-link {
  text-decoration: none;
}
</style>
