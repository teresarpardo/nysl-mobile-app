<template>
    <nav>
        <v-toolbar flat app class="grey lighten-3">
            <v-toolbar-side-icon><img alt="Vue logo" width="120%" src="../assets/nysl_logo.png"/></v-toolbar-side-icon>
            <v-toolbar-title class="primary--text">
                <span>NYSL</span>
                <span class="font-weight-light">schedule</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <v-toolbar-items class="hidden-sm-and-down" v-for="link in links" :key="link.text">
                <v-btn  fab icon :to="link.route">
                    <v-icon color="primary">{{ link.icon }}</v-icon>
                </v-btn>
            </v-toolbar-items>
        
            <v-menu class="hidden-md-and-up">
                <v-toolbar-side-icon slot="activator"></v-toolbar-side-icon>
                <v-list>
                    <v-list-tile v-for="link in links" :key="link.text" router :to="link.route" >
                        <v-list-tile-content>
                            <v-list-tile-title rigth>{{link.text}}</v-list-tile-title>
                        </v-list-tile-content>
                    </v-list-tile>   
                </v-list>
            </v-menu>
        </v-toolbar>  
    </nav>
</template>

<script>
export default {
    data(){
        return {
            links: [
                {icon: "home", text: "Home", route: "/"},
                {icon: "info", text: "Information", route: "/information"},
                {icon: "face", text: "Contact", route: "/contact"},
            ]
        }
    }  
}
</script>
