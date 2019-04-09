<template>
  <div id="app">
    <div class="container">
      <router-view />
    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url("../src/assets/css/common.css");
#app{
  overflow: scroll;
}
</style>
