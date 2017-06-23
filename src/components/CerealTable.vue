<template>
  <div>
     <template v-if="getCereals.length > 0">
      <table class="table">
        <thead>
          <tr>
            <th v-for="propname in getPropNames">
              {{ propname }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(cereal, key, index) in getCereals">
            <td>{{ cereal.Brand }}</td>
            <td>{{ cereal.Energy }}</td>
            <td>{{ cereal.Protein }}</td>
            <td>{{ cereal.Fat }}</td>
            <td>{{ cereal.Na }}</td>
            <td>{{ cereal.Fiber }}</td>
            <td>{{ cereal.Carbs }}</td>
            <td>{{ cereal.Sugar }}</td>
            <td>{{ cereal.K }}</td>
            <td>{{ cereal.Vit }}</td>
            <td>{{ cereal.Score }}</td>
          </tr>
          </tbody>
      </table>
    </template>
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
          'getCereals',
          'getPropNames',
        ]),
    },
    methods: {
      ...mapActions([
        'setCereals',
      ]),
    },
  }

</script>

<style>
  table{
    text-align: left;
    font-size: 12px;
  }
</style>