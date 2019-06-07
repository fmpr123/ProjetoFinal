<template>
<div class="arroz">
  <p>Users:</p>
  <ul>
    <li v-for="user in users" :key="user">{{user.user_name}}</li>
  </ul>

  <p>Array</p>
  <ul>
    <li v-for="fruto in frutos" :key="fruto">{{fruto}}</li>
  </ul>

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