<template>
  <nav class="nav">
    <div class="container">
      <MenuList class="menu-list--theme_row"/>
    </div>
  </nav>
</template>

<script>
  import MenuList from './MenuList';

  export default {
    components: {
      MenuList
    }
  };
</script>

<style>
  .nav {
    color: #fff;
    background-color: #777;
  }
</style>
