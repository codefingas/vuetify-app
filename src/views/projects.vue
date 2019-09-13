<template>
  <div class="projects">
    <h1 class="title grey--text">Projects</h1>
     <v-container class="my-5">
        <v-expansion-panel>
          <v-expansion-panel-content v-for="project in myProjects " :key="project.title">
            <div slot="header">{{Project.content}}</div>
            <v-card>
              <v-card-text class="px-4 grey--text">
                <div class="font-weight-bold">
                  due by {{project.due}}
                </div>
                <div>{{project.content}}</div>
              </v-card-text>
            </v-card>
          </v-expansion-panel-content>
        </v-expansion-panel>
        
    </v-container>
  </div>
</template>

<script>

export default {
  data(){
    return {
       projects: [
        {title: 'Design a new Website', person: 'Chun Li', due: '1st Jan 2019', status: 'ongoing', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum dolor suscipit, id, et ipsam, consequuntur ut inventore veniam sapiente ex assumenda sit amet. Magnam doloremque accusamus ipsum iste, iusto perferendis!'},
        {title: 'Code up the Homepage', person: 'The Net Ninja', due: '10th Jan 2019', status: 'completed', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum dolor suscipit, id, et ipsam, consequuntur ut inventore veniam sapiente ex assumenda sit amet. Magnam doloremque accusamus ipsum iste, iusto perferendis!'},
        {title: 'Design Video thumbnails', person: 'Gouken', due: '20th Dec 2018', status: 'completed',content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum dolor suscipit, id, et ipsam, consequuntur ut inventore veniam sapiente ex assumenda sit amet. Magnam doloremque accusamus ipsum iste, iusto perferendis!' },
        {title: 'Create a community forum', person: 'Ryu', due: '20th Oct 2018', status: 'overdue', content: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum dolor suscipit, id, et ipsam, consequuntur ut inventore veniam sapiente ex assumenda sit amet. Magnam doloremque accusamus ipsum iste, iusto perferendis!'}
      ]
    }
  },
  computed: {
    myProjects() {
      return this.projects.filter(project=> {
        return project.person === 'The Net Ninja';
      })
    }
  }
};
</script>
