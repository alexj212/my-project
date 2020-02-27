// import Vuex from 'vuex'
// import firebase from 'firebase'
// import { firebaseMutations, firebaseAction } from 'vuexfire'


/*

store.getters.isAuthenticated


      this.$store.dispatch('userCreate', {
        email: this.email,
        password: this.password
      })
        .then(() => {
          this.$router.push('/account')
        })
        .catch((error) => {
          console.log(error)
          this.formError = error.message
        })
    }





      this.$store.dispatch('userLogout')
        .then(() => {
          this.$router.push('/account/login')
        })
        .catch((error) => {
          console.log(error)
        })



        this.$store.dispatch('userGoogleLogin')


      this.$store.dispatch('userLogin', {
        email: this.email,
        password: this.password
      })
        .then(() => {
          this.$router.push('/account')
        })
        .catch((error) => {
          console.log(error)
          this.formError = error.message
        })



 */
// function createNewAccount (user) {
//   return firebase.database().ref(`accounts/${user.uid}`).set({
//     displayName: user.displayName || user.email.split('@')[0], // use part of the email as a username
//     email: user.email,
//     image: user.newImage || '/images/default-profile.png' // supply a default profile image for all users
//   })
// }
//
// const createStore = () => {
//   return new Vuex.Store({
//     state: {
//       user: null,
//       account: null
//     },
//     getters: {
//       isAuthenticated (state) {
//         return !!state.user
//       }
//     },
//     actions: {
//       setAccountRef: firebaseAction(({ bindFirebaseRef }, path) => {
//         return bindFirebaseRef('account', firebase.database().ref(path))
//       }),
//       resetUser ({
//         state
//       }) {
//         state.user = null
//       },
//       userCreate ({ state }, account) {
//         return firebase.auth()
//           .createUserWithEmailAndPassword(account.email, account.password)
//           .then(({ user }) => {
//             return createNewAccount(user)
//           })
//       },
//       userGoogleLogin ({ commit }) {
//         firebase.auth().useDeviceLanguage()
//         const provider = new firebase.auth.GoogleAuthProvider()
//         provider.addScope('https://www.googleapis.com/auth/plus.login')
//         provider.setCustomParameters({
//           'login_hint': 'user@example.com'
//         })
//         return firebase.auth()
//           .signInWithPopup(provider)
//           .then((result) => {
//             createNewAccount({
//               newImage: result.additionalUserInfo.profile.picture, // just use their existing user image to start
//               ...result.user
//             })
//             return commit('setUser', result.user)
//           }).catch((error) => {
//             console.log(error)
//           })
//       },
//       userGithubLogin ({ commit }) {
//         firebase.auth().useDeviceLanguage()
//         const provider = new firebase.auth.GithubAuthProvider()
//         provider.addScope('user:email')
//         return firebase.auth()
//           .signInWithPopup(provider)
//           .then((result) => {
//             createNewAccount({
//               newImage: result.additionalUserInfo.profile.avatar_url, // just use their existing user image to start
//               ...result.user
//             })
//             return commit('setUser', result.user)
//           }).catch((error) => {
//             console.log(error)
//           })
//       },
//       userLogin ({ state }, account) {
//         return firebase.auth()
//           .signInWithEmailAndPassword(account.email, account.password)
//           .then((user) => {
//             return this.dispatch('setUser', user)
//           })
//       },
//       userLogout ({ state }) {
//         return firebase.auth()
//           .signOut()
//           .then(() => {
//             this.dispatch('resetUser')
//           })
//       },
//       userUpdate ({ state }, newData) {
//         return firebase.database().ref(`accounts/${state.user.uid}`).update({
//           displayName: newData.displayName
//         })
//       },
//       userUpdateImage ({ state }, image) {
//         return firebase.database().ref(`accounts/${state.user.uid}`).update({
//           image
//         })
//       }
//     },
//     mutations: {
//       ...firebaseMutations,
//       setUser (state, user) {
//         state.user = user
//         return this.dispatch('setAccountRef', `accounts/${state.user.uid}`)
//       }
//     }
//   })
// }
//
// export default createStore

//
//
// export const mutations = {
//
// };
//
//
// export const actions = {
//       userLogout ({ state }) {
//         console.log('userLogout state', state);
//         return true;
//       },
//       userUpdate ({ state }, newData) {
//         console.log('userUpdate newData', newData);
//         console.log('userUpdate state', state);
//         return true;
//       },
// };



/*

        this.$store.dispatch('userLogout')


      this.$store.dispatch('userUpdate', {
        email: this.email,
        password: this.password
      })
        .then(() => {
          console.log('userUpdate then');
        })
        .catch((error) => {
        console.log('userUpdate error', error);
        })



 */


export const state = () => ({
  list: []
})

export const mutations = {
  add (state, text) {
    state.list.push({
      text,
      done: false
    })
  },
  remove (state, { todo }) {
    state.list.splice(state.list.indexOf(todo), 1)
  },
  toggle (state, todo) {
    todo.done = !todo.done
  },

  userLogout({state}) {
    console.log('userLogout state', state);
    return true;
  },
  userUpdate({state}, newData) {
    console.log('userUpdate newData', newData);
    console.log('userUpdate state', state);
    return true;
  },

}
