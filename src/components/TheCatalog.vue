<template>
  <div class="catalog">
    <div class="container">
      <div class="catalog__current-path">
        <a class="catalog__current-path-link" href="#">Главная</a>
        <span class="catalog__current-path-delimiter">/</span>
        <a class="catalog__current-path-link" href="#">Каталог</a>
        <span class="catalog__current-path-delimiter">/</span>
        <a class="catalog__current-path-link" href="#">Бытовая техника</a>
      </div>
      <div class="catalog__blocks">
        <TheCatalogAside/>
        <TheCatalogMain/>
      </div>
    </div>
  </div>
</template>

<script>
  import TheCatalogAside from './TheCatalogAside';
  import TheCatalogMain from './TheCatalogMain';

  export default {
    components: {
      TheCatalogAside,
      TheCatalogMain
    }
  };
</script>

<style>
  .catalog .container {
    color: #777;
  }

  .catalog__current-path {
    margin-bottom: 22px;
  }

  .catalog__current-path-delimiter {
    margin-left: 6px;
    margin-right: 6px;
  }

  .catalog__current-path-link:last-child {
    text-decoration: none;
  }

  .catalog__blocks {
    display: grid;
    grid-template-columns: 25% 75%;
    margin-top: 10px;
  }
</style>
