<template>
    <div class="room">
      <div class="room__content">
        <div>
          <p>Площадь помещения: </p>
          <div class="room__input">
            <div>
              <button class="minus-button" @click="decrementArea"><i class="fa-solid fa-minus"></i></button>
              <input :value="room.area" @input="updateArea($event.target.value)" class="input-number" type="text" min="1" max="1000">
              <p class="tooltip">м²</p>
              <button class="plus-button" @click="incrementArea"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>
        <div>
          <p>Количество углов: </p>
          <div class="room__input">
            <div>
              <button class="minus-button" @click="decrementCorners"><i class="fa-solid fa-minus"></i></button>
              <input :value="room.corners" @input="updateCorners($event.target.value)" class="input-number" type="text" min="1" max="50">
              <p class="tooltip">шт</p>
              <button class="plus-button" @click="incrementCorners"><i class="fa-solid fa-plus"></i></button>
            </div>
          </div>
        </div>
      </div>
      <div class="room__delete">
        <button @click="deleteRoom"><i class="fa-solid fa-trash"></i> Удалить комнату</button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps, defineEmits } from 'vue';
  
  const props = defineProps({
    room: Object
  });
  
  const emit = defineEmits(['update:room', 'delete:room']);
  
  const incrementArea = () => {
    emit('update:room', { ...props.room, area: props.room.area + 1 });
  };
  
  const decrementArea = () => {
    if (props.room.area > 1) {
      emit('update:room', { ...props.room, area: props.room.area - 1 });
    }
  };
  
  const incrementCorners = () => {
    emit('update:room', { ...props.room, corners: props.room.corners + 1 });
  };
  
  const decrementCorners = () => {
    if (props.room.corners > 1) {
      emit('update:room', { ...props.room, corners: props.room.corners - 1 });
    }
  };
  
  const updateArea = (value) => {
    emit('update:room', { ...props.room, area: parseInt(value) });
  };
  
  const updateCorners = (value) => {
    emit('update:room', { ...props.room, corners: parseInt(value) });
  };
  
  const deleteRoom = () => {
    emit('delete:room');
  };
  </script>
  
  <style scoped>
    /* Стили для компонента Room.vue */
  </style>