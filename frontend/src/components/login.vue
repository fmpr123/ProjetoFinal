<template>
  <v-app id="inspire">
    <v-layout justify-center align-center>
    <v-content >
          <v-layout justify-center align-center>
        <img src="../assets/realisticLogo.png" height="200px" width="450">
      </v-layout>
      <v-container>
        <v-layout justify-center>
          <v-flex xs12 sm8 md4>
            <v-card class="elevation-12" color="#F7F3E3">
              <v-toolbar color="#AF9164">
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form  color="#F7F3E3">
                  <v-text-field id="login" prepend-icon="person" name="login" label="Login" type="text"></v-text-field>
                  <v-text-field id="password" prepend-icon="lock" name="password" label="Password" type="password"></v-text-field>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="#B3B6B7" to="/main">Login</v-btn>
                <v-btn color="brown" to="/signup" >Sign-Up</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
    </v-layout>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      drawer: null
    }),
    props: {
      source: String
    }
  }
</script>

<style>

</style>
