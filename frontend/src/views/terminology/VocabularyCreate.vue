<template>
  <div class="terminology-page">
      <v-col cols="2" style="background-color: gree">
        <h3 class="font-weight-bold mb-2">
        <router-link class="nav-link" :to="{name: 'VocabularyList'}" exact>
          <go-back> </go-back>
        </router-link>
          &nbsp; Create Vocabulary
        </h3>
      </v-col>
    <v-divider></v-divider>
<v-card>
    <v-tabs vertical>
      <v-tab>
        <v-icon left>
          mdi-lock
        </v-icon>
        ElasticSearch Server
      </v-tab>
      <!-- <v-tab style="d-flex: left; ">
        <v-icon left>
          mdi-account
        </v-icon>
        Postgres Server
      </v-tab>
      <v-tab>
        <v-icon left>
          mdi-access-point
        </v-icon>
        Grpah Database Server
      </v-tab> -->

      <v-tab-item>
        <v-card flat>
          <v-card-text>
           <form>
            <v-text-field
              v-model="name"
              :error-messages="nameErrors"
              :counter="10"
              label="Vocabulary Name"
              required
              @input="$v.name.$touch()"
              @blur="$v.name.$touch()"
            ></v-text-field>
            <v-text-field
              v-model="indexName"
              :error-messages="nameErrors"
              :counter="10"
              label="Index Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="semanticVersion"
              :error-messages="nameErrors"
              :counter="10"
              label="Semantic Name"
              required
            ></v-text-field>
            <v-text-field
              v-model="schema"
              :error-messages="nameErrors"
              :counter="10"
              label="Google Drive Schema URL"
              required
            ></v-text-field>
            <v-text-field
              v-model="datasource"
              :error-messages="nameErrors"
              :counter="10"
              label="Google Drive Datasource URL"
              required
            ></v-text-field>
            <v-text-field
              v-model="datasource"
              :error-messages="nameErrors"
              :counter="10"
              label="Destination URL"
              required
            ></v-text-field>
            <v-btn
              class="mr-4"
              @click="submit"
            >
              submit
            </v-btn>
            <v-btn @click="clear">
              clear
            </v-btn>
            </form>
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
import GoBack from '../../components/ui/GoBackButton.vue';

export default {
  name: 'VocabularyCreate',
  components: {
    'go-back': GoBack,
  },
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
