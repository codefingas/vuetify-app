<template>
   <v-dialog max-width="600px">
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
               <v-text-field v-model="title" label="Title" prepend-icon="mdi-folder"></v-text-field>
               <v-textarea v-model="information" label="Description" prepend-icon="mdi-grease-pencil"></v-textarea>
                <v-menu>
                   <template v-slot:activator="{ on }">
                    <v-text-field v-on="on" v-bind:value="due" label="Due date" prepend-icon="mdi-calendar"></v-text-field>
                    </template>
                    <v-date-picker v-model="due"></v-date-picker>
                </v-menu> 

               <v-btn @click="appProject" class="success mx-0">Add project</v-btn>
           </v-card-text>
       </v-card>
   </v-dialog>
</template>


<script>
import dateFormatter from 'date-fns/format';

export default {
    data() {
        return {
            title: '',
            information: '',
            due: null
        }
    },
    methods: {
        appProject(){
            console.log(this.title, this.information, this.due);
        }
    },
    computed: {
        formattedDate(){
                return this.due ? dateFormatter(this.due, 'Do MMM YYYY') : '';
        }
    }
}
</script>