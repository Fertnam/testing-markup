<template>
  <aside class="aside">
    <ul class="aside__menu-list">
      <li class="aside__menu-list-item">
        <a
          class="aside__menu-list-link"
          href="#"
        >
          Автомобили
        </a>
      </li>
      <li class="aside__menu-list-item">
        <a
          class="aside__menu-list-link aside__menu-list-link--selected"
          href="#"
        >
          Бытовая техника
        </a>
        <ul class="aside__menu-sublist">
          <li class="aside__menu-sublist-item">
            <a
              class="aside__menu-sublist-link aside__menu-sublist-link--selected"
              href="#"
            >
              Микроволновки
            </a>
          </li>
          <li class="aside__menu-sublist-item">
            <a
              class="aside__menu-sublist-link"
              href="#"
            >
              Холодильники
            </a>
          </li>
          <li class="aside__menu-sublist-item">
            <a
              class="aside__menu-sublist-link"
              href="#"
            >
              Посудомоечные машины
            </a>
          </li>
          <li class="aside__menu-sublist-item">
            <a
              class="aside__menu-sublist-link"
              href="#"
            >
              Чайники
            </a>
          </li>
        </ul>
      </li>
      <li class="aside__menu-list-item">
        <a
          class="aside__menu-list-link"
          href="#"
        >
          Мобильная техника
        </a>
      </li>
      <li class="aside__menu-list-item">
        <a
          class="aside__menu-list-link"
          href="#"
        >
          Компьютеры
        </a>
      </li>
      <li class="aside__menu-list-item">
        <a
          class="aside__menu-list-link"
          href="#"
        >
          Одежда
        </a>
      </li>
      <li class="aside__menu-list-item">
        <a
          class="aside__menu-list-link"
          href="#"
        >
          Недвижимость
        </a>
      </li>
    </ul>
    <figure class="aside__price-list">
      <img
        class="aside__price-list-image"
        src="/images/price-list.png"
        alt="Прайс-лист"
      >
      <figcaption class="aside__price-list-title">Прайс-лист</figcaption>
    </figure>
  </aside>
</template>

<style>
  .aside__menu-list-link, .aside__menu-sublist-link {
    text-decoration: none;
  }

  .aside__menu-list-link--selected, .aside__menu-list-link:hover {
    text-decoration: underline;
  }

  .aside__menu-sublist {
    list-style-type: circle;
    margin-left: 20px;
  }

  .aside__menu-sublist-link--selected, .aside__menu-sublist-link:hover {
    color: #010101;
    text-decoration: underline;
  }

  .aside__price-list {
    text-align: center;
    margin-top: 100px;
  }

  .aside__price-list-title {
    color: #444;
    font-size: 1.5em;
    font-weight: bold;
    margin-top: 15px;
  }
</style>
