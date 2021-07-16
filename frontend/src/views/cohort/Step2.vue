   <!-- STEP 2: REVEW PARAMETERS -->
           <v-stepper-content step="2">
            <v-row class="" style="background-color: re" >
              <v-col
                cols="8"
                class="cohort-criteria-group"
                style="background-color: gxreen"
              >
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

                <!-- Query Result -->
              <v-divider vertical inset></v-divider>
              <v-col
                cols="4"
                class="query-result-group"
              >
              <h2 class="form-subheader">Concept Subsets</h2>
                <v-row align="center" style="margin-left: 20px;">
                  <v-layout child-flex>
                  <v-data-table
                    :headers="subsetContent.headers"
                    :items="subsetContent.rows"
                    :items-per-page="5"
                    class="elevation-1"
                  ></v-data-table>
                  </v-layout>
                </v-row>
              </v-col>
            </v-row>
             <v-btn
              color="continue-button primary"
              class="mr-4"
              @click="e1 = 2">
              Continue
            </v-btn>
             <v-btn
              color="continue-button"
              class="mr-4"
              @click="e1 = 1">
              Back
            </v-btn>
          </v-stepper-content>