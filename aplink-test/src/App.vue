<script >
let data = {
  "prices": {
    "pvc": {
      "white": 1390,
      "colorful": 1600
    },
    "fabric": {
      "white": 2250,
      "colorful": 2500
    },
    "corner_price": 100
  }
};

export default {
  data() {
    return {
      area: 0,
      corners: 0,
      color: 'white',
      texture: 'pvc',
      result: 0,
     
    };
  },
  methods: {
    calculateCost() {
      let area = parseFloat(this.area);
      let corners = parseInt(this.corners);
      let color = this.color;
      let texture = this.texture;

      if (!isNaN(area) && !isNaN(corners) && area >= 1 && corners >= 0) {
        let price_per_sqm = data.prices[texture][color];
        let corner_price = data.prices["corner_price"];
        let price = price_per_sqm * area + corner_price * corners;
        this.result = price;
      } else {
        this.result = 0;
      }
      
    },
    
    decreaseArea() {
      if (this.area > 1) {
        this.area--;
        this.calculateCost();
      }
    },
    increaseArea() {
      this.area++;
      this.calculateCost();
    },
    decreaseCorners() {
      if (this.corners > 0) {
        this.corners--;
        this.calculateCost();
      }
    },
    increaseCorners() {
      this.corners++;
      this.calculateCost();
    }
  },
  mounted() {
    this.calculateCost();
  },
  computed: {
    calculatelCost() {
      return this.result !== 0 ? `Стоимость натяжного потолка: ${this.result} руб` : '';
    }
  }
};
</script>

<template>
 <main>
    <h1>Рассчитайте стоимость Вашего потолка онлайн!</h1>
    <div class="navigation">
      <button :class="{ 'selected': currentRoom === 1 }">Комната №1</button>
      <button @click="addRoom"><i class="fa-solid fa-plus"></i> Добавить комнату</button>
    </div>
    <div class="wrapper">
      <div class="content">
        <div class="content__group">
          <div>
            <p>Площадь помещения: </p>
            <div class="content__input">
              <div>
                <button class="minus-button" @click="decreaseArea"><i class="fa-solid fa-minus"></i></button>
                <input class="input-number" type="number" v-model.number="area" min="1" max="1000">
                <p class="tooltip">м²</p>
                <button class="plus-button" @click="increaseArea"><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
          </div>
          <div>
            <p>Количество углов: </p>
            <div class="content__input">
              <div>
                <button class="minus-button" @click="decreaseCorners"><i class="fa-solid fa-minus"></i></button>
                <input class="input-number" type="number" v-model.number="corners" min="1" max="50">
                <p class="tooltip">шт</p>
                <button class="plus-button" @click="increaseCorners"><i class="fa-solid fa-plus"></i></button>
              </div>
            </div>
          </div>
        </div>
        <div class="content__group">
          <div>
            <p>Фактура потолка: </p>
            <div class="content__select">
              <div>
                <select v-model="texture">
                  <option value="pvc">ПВХ</option>
                  <option value="fabric">Тканевый</option>
                </select>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
          <div>
            <p>Цвет потолка: </p>
            <div class="content__select">
              <div>
                <select v-model="color">
                  <option value="white">Белый</option>
                  <option value="colorful">Цветной</option>
                </select>
                <i class="fa-solid fa-chevron-down"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="content__price">
          <h4>Итого:</h4>
          <p class="sum">{{ calculateCost() }}</p>
        </div>
        <div class="content__btns">
          <button class="primary">ОФОРМИТЬ ЗАКАЗ</button>
          <button class="secondary">СКАЧАТЬ СМЕТУ</button>
        </div>
      </div>
      <img src="./components/icons/hero.jpg" alt="hero image">
    </div>
  </main>

  
</template>

<style scoped>

</style>
