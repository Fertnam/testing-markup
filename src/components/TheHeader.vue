<template>
  <header class="header">
    <transition
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <FormFeedback
        v-if="isFormOpen"
        @closePopup="isFormOpen = false"
      />
    </transition>
    <div class="container">
      <div class="header__company">
        <img
          class="header__company-logo"
          src="/images/logo.png"
          alt="Логотип компании"
        >
        <div class="header__company-info">
          <h1 class="header__company-name">Название компании</h1>
          <h2 class="header__company-description">Самая клевая компания</h2>
        </div>
      </div>
      <div class="header__contacts">
        <address class="header__contacts-telephones">
          <a
            class="header__contacts-link"
            href="tel:88005553535"
          >
            88005553535
          </a>
          <a
            class="header__contacts-link"
            href="tel:88005553535"
          >
            88005553535
          </a>
        </address>
        <p
          class="header__contacts-feedback"
          @click="isFormOpen = true"
        >
          Обратная связь
        </p>
      </div>
    </div>
  </header>
</template>

<script>
  import FormFeedback from './FormFeedback';

  export default {
    components: {
      FormFeedback
    },
    data() {
      return {
        isFormOpen: false
      };
    }
  };
</script>

<style>
  @font-face {
    font-family: Rowdies;
    src: url("/fonts/Rowdies-Regular.eot?#iefix") format("embeddedopentype"),
         url("/fonts/Rowdies-Regular.woff") format("woff"),
         url("/fonts/Rowdies-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: Rowdies;
    src: url("/fonts/Rowdies-Bold.eot?#iefix") format("embeddedopentype"),
         url("/fonts/Rowdies-Bold.woff") format("woff"),
         url("/fonts/Rowdies-Bold.ttf") format("truetype");
    font-weight: bold;
    font-style: normal;
  }

  .header {
    color: #777;
    background-color: #dcdcdc;
  }

  .header .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 40px;
    padding-bottom: 40px;
  }

  .header__company {
    display: flex;
    align-items: center;
  }

  .header__company-logo {
    width: 85px;
    height: 85px;
    margin-right: 10px;
  }

  .header__company-name {
    font-size: 1.3em;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .header__contacts-link {
    display: block;
    font-family: Rowdies, sans-serif;
    font-weight: bold;
    font-size: 1.5em;
    text-decoration: none;
    margin-bottom: 8px;
  }

  .header__contacts-feedback {
    float: right;
    cursor: pointer;
    font-weight: bold;
    border-bottom: 2px dashed #777;
  }
</style>
