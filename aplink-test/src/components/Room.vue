<template>
    <div class="content">
      <div class="content__group">
        <div>
          <p>Площадь помещения: </p>
          <div class="content__input">
            <div>
              <button class="minus-button" @click="decrementArea"><i class="fa-solid fa-minus"></i></button>
              <input :value="area" @input="updateArea($event.target.value)" class="input-number" type="text" min="1" max="1000">
              <p class="tooltip">м²</p>
              <button class="plus-button" @click="incrementArea"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>
        <div>
          <p>Количество углов: </p>
          <div class="content__input">
            <div>
              <button class="minus-button" @click="decrementCorners"><i class="fa-solid fa-minus"></i></button>
              <input :value="corners" @input="updateCorners($event.target.value)" class="input-number" type="text" min="1" max="50">
              <p class="tooltip">м²</p>
              <button class="plus-button" @click="incrementCorners"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div class="content__group">
        <div>
          <p>Фактура потолка: </p>
          <div class="content__select">
            <div>
              <select :value="texture" @change="updateTexture($event.target.value)">
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
              <select :value="color" @change="updateColor($event.target.value)">
                <option value="white">Белый</option>
                <option value="colorful">Цветной</option>
              </select>
              <i class="fa-solid fa-chevron-down"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
const props = defineProps({
  area: Number,
  corners: Number,
  texture: String,
  color: String
});

const emit = defineEmits(['update:area', 'update:corners', 'update:texture', 'update:color', 'delete:room']);

const incrementArea = () => {
  emit('update:area', props.area + 1);
};

const decrementArea = () => {
  if (props.area > 1) {
    emit('update:area', props.area - 1);
  }
};

const incrementCorners = () => {
  emit('update:corners', props.corners + 1);
};

const decrementCorners = () => {
  if (props.corners > 1) {
    emit('update:corners', props.corners - 1);
  }
};

const updateArea = (value) => {
  emit('update:area', parseInt(value));
};

const updateCorners = (value) => {
  emit('update:corners', parseInt(value));
};

const updateTexture = (value) => {
  emit('update:texture', value);
};

const updateColor = (value) => {
  emit('update:color', value);
};

const deleteRoom = () => {
  emit('delete:room');
};
</script>
  <style scoped>
  /* Ваши стили для компонента Room.vue */
  </style>