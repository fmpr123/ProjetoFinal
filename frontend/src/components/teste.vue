<template>
<div class="arroz">
  <p>Users:</p>

  <ul id="users">
    <li v-for="user in users" :key="user.user_id">{{user.user_name}}</li>
  </ul>

  <div v-for="fruto in frutos" :key="fruto">
    <p>{{ fruto }}</p>
  </div>

</div>
</template>

<script>
import autservices from "@/services/autservices"
export default {
  name: 'users',
  data () {
    return {
      users:[],
      frutos:['banana','tomate']
    }
  },
  async mounted(){
    this.users=(await autservices.show()).data;
  }
}
</script>
<style scoped>
</style>