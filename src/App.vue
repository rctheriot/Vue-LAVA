<template>
  <v-app>

<<<<<<< HEAD
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

          <button @click="selComp = item.comp">
           <v-list-tile value="true">
              <v-list-tile-action>
                <v-icon light v-html="item.icon"></v-icon>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title v-text="item.title"></v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </button>

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
            <keep-alive>
              <component :is="selComp"></component>
            </keep-alive>
            <router-view></router-view>
          </v-layout>
      </v-container>
    </main>
    
    <v-footer :fixed="true">
      <span>&copy; 2017 LAVA Vue Template</span>
    </v-footer>
=======
    <app-header></app-header>

    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>

   <app-footer></app-footer>
>>>>>>> origin/unity-table

  </v-app>
</template>


<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  export default {
<<<<<<< HEAD
    data () {
      return {
        items: [
          { icon: 'list', title: 'Table', route: '/', comp: 'app-cereal-table'},
          { icon: 'insert_chart', title: 'Bar Graph', route: '/bargraph', comp: 'app-bar-graph'},
        ],
        selComp: 'app-bar-graph',
        title: 'LAVA Vue Template',
        drawerVisibility: "false",
      }
    },
=======
>>>>>>> origin/unity-table
    components: {
      'app-header': Header,
      'app-footer': Footer,
    },
  };
</script>

<style lang="stylus">
  @import './stylus/main'

  .slide-enter-active {
    animation: slide-in 400ms ease-out forwards;
  }

  .slide-leave-active{
    animation: slide-out 400ms ease-out forwards;
  }

  $keyframes slide-in {
    from {
      transform: translateY(-30px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @keyframes slide-out {
    from {
      transform translateY(0);
      opacity: 1;
    }
    to {
      transform translateY(-30px);
      opacity: 0;
    }
  }
</style>
