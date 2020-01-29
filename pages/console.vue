<template>
  <v-row align="center" justify="center">
    <v-col>
      <Console></Console>
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
    }
  },
  async asyncData({ $axios }) {
    const { data } = await $axios.get(`localhost:3030/api/rcon`)
    return {
      client: data.client
    }
  }
}
</script>

<style scoped>
</style>