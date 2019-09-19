<template>
  <div class="projects">
    <h1 class="title grey--text">Projects</h1>
     <v-container class="my-5">
        <v-expansion-panels>
          <v-expansion-panel
            v-for="project in myProjects"
              :key="project.title"
          >
            <v-expansion-panel-header>{{project.person}}</v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-card>
                <v-card-text class="px-4 grey--text">
                    <div class="font-weight-bold">
                      due by xx.xx.xx
                    </div>
                    <div>
                      {{project.content}}
                    </div>
                </v-card-text>
              </v-card>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
        
    </v-container>
  </div>
</template>

<script>
import db from '@/fb';

export default {
  data(){
    return {
       projects: []
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project => {
        return project.person === 'The Net Ninja';
      })
    }
  },
  
  created() {
      db.collection('projects').onSnapshot(res => {//callback function for every time a document is added
        const changes = res.docChanges();

        changes.forEach(change => {//looping thorugh each changes in the data base
            if (change.type === 'added') {
              this.projects.push({
                ...change.doc.data(),//pushing the document's data to projects array
                id : change.doc.id()//pushing the documents id to the array too
              })
            }
        });
      })
  }
};
</script>
