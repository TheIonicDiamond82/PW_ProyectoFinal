<template>
  <div id="app">
    <nav >
      <router-link to="/">Inicio</router-link> 
      <router-link to="/articulos">Articulos</router-link>
      <router-link to="/proveedores">Proveedores</router-link>
      <router-link to="/clientes">Clientes</router-link>
      <router-link to="/altas">Altas de articulos</router-link>
      <router-link to="/bajas">Bajas de articulos</router-link>
    </nav>
    <router-view/>
    
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(145,10,115,0.9668242296918768) 34%, rgba(205,223,17,1) 66%);
  text-align: left;

  a {
    font-weight: 999;
    color: #ffffff;
    font-size: 20px;
    margin-left: 25px;
    text-decoration: none;
   
    &.router-link-exact-active {
      color: #1435a3;
      text-shadow: black 1px 1px;
    }
  }
}
</style>
