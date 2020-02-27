<template>
  <v-app id="login" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="../static/m.png" alt="Admin Login" width="120" height="120">
                  <h1 class="flex my-4 primary--text">Admin Login</h1>
                </div>
                <v-form>
                  <v-text-field append-icon="person" name="login" label="Login" type="text"
                                v-model="model.username"></v-text-field>
                  <v-text-field append-icon="lock" name="password" label="Password" id="password" type="password"
                                autocomplete="on"
                                v-model="model.password"></v-text-field>
                </v-form>
              </v-card-text>

              <div class="red--text" v-show="model.error" v-text="model.error"></div>


              <v-card-actions>
                <v-btn block color="primary" @click="register" :loading="loading">Register</v-btn>
                <v-spacer></v-spacer>
                <v-btn icon @click="facebookLogin">
                  <v-icon color="blue">fa fa-facebook-square fa-lg</v-icon>
                </v-btn>
                <v-btn icon @click="googleLogin">
                  <v-icon color="red">fa fa-google fa-lg</v-icon>
                </v-btn>
                <v-btn icon @click="twitterLogin">
                  <v-icon color="light-blue">fa fa-twitter fa-lg</v-icon>
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn block color="primary" @click="login" :loading="loading">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>


    </v-content>


  </v-app>
</template>

<script>
  import firebase from 'firebase/app';
  import 'firebase/auth'; // for authentication
  import axios from '~/plugins/axios'
  import {mapMutations} from 'vuex'


  export default {
    layout: 'default',
    data: () => ({
      loading: false,
      model: {
        username: 'admin@example.com',
        password: 'password',
        error: ''
      }
    }),

    methods: {
      register() {
        this.loading = true;
        this.$router.push('/registration');
      },

      handleSuccess() {
        this.$router.push('/dashboard');
        this.loading = false;

        this.userLogout();
        this.userUpdate({
          username: this.model.username,
          password: this.model.password
        });

        // this.$store.dispatch('userLogout')
        //
        //
        // this.$store.dispatch('userUpdate', {
        //   username: this.model.username,
        //   password: this.model.password
        // }).then(() => {
        //   console.log('userUpdate then');
        // }).catch((error) => {
        //   console.log('userUpdate error', error);
        // })

      },

      handleAuth(data, payload, model) {
        console.log('handleAuth ', data, payload);


        firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
          .then(idToken => {
            console.log('handleAuth idToken ', idToken);
            payload.token = idToken;

            axios.post('/api/v1/user/social_login', payload).then(response => {
              console.log('handleAuth social_login response ', response);
              console.log('handleAuth social_login response data', response.data);
              this.handleSuccess();

            }).catch(error => {
              console.log('handleAuth social_login response.error', error);
              this.handleAuthFailure(error);
            });

          }).catch(error => {
          console.log('handleAuth social_login error', error);
          this.handleAuthFailure(error);
        });
      },


      handleAuthFailure(error) {
        console.log('handleAuthFailure ', error);
        this.loading = false;
      },

      login() {

        console.log('login clicked ', this.model);

        let payload = {
          provider: 'firebase',
          sub_provider: 'password',
          username: this.model.username,
          password: this.model.password,
        };

        firebase
          .auth()
          .signInWithEmailAndPassword(this.model.username, this.model.password)
          .then(data => {
            this.handleAuth(data, payload, this.model);
          })
          .catch(error => {
            this.handleAuthFailure(error);
          });
      },


      googleLogin() {
        console.log('googleLogin clicked ');

        let payload = {
          provider: 'firebase',
          sub_provider: 'google',
        };

        firebase
          .auth()
          .signInWithPopup(new firebase.auth.GoogleAuthProvider())
          .then(data => {
            this.handleAuth(data, payload, this.model);
          })
          .catch(error => {
            this.handleAuthFailure(error);
          });
      },


      facebookLogin() {
        console.log('facebookLogin clicked ');

        let payload = {
          provider: 'firebase',
          sub_provider: 'facebook',
        };

        firebase
          .auth()
          .signInWithPopup(new firebase.auth.FacebookAuthProvider())
          .then(data => {
            this.handleAuth(data, payload, this.model);
          })
          .catch(error => {
            this.handleAuthFailure(error);
          });
      },


      twitterLogin() {
        console.log('twitterLogin clicked ');

        let payload = {
          provider: 'firebase',
          sub_provider: 'twitter',
        };
        firebase
          .auth()
          .signInWithPopup(new firebase.auth.TwitterAuthProvider())
          .then(data => {
            this.handleAuth(data, payload, this.model);
          })
          .catch(error => {
            this.handleAuthFailure(error);
          });
      },

      addTodo (e) {
        this.$store.commit('user/add', e.target.value)
        e.target.value = ''
      },

      ...mapMutations({
        toggle: 'user/toggle',
        userLogout:'user/userLogout',
        userUpdate:'user/userUpdate',
      })

    }
  };
</script>
<style scoped lang="css">
  #login {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }

  .error {
    color: red;
  }
</style>
