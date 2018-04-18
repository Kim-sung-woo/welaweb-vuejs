<template>
  <div id="app">
    <side-nav>
      <router-view></router-view>
    </side-nav>

    <v-dialog/>
  </div>
</template>

<script>
import SideNav from "./components/SideNav";

export default {
  name: 'App',
  components: {
    SideNav
  }
}
</script>

<style lang="scss">
  @import 'theme/global';
</style>
