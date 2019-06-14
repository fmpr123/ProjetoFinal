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
        <v-flex>
          <ul id="users">
            <li style="list-style:none" v-for="user in users" :key="user.user_id">
              <v-layout row>
                <v-flex lg2></v-flex>
                <v-flex xs2 sm2 md2 lg2>
                  <v-img :src="user.user_photo" height="200px" width="150px"></v-img>
                </v-flex>
                <v-flex xs2></v-flex>
                <v-flex xs8 sm6 md6 lg6>
                  <v-layout column align-start>
                    <v-card color="#AF9164" class="pa-4 white--text">
                      <div >
                        <v-text class="title">
                          <p>
                            <b class="black--text">Name:</b>
                            {{user.user_name}}
                          </p>
                        </v-text>
                        <v-text class="title">
                          <p>
                            <b class="black--text">Email:</b>
                            {{user.user_email}}
                          </p>
                        </v-text>
                        <v-text class="title">
                          <p>
                            <b class="black--text">Address:</b>
                            {{user.user_address}}
                          </p>
                        </v-text>
                        <v-text class="title">
                          <b class="black--text">Age:</b>
                          {{user.user_age}}
                        </v-text>
                      </div>
                    </v-card>
                  </v-layout>
                </v-flex>
                <v-flex lg2></v-flex>
              </v-layout>
            </li>
          </ul>
        </v-flex>
        <h1>Add/Update user information</h1>
        <v-layout justify-center>
          <v-flex xs12 sm5>
            <v-form color="#F7F3E3">
              <v-text-field
                v-model="address"
                prepend-icon="home"
                name="address"
                label="Address"
                type="text"
              ></v-text-field>
              <v-text-field v-model="age" prepend-icon="event" name="age" label="Age" type="text"></v-text-field>
              <v-text-field
                v-model="photo"
                prepend-icon="person"
                name="photo"
                label="Photo"
                type="text"
              ></v-text-field>
            </v-form>
          </v-flex>
        </v-layout>
        <v-btn @click="update" color="#B3B6B7">Submit</v-btn>
        <h1>Delete post</h1>
        <v-layout justify-center>
          <v-flex xs12 sm5>
            <v-form color="#F7F3E3">
              <v-text-field v-model="post" prepend-icon="info" label="Post" type="text"></v-text-field>
            </v-form>
          </v-flex>
        </v-layout>
        <v-btn @click="delete_post" color="red">Submit</v-btn>
        <h1>Add Game</h1>
        <v-layout justify-center>
          <v-flex xs12 sm5>
            <v-form color="#F7F3E3">
              <v-text-field v-model="game_name" prepend-icon="info" label="Name" type="text"></v-text-field>
              <v-text-field v-model="game_photo" prepend-icon="info" label="Photo" type="text"></v-text-field>
            </v-form>
          </v-flex>
        </v-layout>
        <v-btn @click="add_game" color="blue">Submit</v-btn>
      </v-content>
    </v-layout>

    
  </v-app>
</template>
<script>
import autservices from "@/services/autservices";
export default {
  data: () => ({
    users: [],
    game_name:null,
    game_photo:null,
    post: null,
    choice: null,
    address: null,
    age: null,
    photo: null,
    items: [
      { title: "Home", id: "/main" },
      { title: "Profile", id: "/profile" },
      { title: "SignOut", id: "/" }
    ]
  }),
  async mounted() {
    this.users = (await autservices.show_user()).data;
  },
  methods: {
    update() {
      autservices.update({
        address: this.address,
        age: this.age,
        photo: this.photo
      });
      location.reload();
    },
    delete_post() {
      autservices.delete_post({
        post_id: this.post
      });
      location.reload();
    },
    add_game() {
      autservices.add_game({
        game_name: this.game_name,
        game_photo:this.game_photo
      });
      location.reload();
    }
  }
};
</script>


// https://imgur.com/a/KDB8Agg
