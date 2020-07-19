<template>
  <article class="catalog-product">
    <img
      class="catalog-product__img"
      src="/images/catalog-product-no-photo.png"
      alt="Продукт каталога"
    >
    <p class="catalog-product__description">Самый клевый чайник, надо купить!</p>
    <div class="catalog-product__bottom">
      <p class="catalog-product__price">1900 р.</p>
      <button class="catalog-product__button">
        <fa-icon icon="cart-plus"/>
      </button>
    </div>
  </article>
</template>

<style>
  .catalog-product {
    background-color: #dcdcdc;
    padding: 20px;
    padding-bottom: 10px;
    max-width: 250px;
  }

  .catalog-product__img {
    width: 100%;
  }

  .catalog-product__bottom {
    display: flex;
    justify-content: space-between;
    margin-top: 50px;
  }

  .catalog-product__price {
    color: #444;
    font-weight: bold;
  }

  .catalog-product__button {
    color: #fff;
    background-color: inherit;
  }

  .catalog-product__button, .catalog-product__price {
    font-size: 1.5em;
  }
</style>
