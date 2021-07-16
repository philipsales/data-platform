 <v-stepper-content step="1">
            <v-row class="" style="background-color: re" >
              <v-col
                cols="8"
                class="cohort-criteria-group"
                style="background-color: gxreen"
              >
              <form>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6">
                  <v-text-field
                    label="Cohort Name"
                    outlined
                    dense
                    class="">
                    </v-text-field>
                  </v-col>
                  <v-col
                    class="d-flex"
                    cols="12"
                    sm="5">
                    <v-select
                      v-model="value"
                      :items="dataSource"
                      dense
                      outlined
                      attach
                      label="Data Source"
                      multiple
                    ></v-select>
                  </v-col>
                </v-row>

              <h3 class="form-subheader">Demographics</h3>
                  <div v-for="(demographic, index) in demographics"
                  :key=index>
                  <v-row align="center">
                    <v-col
                      class="d-flex"
                      cols="12"
                      sm="3">
                      <v-select
                          :items="demographicOption"
                          :model="demographic.domain"
                          dense
                          outlined
                          label="Option">
                        </v-select>
                      </v-col>
                      <v-col
                        class="d-flex"
                        cols="12"
                        sm="8">
                        <v-select
                          :model="demographic.subset"
                          dense
                          outlined
                          label="Value">
                        </v-select>
                      </v-col>
                      <v-text @click="removeMultipleField(index, refinements)">
                        <v-icon outlined dense>mdi-delete</v-icon>
                      </v-text>
                    </v-row>
                  </div>
                  <v-btn @click="addDemographics" class="add-button primary">add</v-btn>

                  <h3 class="form-subheader">Criteria</h3>
                    <div v-for="(refinement, index) in refinements"
                      :key=index>
                      <v-row align="center">
                        <v-col
                          class="d-flex"
                          cols="12"
                          sm="3">
                          <v-select
                            :items="criteriaOption"
                            :model="refinement.criteria"
                            outlined
                            dense
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
                            outlined
                            dense
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
                            outlined
                            dense
                            label="Subset">
                          </v-select>
                        </v-col>
                        <v-text @click="removeMultipleField(index, refinements)">
                          <v-icon outlined dense>mdi-delete</v-icon>
                        </v-text>
                      </v-row>
                    </div>
                    <v-btn @click="addMultipleField" class="add-button primary">add</v-btn>
                    <br>
                  <v-btn
                    color="continue-button primary"
                    class="mr-4"
                    @click="e1 = 2">
                    Continue
                  </v-btn>
              </form>
              </v-col>

                <!-- Query Result -->
              <v-divider vertical inset></v-divider>
              <v-col
                cols="4"
                class="query-result-group"
              >
                <v-btn
                  color="success"
                  class="mr-4"
                  >
                  Run
                </v-btn>
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