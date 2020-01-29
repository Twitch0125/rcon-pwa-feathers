<template>
  <div>
    <v-text-field @input="emitConnection" color="accent" v-model="host" filled label="Host"></v-text-field>
    <v-text-field
      @input="emitConnection"
      color="accent"
      v-model="port"
      filled
      label="Port"
      type="number"
    ></v-text-field>
    <v-text-field
      @input="emitConnection"
      color="accent"
      v-model="password"
      filled
      label="Password"
      type="password"
    ></v-text-field>
  </div>
</template>

<script>
export default {
  props: ['value'],
  data() {
    return {
      host: '',
      port: '',
      password: ''
    }
  },
  methods: {
    emitConnection() {
      this.$emit('input', this.connection)
    }
  },
  computed: {
    connection() {
      let { host, port, password } = this
      return { host, port: port ? parseInt(port) : 25575, password }
    }
  }
}
</script>

<style scoped>
</style>