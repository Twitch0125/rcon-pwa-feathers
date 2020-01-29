export const state = () => ({
  connectionObj: {}
})

export const mutations = {
  setConnection(state, obj) {
    state.connectionObj = obj
  }
}
