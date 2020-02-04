<template>
  <v-row align="center" justify="center">
    <v-col>
      <Console :client="client"></Console>
    </v-col>
  </v-row>
</template>

<script>
import Console from '~/components/console'
export default {
  components: { Console },
  computed: {
    connectionObj() {
      return this.$store.state.console.connectionObj
    },
    async client(){
    let client = await this.$services.console.create(this.connectionObj)
    return client
    },
  },
      mounted(){
        console.log('services', this.$services);
      }
}
</script>

<style scoped>
</style>