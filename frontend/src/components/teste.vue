<template>
<div class="arroz">
  <p>Users:</p>

    <li v-for="user in users" :key="user">
      {{ user_name }}
    </li>

</div>
</template>

<script>
import autservices from "@/services/autservices"
export default {
  name: 'users',
  data () {
    return {
      users:[]
    }
  },
  async mounted(){
    this.users=(await autservices.show()).data;
  }
}
</script>
<style scoped>
</style>
