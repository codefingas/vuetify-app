<template>
  <div class="dashboard">
    <h1 class="title grey--text">Dashboard</h1>

     <v-container class="my-5">
       <v-layout row class="mb-3">
          <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
                <v-icon left small>mdi-folder</v-icon>
                <span class="caption text-lowercase">By project name</span>
              </v-btn>
          </template>
          <span>sort project by project name</span>
         </v-tooltip>

          <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
                <v-icon left small>mdi-folder</v-icon>
                <span class="caption text-lowercase">By person</span>
              </v-btn>
          </template>
          <span>sort project by project person</span>
         </v-tooltip>
       </v-layout>

        <v-card v-for="project in projects" :key="project.title">
           <v-layout row wrap v-bind:class="`item pa-3 project ${project.status}`">
                <v-flex xs12 md6>
                  <div class="ml-5 pa-3">
                     <div class="caption grey--text">
                      Project Title
                    </div>
                    <div>
                      {{project.title}}
                    </div>
                  </div>
                </v-flex>

                <v-flex xs12 sm4 md2>
                  <div class="caption grey--text">
                  Person
                  </div>
                  <div>
                    {{project.person}}
                  </div>
                </v-flex>

                 <v-flex xs12 sm4 md2>
                  <div class="caption grey--text">
                      Due by
                  </div>
                  <div>
                    {{project.due}}
                  </div>
                </v-flex>

                 <v-flex xs12 sm4 md2>
                   <div class="right">
                      <v-chip small v-bind:class="`${project.status} caption my-2 white--text mr-3`">
                        {{project.status}}
                      </v-chip>
                   </div>
                </v-flex>
             </v-layout>
        </v-card>
    </v-container>
  </div>
</template>

<script>

export default {
  data() {
    return {
      projects: [
        {title: 'Design a new Website', person: 'Chun Li', due: '1st Jan 2019', status: 'ongoing'},
        {title: 'Code up the Homepage', person: 'The Net Ninja', due: '10th Jan 2019', status: 'completed'},
        {title: 'Design Video thumbnails', person: 'Gouken', due: '20th Dec 2018', status: 'completed'},
        {title: 'Create a community forum', person: 'Ryu', due: '20th Oct 2018', status: 'overdue'}
      ]
    }
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  }
};
</script>

<style scoped>
  .item {
    /* this will remove the margin left in the rows */
    margin-left: 0 !important;
  }
</style>

<style>
.project.completed {
    border-left: 4px solid #3cd1c2 !important;
  }

  .project.ongoing {
    border-left: 4px solid orange !important;
  }

  .project.overdue {
    border-left: 4px solid tomato !important;
  }

  .v-chip.completed {
    background: #3cd1c2 !important;
  }

  .v-chip.ongoing{
    background: #ffaa2c !important;
  }

  .v-chip.overdue{
    background: #f83e70 !important;
  }

  .right {
    text-align: right !important; 
  }
</style>