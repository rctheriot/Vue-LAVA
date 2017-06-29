<template>
  <v-app>

    <app-header></app-header>

    <main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </main>

   <app-footer></app-footer>

  </v-app>
</template>


<script>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import { mapActions } from 'vuex';

  export default {
    components: {
      'app-header': Header,
      'app-footer': Footer,
    },
    methods: {
      ...mapActions({
        initialLoad: 'loadData',
      }),
    },
    created: function() {
       this.initialLoad();
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
