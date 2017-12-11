<template>
  <div id="app">
    <div id="header">
      <img src="../assets/electron.svg"/>
      <img src="../assets/vue.png"/>
      <div id="text">
        <h1>Auto Reload without Dev-server</h1>
        <h3>Electron + Vue.js</h3>
        <h4>Simple webpack reload</h4>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style scoped>
  #app {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(#a8ebf8, #41b882);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #header {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 25%;
  }
  
  #header img {
    width: 200px;
  }

  #text {
    margin-left: 10px;
  }
</style>