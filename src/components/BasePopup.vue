<template>
  <div class="popup">
    <div class="popup__container">
      <button
        class="popup__close-button"
        @click="$emit('closePopup')"
      >
        <fa-icon icon="times"/>
      </button>
      <div class="popup__content">
        <h3
          v-if="caption"
          class="popup__caption"
        >
          {{ caption }}
        </h3>
        <slot/>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      caption: {
        type: String
      }
    }
  };
</script>

<style>
  .popup {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    background-color: rgba(119, 119, 119, .5);
  }

  .popup__container {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    max-width: 700px;
    margin: 0 auto;
  }

  .popup__close-button {
    position: relative;
    left: 100%;
    background-color: #777;
    color: #fff;
    font-size: 1.2em;
    padding: 6px 8px;
  }

  .popup__content {
    background-color: #fff;
    padding: 24px 60px;
  }

  .popup__caption {
    color: #777;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 1.7em;
    text-align: center;
    margin-bottom: 30px;
  }
</style>
