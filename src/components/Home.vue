<template>
  <div> 
      <v-layout row>
        <v-flex xs6>
          <v-card>
            <app-unity></app-unity>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card>
            <app-bar-graph></app-bar-graph> 
          </v-card>
        </v-flex>
      </v-layout>

      <v-layout row>
        <v-flex xs8 offset-xs2>
          <v-card>
            <app-table></app-table>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>
  </div>
</template>

<script>
  import Vue from 'vue';
  import Table from './Table.vue';
  import BarGraph from './BarGraph.vue';
  import Unity from './Unity.vue';

  export default {
    components: {
      'app-table': Table,
      'app-bar-graph': BarGraph,
      'app-unity': Unity,
    },
  }
</script>

<style scoped>

.flex {
  margin: 8px;
}

</style>
