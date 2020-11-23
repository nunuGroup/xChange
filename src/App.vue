<template>
<div>
  <Navbar/>
  <router-view/>
</div>
</template>

<script>
import Navbar from '@/components/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');

body {
  margin: 0px;
  padding: 0px;
}

.modal-container {
  position: fixed;
  top: 0px;
  height:100vh;
  width: 100vw;
  margin: 0px;
  background: rgba(0,0,0,0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  pointer-events: none;
  z-index: 99999;

  .modal-active {
    opacity: 1;
    background: white;
    height: 450px;
    width: 60%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 200ms;
  }

  .modal-inactive {
    opacity: 0;
    background: white;
    transform: scale(0.8);
    height: 450px;
    width: 60%;
    border-radius: 12px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 200ms;
    pointer-events: none;
  }
}

#app {
  font-family: 'Work Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
