<template>
  <v-app>

    <v-navigation-drawer persistent clipped v-model="drawerVisibility">
      <v-list>
        <v-list-item  v-for="(item, i) in items" :key="i">
          <router-link :to="item.route" style="color:white; text-decoration:none;">
            <v-list-tile value="true">
              <v-list-tile-action>
                <v-icon light v-html="item.icon"></v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </router-link>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed>
      <v-toolbar-side-icon @click.native.stop="drawerVisibility = !drawerVisibility"></v-toolbar-side-icon>
      <v-toolbar-title style="color:white;" v-text="title"></v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <main>
      <v-container fluid>
          <v-layout column-center>
              <img src="/public/v.png" alt="Vuetify.js" class="mb-5">
          </v-layout>
          <v-layout column-center>
            <router-view></router-view>
          </v-layout>
      </v-container>
    </main>
    
    <v-footer :fixed="true">
      <span>&copy; 2017 LAVA Vue Template</span>
    </v-footer>

  </v-app>
</template>

<script>
  import BarGraph from './components/BarGraph.vue';
  import CerealTable from './components/CerealTable.vue';

  export default {
    data () {
      return {
        items: [
          { icon: 'list', title: 'Table', route: '/' },
          { icon: 'insert_chart', title: 'Bar Graph', route: '/bargraph' },
        ],
        title: 'LAVA Vue Template',
        drawerVisibility: "false",
      }
    },
    components: {
      'app-bar-graph': BarGraph,
      'app-cereal-table': CerealTable,
    }
  }

</script>

<style lang="stylus">
  @import './stylus/main'

</style>
