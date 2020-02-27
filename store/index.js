export const state = () => ({
  drawer: true,
  loggedIn: false,
  counter: 0,

})

export const mutations = {
  toggleDrawer(state) {
    state.drawer = !state.drawer
  },
  drawer(state, val) {
    state.drawer = val
  },
  loggedIn(state, val) {
    console.log('store loggedIn', val);
    state.loggedIn = val
  },
  increment (state) {
    state.counter++
  }

  //this.$store.commit('loggedIn', val)
}
