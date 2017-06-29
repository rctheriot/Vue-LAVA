<template>
  <div>
    <v-data-table
      v-bind:headers="getHeaders"
      :items="getData"
      class="elevation-2 text-xs-left"
    >
      <template slot="items" scope="props">
        <td v-for="value in props.item" v-bind:key="value.id" class="text-xs-left">{{ value }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  import { mapActions } from 'vuex';

  export default {
    data: function() {
      return {
      }
    },
    computed: {
      ...mapGetters([
          'getData',
          'getHeaders',
        ]),
    },
    methods: {
      ...mapActions([
        'setData',
      ]),
    },
  }

</script>

<style>
  table{
    text-align: left;
    font-size: 12px;
  }
  .th {
    text-align: left;
  }
</style>