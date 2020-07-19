<template>
  <main class="main">
    <div class="main__catalog-products">
      <CatalogProduct
        v-for="index in 5"
        :key="index"
      />
    </div>
    <ul class="main__pagination">
      <li class="main__pagination-item">
        <a
          class="main__pagination-link"
          href="#"
        >
          1
        </a>
      </li>
      <li class="main__pagination-item">
        <a
          class="main__pagination-link"
          href="#"
        >
          2
        </a>
      </li>
      <li class="main__pagination-item">
        <a
          class="main__pagination-link main__pagination-link--selected"
          href="#"
        >
          3
        </a>
      </li>
      <li class="main__pagination-item">
        <a
          class="main__pagination-link"
          href="#"
        >
          4
        </a>
      </li>
      <li class="main__pagination-item">
        <a
          class="main__pagination-link"
          href="#"
        >
          5
        </a>
      </li>
      <li class="main__pagination-item">
        <a
          class="main__pagination-link"
          href="#"
        >
          6
        </a>
      </li>
      <li class="main__pagination-item">
        <a
          class="main__pagination-link"
          href="#"
        >
          7
        </a>
      </li>
    </ul>
    <div class="main__bottom-info">
      <p class="main__bottom-info-text">Компания «Пиксель Плюс» существует более 6 лет, за это время мы принимали участие в разработке более чем 700 сайтов, поэтому можем уверенно называть себя профессионалами. На данный момент наш коллектив состоит из более чем 30 сотрудников работающих в двух офисах в Москве и Зеленограде.характерные для этого жанра мотивы: неразделённой любви, ухода молодости, угасания души.</p>
      <p class="main__bottom-info-text">Одним из основных направлений работ нашей компании является поисковое продвижение сайтов, на данной момент мы работаем с более чем 150 постоянными клиентами по более чем 11 000 поисковым запросам. При этом в работе основной акцент мы делаем на качестве работ, а так же применяем собственные уникальные разработки в области SEO продвижения. На данный момент отдел SEO состоит из 9 человек под руководством ведущего специалиста, преимущественно работающих в нашем московском офисе.</p>
    </div>
  </main>
</template>

<script>
  import CatalogProduct from './CatalogProduct';

  export default {
    components: {
      CatalogProduct
    }
  };
</script>

<style>
  .main__catalog-products {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 15px;
  }

  .main__pagination {
    display: flex;
    justify-content: center;
    align-items: baseline;
    margin-top: 30px;
  }

  .main__pagination-item:not(:last-child) {
    margin-right: 20px;
  }

  .main__pagination-link {
    text-decoration: none;
  }

  .main__pagination-link--selected, .main__pagination-link:not(.main__pagination-link--selected):hover {
    font-size: 1.3em;
    font-weight: bold;
  }

  .main__bottom-info {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 40px;
    margin-top: 60px;
    margin-bottom: 198px;
    padding-top: 30px;
    border-top: 1.5px solid #777;
  }
</style>
