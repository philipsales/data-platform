<template>
  <div>
    <v-stepper v-model="e1">
    <v-stepper-header>
      <v-stepper-step
        :complete="e1 > 1"
        step="1">
       Configure Cohort
       <small>Define specific criteria</small>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step
        :complete="e1 > 2"
        step="2">
        Review Parameters
        <small>View criteria and concepts</small>
      </v-stepper-step>
      <v-divider></v-divider>
      <v-stepper-step
        step="3">
        Generate Data
        <small>Download or export reports</small>
      </v-stepper-step>
      <v-divider></v-divider>
    </v-stepper-header>

    <v-stepper-items>

      <!-- STEP 1: CONFIGURE COHORT  -->
      <v-stepper-content step="1">
        <v-row class="" style="min-height: 400px">
          <v-col cols="8" style="background-color: gree">
           <form>
            <v-container fluid>
              <h2 class="form-subheader">Cohort Name</h2>
                <v-row align="center">
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="11">
                  <v-text-field
                    label="Cohort Name"
                    class="d-flex">
                    required></v-text-field>
                  </v-col>
                </v-row>

              <h2 class="form-subheader">Dataset</h2>
                <v-row align="center">
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="11">
                    <v-select
                      v-model="value"
                      :items="dataSource"
                      attach
                      chips
                      label="Data Source"
                      multiple
                    ></v-select>
                  </v-col>
                </v-row>

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
                    sm="6">
                    <v-select
                      :items="domain"
                      label="Domain">
                    </v-select>
                  </v-col>
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="5">
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

              <h2 class="form-subheader">Outcome</h2>
                <v-row align="center">
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="7">
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

      <!-- STEP 2: REVEW PARAMETERS -->
      <v-stepper-content step="2">
        <!-- <v-card
          class="mb-12"
          color="grey lighten-1"
          height="500px">
          </v-card> -->
        <v-row class="" style="min-height: 300px">
          <v-col cols="7" style="background-color: reen">
            <h2 class="form-subheader">Cohort Definitions</h2>
            <br>
            <h4>Cohort Name: Cardiovascular Disease takings NSAIDS with Kidney Disease</h4>
            <div class="query-result">
            <br>
              People may enter the cohort when observing any of the following:
            <ul>
              <li>Male</li>
              <li>15 to 60 years old</li>
              <li>have occurrence of Cardiovascular disease</li>
              <li>
              have at least 1 drug exposure of NSAID medications
              </li>
              <li>
              have no drug exposure of Ulcer Medications
              </li>
              <li>
              have at least 1 condition occurrence of Kidney Disease
              </li>
            </ul>
            </div>

          </v-col>
           <v-col cols="5" style="background-color: ed">
            <h2 class="form-subheader">Concept Subsets</h2>
            <br>
            <div>
              <v-row align="center" justify="left" style="margin-left: 20px;">
                <v-layout child-flex>
                <v-data-table
                  :headers="subsetContent.headers"
                  :items="subsetContent.rows"
                  :items-per-page="5"
                  class="elevation-1"
                ></v-data-table>
                </v-layout>
              </v-row>
            </div>
          </v-col>
        </v-row>
        <!-- <v-row class="" style="min-height: 300px">
          <v-col cols="12" style="background-color: lue">
            <h2 class="form-subheader">Subset Descendants</h2>
            <br>
            <div>
              <v-row align="center" justify="left" style="margin-left: 20px;">
                <v-layout child-flex>
                <v-data-table
                  :headers="valuesetContent.headers"
                  :items="valuesetContent.rows"
                  :items-per-page="5"
                  class="elevation-1"
                ></v-data-table>
                </v-layout>
              </v-row>
            </div>
          </v-col>
        </v-row> -->

        <br> <br>
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
        <!-- <v-card
          class="mb-12"
          color="grey lighten-1"
          height="200px">
        </v-card>  -->
        <v-row class="" style="min-height: 300px">
          <v-col cols="12" style="background-color: gree">
            <div>
              <v-row align="center" justify="center" style="margin-left: 20px;">
                <v-layout child-flex>
                  <v-data-table
                    :headers="reportContent.headers"
                    :items="reportContent.rows"
                    :items-per-page="5"
                    class="elevation-1">
                    <template v-slot:item.action="{ item }">
                      <v-btn color="blue darken-1"
                        v-model="item.action"
                        text @click="generateData">Generate</v-btn>
                    </template>
                    <template v-slot:item.status="{ item }">
                      <v-chip
                        :color="getColor(item.status)"
                        dark>
                        {{ item.status}}
                      </v-chip>
                    </template>
                  </v-data-table>
                </v-layout>
              </v-row>
            </div>
          </v-col>
        </v-row>

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
  name: 'SubsetCreate',
  data() {
    return {
      drawer: true,
      mini: true,
      e1: 1,
      statusColor: 'red',
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
      dataSource: [
        'The Medical City',
        'Keralty',
        'Medcheck',
      ],
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
      subsetContent: {
        headers: [
          {
            text: 'Subset Name',
            align: 'start',
            sortable: false,
            value: 'name',
          },
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
      valuesetContent: {
        headers: [
          {
            text: 'ID',
            align: 'start',
            sortable: false,
            value: 'conceptId',
          },
          { text: 'Code', value: 'conceptCode' },
          { text: 'Name', value: 'conceptName' },
          { text: 'Class', value: 'class' },
          { text: 'Domain', value: 'domain' },
          { text: 'Vocabulary', value: 'vocabulary' },
        ],
        rows: [
          {
            conceptId: '213234',
            conceptCode: '344-2',
            conceptName: 'Transient Ischemic Attack',
            class: 'Clinical Finding',
            domain: 'Condition',
            vocabulary: 'ICD10 CM',
          },
          {
            conceptId: '213233',
            conceptCode: '344-3',
            conceptName: 'Heart Attack',
            class: 'Clinical Finding',
            domain: 'Condition',
            vocabulary: 'ICD10 CM',
          },
          {
            conceptId: '213235',
            conceptCode: '344-4',
            conceptName: 'Heart Muscle Disease',
            class: 'Clinical Finding',
            domain: 'Condition',
            vocabulary: 'ICD10 CM',
          },
        ],
      },
      reportContent: {
        headers: [
          {
            text: 'Action',
            value: 'action',
            align: '',
          },
          { text: 'Data Source', value: 'source' },
          { text: 'Number of Patients', value: 'totalPatients' },
          { text: 'Number of Records', value: 'totalRecords' },
          { text: 'Date Generated', value: 'dateGenerated' },
          { text: 'Generation Status', value: 'status' },
        ],
        rows: [
          {
            action: true,
            name: 'Cardiovascular Diseases',
            source: 'The Medical City',
            totalPatients: '400,000',
            totalRecords: '1,800,000',
            dateGenerated: '2021-06-15 06:00:30',
            status: 'COMPLETE',
          },
          {
            action: true,
            name: 'Cardiovascular Diseases',
            source: 'Medcheck',
            totalPatients: '100,000',
            totalRecords: '300,000',
            dateGenerated: '',
            status: 'INCOMPLETE',
          },
          {
            action: true,
            name: 'Cardiovascular Diseases',
            source: 'Keralty',
            totalPatients: '10,000',
            totalRecords: '200,000',
            dateGenerated: '',
            status: 'IN PROGRESS',
          },
        ],
      },
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
    getColor(status) {
      if (status === 'INCOMPLETE') {
        this.statusColor = 'red';
      } else if (status === 'IN PROGRESS') {
        this.statusColor = 'orange';
      } else {
        this.statusColor = 'green';
      }
      return this.statusColor;
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
