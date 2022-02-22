<template>
  <div>
    vue router
    <hr>
<!--    router link html a tagi gibidir-->
    <router-link :to="'/componentA/'+ id">Go to Component A</router-link>
    <br>
    <router-link to="/componentB">Go to Component B</router-link>
    <br>
    <button @click="routerA">Router A</button>
    <button @click="routerB">Router B</button>
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      id:123
    }
  },
  methods:{
    routerA(){
      this.$router.push("/componentA/" + this.id)
    },
    routerB(){
      this.$router.push("/componentB-user1")
    }
  }
}
</script>
<style>
/*aktif link için*/
.router-link-active{
  color: red;
}
</style>