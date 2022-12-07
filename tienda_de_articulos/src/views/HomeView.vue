<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/LogoFurn.png">
    <!--<HelloWorld msg="Welcome to Your Vue.js App"/>-->
    <h1 class="h1">Mueblerias TheIonic</h1>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld
  }
}
</script>
<style>
.h1{
  font-family:'Impact', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  color:purple;
  text-shadow: orangered 2px -2px;
}
*
{
  font-family: 'Verdana', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
}
</style>
