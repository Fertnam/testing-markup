<template>
  <ul class="menu-list">
    <li
      class="menu-list__item"
      v-for="(menuItem, index) in menuItems"
      :key="index"
    >
      <a
        class="menu-list__link"
        href="#"
      >
        {{ menuItem }}
      </a>
    </li>
  </ul>
</template>

<script>
  import menuItems from '@/store/static/menu-items';

  export default {
    data() {
      return {
        menuItems
      };
    }
  };
</script>

<style>
  .menu-list--theme_column .menu-list__item:not(:last-child) {
    margin-bottom: 8px;
  }

  .menu-list--theme_row {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .menu-list--theme_row .menu-list__item:not(:last-child) {
    margin-right: 20px;
    padding-right: 20px;
    border-right: 1.5px solid #fff;
  }

  .menu-list--theme_row .menu-list__link {
    text-decoration: none;
  }

  .menu-list--theme_row .menu-list__link:hover {
    text-decoration: underline;
  }
</style>
