<template>
  <v-app id="inspire">
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="#AF9164" dark app fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Realistic</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        hide-details
        prepend-inner-icon="search"
        label="Search"
        class="hidden-sm-and-down"
      ></v-text-field>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on }">
          <v-btn color="#B3B6B7" dark v-on="on">Menu</v-btn>
        </template>
        <v-list>
          <v-list-tile v-for="(item, index) in items" :key="index" :to="item.id">
            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-menu>
    </v-toolbar>

    <v-layout justify-center align-center>
      <v-content>
        <h1>Add user information</h1>
        <v-layout justify-center>
          <v-flex xs12 sm8>
            <v-form color="#F7F3E3">
              <v-text-field v-model="address" prepend-icon="home" name="address" label="Address" type="text"></v-text-field>
              <v-text-field v-model="age" prepend-icon="event" name="age" label="Age" type="text"></v-text-field>
              <v-text-field v-model="photo" prepend-icon="person" name="photo" label="Photo" type="text"></v-text-field>
            </v-form>
          </v-flex>
        </v-layout>
        <v-btn @click="update" color="#B3B6B7">Submit</v-btn>
      </v-content>
    </v-layout>
  </v-app>
</template>
<script>
import autservices from "@/services/autservices";
export default {
  data: () => ({
    choice: null,
    address:null,
    age: null,
    photo:null,
    items: [
      { title: "Home", id: "/main" },
      { title: "Profile", id: "/profile" },
      { title: "SignOut", id: "/" }
    ]
  }),
  methods:{
    update(){
      autservices.update({
        address:this.address,
        age:this.age,
        photo:this.photo
      })
      location.reload();
    }
  }
};
</script>
