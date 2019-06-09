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
    <v-content>
      <v-container fluid fill-height></v-container>
    </v-content>

    <!-- ----------------- -->

    <ul id="posts">
      <li style="list-style:none" v-for="post in posts" :key="post.post_id">
        <v-layout border="black">
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-layout justify-center>
                <v-card-title primary-title>
                  <div>
                    <v-layout justify-center>
                      <v-img
                        src="https://static-cdn.jtvnw.net/ttv-boxart/World%20of%20Warcraft-285x380.jpg"
                        height="380px"
                        width="285px"
                      ></v-img>
                    </v-layout>
                    <h3 class="headline mb-0">{{post.post_id}}</h3>
                    <div>{{ post.post_content }}</div>
                  </div>
                </v-card-title>
              </v-layout>

              <v-card-actions>
                <v-btn flat color="orange">Like</v-btn>
                <v-btn flat color="orange" @click="commentary =!commentary">Comment</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
        <!-- Comentary -->
        <v-dialog v-model="commentary" width="800px">
          <v-card>
            <v-card-title class="grey lighten-4 py-4 title">Create comment</v-card-title>
            <v-container grid-list-sm class="pa-4">
              <v-layout row wrap>
                <v-flex xs12 align-center justify-space-between>
                  <v-layout align-center>
                    <v-text-field placeholder="Comment"></v-text-field>
                  </v-layout>
                </v-flex>
                <v-flex xs1></v-flex>
              </v-layout>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="commentary = false">Cancel</v-btn>
              <v-btn flat @click="dialog = false">Comment</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </li>
    </ul>

    <!-- ----------------- -->

    <v-btn fab bottom right color="#6F1A07" dark fixed @click="dialog = !dialog">
      <v-icon>add</v-icon>
    </v-btn>

    <v-dialog v-model="dialog" width="800px">
      <v-card>
        <v-card-title class="grey lighten-4 py-4 title">Create Post</v-card-title>
        <v-container grid-list-sm class="pa-4">
          <v-layout row wrap>
            <v-flex xs12 align-center justify-space-between>
              <v-layout align-center>
                <v-text-field placeholder="Post"></v-text-field>
              </v-layout>
            </v-flex>
            <v-flex xs1></v-flex>
          </v-layout>
        </v-container>
        <v-card-actions>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn color="#B3B6B7" dark v-on="on">Game</v-btn>
            </template>
            <v-list>
              <v-list-tile v-for="(game, key) in games" :key="key" @click="choice=game.title">
                <v-list-tile-title>{{ game.title }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
          <v-tab>{{choice}}</v-tab>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn flat @click="dialog = false">Post</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
import autservices from "@/services/autservices";
export default {
  data: () => ({
    posts: [],
    dialog: false,
    commentary: false,
    choice: null,
    items: [{ title: "Home" }, { title: "Profile" }, { title: "SignOut" }],
    games: [
      { title: "World of Warcraft" },
      { title: "Fifa 19" },
      { title: "Fortnite" }
    ],
    items: [
      { title: "Home", id: "/main" },
      { title: "Profile", id: "/profile" },
      { title: "SignOut", id: "/" }
    ]
  }),
  async mounted() {
    this.posts = (await autservices.show()).data;
  },
  props: {
    source: String
  }
};
</script>