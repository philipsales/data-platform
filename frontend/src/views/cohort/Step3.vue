       <v-stepper-content step="2">
            <v-row class="" style="min-height: 300px">
              <v-col cols="12" style="background-color: gree">
                <div>
                  <v-row align="center" style="margin-left: 20px;">
                    <v-layout child-flex>
                      <v-data-table
                        :headers="reportContent.headers"
                        :items="reportContent.rows"
                        :items-per-page="5"
                        class="elevation-1">
                        <template v-slot:item.action="{ item }">
                          <v-btn color="blue darken-1"
                            v-model="item.action"
                            text>Generate</v-btn>
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
              color="primary continue-button"
              class="mr-4"
              @click="e1 = 3">
              Continue
            </v-btn>
            <v-btn text
              color="primary continue-button"
              class="mr-4"
              @click="e1 = 2">
              Back
            </v-btn>
          </v-stepper-content>