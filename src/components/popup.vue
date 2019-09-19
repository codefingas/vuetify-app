<template>
   <v-dialog max-width="600px" v-model="dialogShowing">
        <template v-slot:activator="{ on }">
                <v-btn
                    class="success"
                dark
                v-on="on"
                >
                Add a project
                </v-btn>
      </template>


       <v-card>
           <v-card-title>
               <h2>Add a project</h2>
           </v-card-title>
           <v-card-text>
               <v-form ref="addProjectForm">
                     <v-text-field v-model="title" label="Title" prepend-icon="mdi-folder" v-bind:rules="inputRules"></v-text-field>
                    <v-textarea v-model="information" label="Description" prepend-icon="mdi-grease-pencil" v-bind:rules="inputRules"></v-textarea>
                        <v-menu>
                        <template v-slot:activator="{ on }">
                            <v-text-field v-on="on" v-bind:value="due" label="Due date" prepend-icon="mdi-calendar" v-bind:rules="inputRules"></v-text-field>
                        </template>
                            <v-date-picker v-model="due"></v-date-picker>
                        </v-menu> 

                    <v-btn @click="addProject" class="success mx-0" :loading="loading">add project</v-btn>
               </v-form>
           </v-card-text>
       </v-card>
   </v-dialog>
</template>


<script>
import dateFormatter from 'date-fns/format';
import db from '@/fb';

export default {
    data() {
        return {
            title: '',
            information: '',
            due: null,
            inputRules: [
                v => v.length >= 3 || 'Maximum length is 3'
            ],
            loading : false,
            dialogShowing : false
        }
    },
    methods: {
        addProject(){
            if(this.$refs.addProjectForm.validate()){//checking if the form is valid
                console.log(this.title, this.information, this.due);
                this.loading = true;//showing loading animation from button when item is added to database
                
            const project = {
                title : this.title,
                content : this.information,
                due : this.due,
                status: 'Ongoing',
                person: 'Doro'
            };

            db.collection('projects').add(project).then(() => {
                console.log('New project added');
                this.loading = false;//removing loading animation from button when item is added to database
                this.dialogShowing = false;//closing the dialog when project has been added to database
                
            })

            }

        }
    },
    computed: {
        formattedDate(){
                return this.due ? dateFormatter(this.due, 'Do MMM YYYY') : '';
        }
    }
}
</script>