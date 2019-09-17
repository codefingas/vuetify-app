<template>
   <nav>
       <v-toolbar flat app>
               <v-app-bar-nav-icon  class="grey--text" v-on:click="drawer = !drawer"></v-app-bar-nav-icon>
           <v-toolbar-title class="text-uppercase grey--text  ">
 
               <span class="font-weight-light">
                   Todo
               </span>
               <span>Ninja</span>
           </v-toolbar-title>

            <v-spacer></v-spacer>

            <div class="text-center">
            <v-menu offset-y>
            <template v-slot:activator="{ on }">
                <v-btn
                dark
                v-on="on"
                text
                class="grey--text"
                >
                <v-icon left>mdi-chevron-down</v-icon>
                Menu 
                </v-btn>
            </template>
                    <v-list>
                        <v-list-item
                        v-for="(item, index) in dropdownLinks"
                        :key="index"
                        router :to="item.route"
                        >
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item>
            </v-list>
            </v-menu>
        </div>
           <v-btn text color="grey">
               <span>Sign Out</span>
               <v-icon right>mdi-exit-to-app</v-icon>
           </v-btn>                                                              
       </v-toolbar>

       <v-navigation-drawer app fixed temporary v-model="drawer" color="#9652ff">
           <v-layout column align-center>
               <v-flex class="mt-5">
                   <v-avatar size="100">
                       <img src="/avatar-1.png">
                   </v-avatar>
                   <p class="white--text subheading  mt-1">The Net Ninja</p>
               </v-flex>
           </v-layout>
          <v-list-item  v-for="link in links" :key="link.text" router :to="link.route" class="mt-2">
                <v-list-tile-action>
                    <v-icon class="white--text">
                        {{link.icon}}
                    </v-icon>
                </v-list-tile-action>
                <v-list-item-content>
                    <v-list-item-title class="white--text ml-2"> {{link.text}}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
           
       </v-navigation-drawer>
   </nav>
</template>

<script>
export default {
    data(){
        return{
             clipped: false,
            fixed: false,
            drawer : false,
            links : [
                {icon: 'mdi-view-dashboard', text: 'Dashboard', route: '/'},
                {icon: 'mdi-folder', text: 'My Projects', route: '/projects'},
                {icon: 'mdi-account-group', text: 'Team', route: '/account' }
            ],
            dropdownLinks: [
                { title: 'Dashboard', route:"/" },
                { title: 'My projects', route:"/projects" },
                { title: 'Team', route: "/account" },
            ],
        }
    }
}
</script>