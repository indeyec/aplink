<script>
import jsonData from './prices.json'


export default {
  data() {
    return {
      currentRoom: null,
      area: 10,
      corners: 4,
      color: 'white',
      texture: 'pvc',
      result: 0,
      pricesData: jsonData.prices,
     
    };
  },
  methods: {
    calculateCost() {
      let area = parseFloat(this.area);
      let corners = parseInt(this.corners);
      let color = this.color;
      let texture = this.texture;

      if (!isNaN(area) && !isNaN(corners) && area >= 1 && corners >= 1) {
        let price_per_sqm = this.pricesData[texture][color];
        let corner_price = this.pricesData["corner_price"];
        let price = price_per_sqm * area + corner_price * corners;
        this.result = price;
      } else {
        this.result = 0;
      }
    },
    
    decreaseArea() {
      if (this.area > 10) {
        this.area--;
        this.calculateCost();
      }
    },
    increaseArea() {
      this.area++;
      this.calculateCost();
    },
    decreaseCorners() {
      if (this.corners > 1) {
        this.corners--;
        this.calculateCost();
      }
    },
    increaseCorners() {
      this.corners++;
      this.calculateCost();
    }
  },
  watch: {
    color: function() {
      this.calculateCost();
    },
    texture: function() {
      this.calculateCost();
    }
  },
  mounted() {
    this.calculateCost();
  },
  computed: {
    totalCost() {
      if (this.result !== 0) {
        let rubles = this.result % 100;
        let word = 'рублей';
        if (rubles === 1 || rubles === 21 || rubles === 31 || rubles === 41 || rubles === 51 || rubles === 61 || rubles === 71 || rubles === 81 || rubles === 91) {
          word = 'рубль';
        } else if (rubles >= 2 && rubles <= 4 || rubles >= 22 && rubles <= 24 || rubles >= 32 && rubles <= 34 || rubles >= 42 && rubles <= 44 || rubles >= 52 && rubles <= 54 || rubles >= 62 && rubles <= 64 || rubles >= 72 && rubles <= 74 || rubles >= 82 && rubles <= 84 || rubles >= 92 && rubles <= 94) {
          word = 'рубля';
        }
        return `Стоимость натяжного потолка: ${this.result} ${word}`;
      }
      return '';
    }
  }
};

</script>

<template>
 <main>
    <h1>Рассчитайте стоимость Вашего потолка онлайн!</h1>
    <div class="navigation">
      <button v-for="(room, index) in rooms" :key="index" :class="{ selected: selectedRoomIndex === index }" @click="selectRoom(index)">
  Комната №{{ index + 1 }}
</button>
<button @click="addRoom"><i class="fa-solid fa-plus"></i> Добавить комнату</button>
<button @click="deleteRoom" class="delete-room-button">Удалить комнату</button>

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
          <p class="sum">{{ totalCost }}</p>
        </div>
        <div class="content__btns">
          <button class="primary" @click ="openModal">ОФОРМИТЬ ЗАКАЗ</button>
          <button class="secondary">СКАЧАТЬ СМЕТУ</button>
        </div>
      </div>
      <Modal :isOpen="isModalOpen" @close="closeModal" @submit="handleOrderSubmit" />
      <img src="./components/icons/hero.jpg" alt="hero image">
    </div>
  </main>

  
</template>
<script setup>
import { ref } from 'vue';
import Room from './components/Room.vue';
import Modal from './components/Modal.vue';

const isModalOpen = ref(false);

const rooms = ref([{ area: 10, corners: 4, texture: 'pvc', color: 'white' }]);
const selectedRoomIndex = ref(0);

const addRoom = () => {
  rooms.value.push({ area: 10, corners: 4, texture: 'pvc', color: 'white' });
  selectedRoomIndex.value = rooms.value.length - 1;
};

const selectRoom = (index) => {
  selectedRoomIndex.value = index;
};

const updateRoom = (index, key, value) => {
  rooms.value[index][key] = value;
};

const openModal = () => {
  isModalOpen.value = true;
};

const closeModal = () => {
  isModalOpen.value = false;
};

const handleOrderSubmit = (data) => {
  console.log('Order submitted:', data);
  // здесь вы можете обработать отправленные данные
  closeModal();
};
</script>
<style scoped>

</style>
