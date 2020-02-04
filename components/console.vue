<template>
  <v-card color="secondary">
    <v-card-title>Console</v-card-title>
    <v-card-text v-if="!hasConnected">Waiting for response...</v-card-text>
    <v-card-text v-if="hasConnected">Connected!</v-card-text>
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
        <v-card-text v-if="hasAuthenticated">Logged In</v-card-text>

  </v-card>
</template>

<script>
export default {
  props: ['client'],
  data(){
    return{
      hasConnected: false,
      hasError: false,
      hasAuthenticated: false,
    }
  },
  async mounted() {
    console.log('client', this.client);
    await this.client.connect()
    this.client.on('connect', ()=> this.hasConnected =true)
    this.client.on('error', console.log)
    this.client.on('authenticated', console.log)
  }
}
</script>

<style scoped>
</style>