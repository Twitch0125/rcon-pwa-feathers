<template>
  <v-row justify="center" align="center">
    <v-col>
      <Setup v-model="connectionObj"></Setup>
      <v-btn @click="setConnection(connectionObj)" color="accent" to="/console">Connect</v-btn>
      <ul>
        <li>{{connectionObj.host}}</li>
        <li>{{connectionObj.port}}</li>
        <li>{{connectionObj.password}}</li>
      </ul>
    </v-col>
  </v-row>
</template>

<script>
import Logo from '~/components/Logo.vue'
import VuetifyLogo from '~/components/VuetifyLogo.vue'
import Setup from '~/components/setup'
import { mapMutations } from 'vuex'
export default {
  components: {
    Logo,
    VuetifyLogo,
    Setup
  },
  data() {
    return {
      connectionObj: {}
    }
  },
  methods: {
    ...mapMutations({
      setConnection: 'console/setConnection'
    })
  }
}
</script>
