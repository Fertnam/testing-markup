<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__company">
        <p class="footer__company-name">© 2012–2013 ЗАО «Компания»</p>
        <address class="footer__company-contacts">
          <a
            class="footer__company-link"
            href="mailto:info@name.ru"
          >
            info@name.ru
          </a>
        </address>
      </div>
      <MenuList class="menu-list--theme_column"/>
      <div class="footer__dev-company">
        <img
          class="footer__dev-company-logo"
          src="/images/dev-logo.png"
          alt="Логотип компании разработчиков"
        >
        <p class="footer__dev-company-info">
          <span class="footer__dev-company-mark">Разработка сайта</span>
          —
          <span class="footer__dev-company-name">компания «Пиксель Плюс»</span>
        </p>
      </div>
    </div>
  </footer>
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
  .footer {
    color: #fff;
    background-color: #777;
  }

  .footer .container {
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .footer__company-name {
    margin-bottom: 8px;
  }

  .footer__company-link {
    text-decoration: none;
  }

  .footer__dev-company-logo {
    width: 40px;
    vertical-align: -4px;
  }

  .footer__dev-company-info {
    display: inline-block;
    margin-left: 8px;
  }

  .footer__dev-company-name {
    display: block;
    margin-top: 4px;
  }

  .footer__dev-company-mark {
    text-decoration: underline;
  }
</style>
