<template>
  <v-app id="inspire">
    <v-toolbar :clipped-left="$vuetify.breakpoint.lgAndUp" color="#AF9164" dark app fixed>
      <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
        <span class="hidden-sm-and-down">Realistic</span>
      </v-toolbar-title>
      <v-text-field
        flat
        solo-inverted
        v-model="search"
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
    <ul id="posts">
      <li style="list-style:none" v-for="post in posts" :key="post.post_id">
        <v-layout border="black">
          <v-flex xs12 sm6 offset-sm3>
            <v-card>
              <v-layout justify-center>
                <v-card-title primary-title>
                  <div>
                    <v-layout justify-center>
                      <v-img :src="post.game_photo" height="380px" width="285px"></v-img>
                    </v-layout>
                    <h3 class="headline mb-0">{{post.game_name}}</h3>
                    <div>{{ post.post_content }}</div>
                  </div>
                </v-card-title>
              </v-layout>
              <v-card-actions>
                <v-btn flat color="orange" @click="likes">Like</v-btn>
                <v-btn flat color="orange" @click="commentary = !commentary">Comment</v-btn>
                <v-spacer></v-spacer>
                <v-text class="title">{{post.post_like}}<v-icon color="orange">thumb_up</v-icon></v-text>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
        <v-dialog v-model="commentary" width="800px">
          <v-card>
            <v-card-title class="grey lighten-4 py-4 title">Create comment</v-card-title>
            <v-container grid-list-sm class="pa-4">
              <v-layout row wrap>
                <v-flex xs12 align-center justify-space-between>
                  <v-layout align-center>
                    <v-text-field v-model="comment_data" placeholder="Comment"></v-text-field>
                  </v-layout>
                </v-flex>
                <v-flex xs1></v-flex>
              </v-layout>
            </v-container>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn flat color="primary" @click="commentary = false">Cancel</v-btn>
              <v-btn flat @click="commentary = false">Comment</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-text>{{post.comments}}</v-text>
      </li>
    </ul>
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
                <v-text-field v-model="post_data" placeholder="Post"></v-text-field>
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
              <v-list-tile v-for="(game, key) in games" :key="key" @click="choice=game.game_id">
                <v-list-tile-title>{{ game.game_name }}</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
          <v-tab >{{choice}}</v-tab>
          <v-spacer></v-spacer>
          <v-btn flat color="primary" @click="dialog = false">Cancel</v-btn>
          <v-btn flat @click="add_post">Post</v-btn>
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
    num_post:[],
    post_data:null,
    dialog: false,
    commentary: false,
    post_id:1,
    choice: null,
    items: [{ title: "Home" }, { title: "Profile" }, { title: "SignOut" }],
    games: [],
    items: [
      { title: "Home", id: "/main" },
      { title: "Profile", id: "/profile" },
      { title: "SignOut", id: "/" }
    ]
  }),
  async mounted() {
    this.posts = (await autservices.show()).data;
    this.games=(await autservices.games()).data;
  },
  methods:{
    add_post(){
      autservices.add_post({
        post_content:this.post_data,
        game_id:this.choice
      })
      location.reload();
    },
    likes(){
      autservices.likes({
        post_id:this.post_id
      })
      location.reload();
    }
  }
};
</script>

<style scoped>
v-text {
  color: #ff9800;
  font-size: 20px;
}
</style>
