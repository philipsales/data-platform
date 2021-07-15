<template>
  <div>
    <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        @click="e1 = 1"
        step="1">
       Configure Cohort
       <small>Define specific criteria</small>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step
        :complete="e1 > 2"
        @click="e1 = 2"
        step="2">
        Review Parameters
        <small>View criteria and concepts</small>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step
        @click="e1 = 3"
        step="2">
        Generate Data
        <small>Download or export reports</small>
      </v-stepper-step>
      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>
      <v-stepper-content step="1">
        <v-row class="" style="min-height: 400px">
          <v-col cols="8" style="background-color: gree">
           <form>
            <v-container fluid>
              <h2 class="form-subheader">Cohort Name</h2>
                <v-text-field
                  label="Cohort Name"
                  class="d-flex"
                  cols="12"
                  required></v-text-field>
              <!-- <h2 class="form-subheader">Demographics</h2>
                <v-row align="center">
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="8">
                    <v-select
                      :items="domain"
                      label="Domain">
                    </v-select>
                  </v-col>
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="4">
                    <v-select
                      :items="subset"
                      label="Subset">
                    </v-select>
                    </v-col>
                  </v-row> -->
                <h2 class="form-subheader">Demographics</h2>
                <div v-for="(demographic, index) in demographics"
                  :key=index>
                  <v-row align="center">
                    <v-col
                      class="d-flex"
                      cols="12"
                      sm="5">
                      <v-select
                        :items="demographicOption"
                        :model="demographic.domain"
                        label="Option">
                      </v-select>
                    </v-col>
                    <v-col
                      class="d-flex"
                      cols="12"
                      sm="5">
                      <v-select
                        :model="demographic.subset"
                        label="Value">
                      </v-select>
                    </v-col>
                    <v-btn @click="removeMultipleField(index, refinements)">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-row>
                </div>
                <v-btn @click="addDemographics" class="primary">add</v-btn>

              <h2 class="form-subheader">Primary Criteria</h2>
                <v-row align="center">
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="8">
                    <v-select
                      :items="domain"
                      label="Domain">
                    </v-select>
                  </v-col>
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="4">
                    <v-select
                      :items="subset"
                      label="Subset">
                    </v-select>
                    </v-col>
                  </v-row>
                <h2 class="form-subheader">Refinements</h2>
                <div v-for="(refinement, index) in refinements"
                  :key=index>
                  <v-row align="center">
                    <v-col
                      class="d-flex"
                      cols="12"
                      sm="2">
                      <v-select
                        :items="criteriaOption"
                        :model="refinement.criteria"
                        label="Criteria">
                      </v-select>
                    </v-col>
                    <v-col
                      class="d-flex"
                      cols="12"
                      sm="4">
                      <v-select
                        :items="domain"
                        :model="refinement.domain"
                        label="Domain">
                      </v-select>
                    </v-col>
                    <v-col
                      class="d-flex"
                      cols="12"
                      sm="4">
                      <v-select
                        :items="subset"
                        :model="refinement.subset"
                        label="Subset">
                      </v-select>
                    </v-col>
                    <v-btn @click="removeMultipleField(index, refinements)">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-row>
                </div>
                <v-btn @click="addMultipleField" class="primary">add</v-btn>

                <!-- <h2 class="form-subheader">Refinement</h2>
                <div v-for="(textField, index) in textFields"
                  :key=index>
                  <v-row align="center">
                    <v-col
                      class="d-flex"
                      cols="12"
                      sm="2">
                      <v-select
                        :items="criteriaOption"
                        :model="textField.value"
                        label="Criteria"
                      ></v-select>
                    </v-col>
                    <v-btn @click="removeField(index)">
                      <v-icon>mdi-delete</v-icon>
                    </v-btn>
                  </v-row>
                </div>
                  <v-btn @click="addField" class="primary">add</v-btn> -->

                <!-- <h2 class="form-subheader">Refinement</h2>
                <v-row align="center">
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="2">
                    <v-select
                      :items="criteria"
                      label="Criteria"
                    ></v-select>
                  </v-col>
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="6">
                    <v-select
                      :items="domain"
                      label="Domain"
                    ></v-select>
                  </v-col>
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="4">
                    <v-select
                      :items="subset"
                      label="Subset"
                    ></v-select>
                  </v-col>
                </v-row> -->
              <h2 class="form-subheader">Outcome</h2>
                <v-row align="center">
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="8">
                    <v-select
                      :items="domain"
                      label="Domain">
                    </v-select>
                  </v-col>
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="4">
                    <v-select
                      :items="subset"
                      label="Subset">
                    </v-select>
                    </v-col>
                  </v-row>
              </v-container>
              <v-btn
                color="primary"
                class="mr-4"
                @click="e1 = 2">
                Continue
              </v-btn>
              <v-btn
                color="success"
                class="mr-4"
                >
                Run
              </v-btn>
              <v-btn
                class="mr-4"
                >
                Clear
              </v-btn>
            </form>
          </v-col>

            <!-- Query Result -->
          <v-divider vertical inset></v-divider>
            <v-col cols="4" style="background-color: ed">
              <h2 class="result-subheader">Query Result</h2>
              <div class="query-result">
                3,065,275 Total Patients
                800,00 have Cardiovascular Disease
                60,000 are taking NSAIDS Medication
                and not taking ULCER Medications
                3,000 have Kidney Disease
              </div>
            </v-col>
        </v-row>
      </v-stepper-content>

      <v-stepper-content step="2">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px"
        ></v-card>

        <v-btn
          color="primary"
          @click="e1 = 3">
          Continue
        </v-btn>
        <v-btn text
          @click="e1 = 1">
          Back
        </v-btn>

      </v-stepper-content>

      <v-stepper-content step="3">
        <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px">
        </v-card>

        <v-btn
          color="primary"
          @click="e1 = 3">
          Continue
        </v-btn>

        <v-btn text
          @click="e1 = 2">
          Back
        </v-btn>
      </v-stepper-content>
    </v-stepper-items>
  </v-stepper>
  </div>
</template>

<script>
export default {
  name: 'VocabularyCreate',
  data() {
    return {
      drawer: true,
      mini: true,
      e1: 1,
      criteriaOption: ['Include', 'Exclude'],
      demographicOption: ['Age', 'Sex'],
      textFields: [
        { value: '' },
      ],
      refinements: [{
        criteria: {
          value: '',
        },
        domain: {
          value: '',
        },
        subset: {
          value: '',
        },
      }],
      demographics: [{
        domain: {
          value: '',
        },
        subset: {
          value: '',
        },
      }],
      domain: [
        'Condition',
        'Medication',
        'Procedure',
        'Measurement',
        'Observation',
      ],
      subset: [
        'NSAIDS Medications',
        'Ulcer Medications',
      ],
    };
  },
  methods: {
    addField() {
      this.textFields.push({
        value: '',
      });
    },
    addDemographics() {
      this.demographics.push({
        domain: {
          value: '',
        },
        subset: {
          value: '',
        },
      });
    },
    addMultipleField() {
      this.refinements.push({
        criteria: {
          value: '',
        },
        domain: {
          value: '',
        },
        subset: {
          value: '',
        },
      });
      console.log(this.refinements);
    },
    removeField(index) {
      this.textFields.splice(index, 1);
    },
    removeMultipleField(index, refinements) {
      console.log(index);
      console.log(refinements);
      this.refinements.splice(index, 1);
    },
  },
};
</script>
<style scoped>
.form-subheader {
  text-align:left;
  margin-top: 30px;
  margin-bottom: 5px;
}
.result-subheader {
  text-align: center;
  margin-top: 30px;
  margin-bottom: 5px;
}
</style>
