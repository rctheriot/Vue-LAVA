<template>
  <v-toolbar fixed class="blue-grey darken-3">
    <v-toolbar-title class="hidden-sm-and-down">Vue LAVA</v-toolbar-title>
    
    <v-toolbar-items>
      <v-toolbar-item>
        <router-link :to="{ name: 'home' }">Home</router-link>
      </v-toolbar-item>
    </v-toolbar-items>

    <v-menu offset-y left>
        <v-btn icon light slot="activator">
          <v-icon>menu</v-icon>
        </v-btn>
        <v-list>
          <v-list-item>
            <v-list-tile>
              <v-list-tile-title>Item 1</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
          <v-list-item>
            <v-list-tile>
              <v-list-tile-title>Item 2</v-list-tile-title>
            </v-list-tile>
          </v-list-item>
        </v-list>
      </v-menu>

  </v-toolbar>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .toolbar * {
    color: white;
    text-decoration: none;
  }
</style>