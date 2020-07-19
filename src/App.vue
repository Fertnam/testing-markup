<template>
  <div id="app">
    <div class="wrapper">
      <TheHeader/>
      <TheNavbar/>
      <TheSlider/>
      <TheCatalog/>
      <TheFooter class="wrapper__footer"/>
    </div>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader';
  import TheNavbar from './components/TheNavbar';
  import TheSlider from './components/TheSlider';
  import TheCatalog from './components/TheCatalog';
  import TheFooter from './components/TheFooter';

  export default {
    components: {
      TheHeader,
      TheNavbar,
      TheSlider,
      TheCatalog,
      TheFooter
    }
  };
</script>

<style>
  @import "~reset-css/reset.css";
  @import "~animate.css/animate.min.css";
  @import "https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap";

  * {
    box-sizing: border-box;
    outline: none;
  }

  button {
    border: none;
    cursor: pointer;
  }

  a {
    color: inherit;
    transition-duration: 500ms;
  }

  body {
    font-family: 'PT Sans', sans-serif;
    font-size: 14px;
    line-height: 22px;
  }

  .container {
    width: 980px;
    padding: 10px;
    margin: 0 auto;
  }

  .wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .wrapper__footer {
    flex-grow: 1;
  }
</style>
