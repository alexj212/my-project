<template>
  <v-app id="registration" class="primary">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm8 md4 lg4>
            <v-card class="elevation-1 pa-3">
              <v-card-text>
                <div class="layout column align-center">
                  <img src="../static/m.png" alt="Vue Material Admin" width="120" height="120">
                  <h1 class="flex my-4 primary--text">Account Registration</h1>
                </div>
                <v-form>
                  <v-text-field append-icon="person" name="registration" label="registration" type="text"
                                v-model="model.username"></v-text-field>

                  <v-text-field append-icon="lock" name="password" label="Password" id="password" type="password"
                                v-model="model.password"></v-text-field>
                </v-form>
              </v-card-text>

              <div class="red--text"  v-show="model.error" v-text="model.error"></div>

              <v-card-actions>
                <v-btn block color="primary" @click="login" :loading="loading">Login</v-btn>
                <v-spacer></v-spacer>
                <v-spacer></v-spacer>
                <v-btn block color="primary" @click="registration" :loading="loading">Register</v-btn>
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
  import 'firebase/auth';

  import axios from '~/plugins/axios'


  export default {
    layout: 'default',
    data: () => ({
      loading: false,
      model: {
        username: 'admin@example.com',
        password: 'password',
        error: '',
      }
    }),

    methods: {
      registration() {
        this.loading = true;



        firebase
          .auth()
          .createUserWithEmailAndPassword(this.model.username, this.model.password)
          .then(data => {
            console.log('createUserWithEmailAndPassword result', data)

            this.$router.push('/dashboard');
            this.loading = false;
          })
          .catch(error => {

            this.model.error = error.message;

            console.log('createUserWithEmailAndPassword error', error);
            var errorCode = error.code;
            var errorMessage = error.message;

            this.error = error
            this.loading = false;
          })



      },
      login() {
        this.loading = true;
        this.$router.push('/login');
      }

    }

  };
</script>
<style scoped lang="css">
  #registration {
    height: 50%;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    z-index: 0;
  }
</style>
