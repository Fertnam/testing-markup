<template>
  <BasePopup
    caption="Обратная связь"
    @closePopup="$emit('closePopup')"
  >
    <form
      class="feedback-form"
      @submit.prevent
    >
      <div class="feedback-form__block">
        <label class="feedback-form__label">
          Ваше имя *
          <input
            class="feedback-form__input"
            name="name"
          >
        </label>
      </div>
      <div class="feedback-form__block">
        <label class="feedback-form__label">
          Телефон *
          <input
            class="feedback-form__input"
            name="telephone"
          >
        </label>
      </div>
      <div class="feedback-form__block">
        <label class="feedback-form__label">
          Email *
          <input
            class="feedback-form__input feedback-form__input--error"
            name="email"
            value="Поле обязательно для заполнения"
          >
        </label>
      </div>
      <div class="feedback-form__block">
        <label class="feedback-form__label">
          Сообщение
          <textarea
            class="feedback-form__textarea"
            name="message"
          ></textarea>
        </label>
      </div>
      <button class="feedback-form__button">Отправить</button>
    </form>
  </BasePopup>
</template>

<script>
  import BasePopup from './BasePopup';

  export default {
    components: {
      BasePopup
    }
  };
</script>

<style>
  .feedback-form__block {
    margin-bottom: 18px;
  }

  .feedback-form__input, .feedback-form__textarea {
    width: 100%;
    padding: 10px;
    margin-top: 8px;
    color: #777;
    border: 1.5px solid #c3c3c3;
  }

  .feedback-form__textarea {
    resize: none;
    height: 180px;
  }

  .feedback-form__label {
    display: block;
    text-align: center;
  }

  .feedback-form__button {
    padding: 10px;
    text-transform: uppercase;
    background-color: #777;
    color: #fff;
    font-weight: bold;
    font-size: 1.1em;
    display: block;
    margin: 0 auto;
  }

  .feedback-form__input--error {
    border: 1.5px solid #ff8383;
    color: #dc7f7f;
    font-style: italic;
    box-shadow: 0 0 8px 2px inset #dc7f7f;
  }
</style>
