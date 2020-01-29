<template>
  <v-card color="secondary">
    <v-card-title>Console</v-card-title>
    <v-card-text>Waiting for response...</v-card-text>
    <v-card-actions>
      <v-row align-content="center" justify="center">
        <v-col cols="8">
          <v-text-field color="accent" outlined dense placeholder="input command"></v-text-field>
        </v-col>
        <v-col cols="2">
          <v-btn icon>
            <v-icon color="accent">mdi-send</v-icon>
          </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {}
</script>

<style scoped>
</style>