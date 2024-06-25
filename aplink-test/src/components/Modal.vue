<template>
    <div v-if="isOpen" class="modal">
      <div class="modal-content">
        <span class="close" @click="close">&times;</span>
        <h2>Оформление заказа</h2>
        <form @submit.prevent="submitForm">
          <label for="email">Почта:</label>
          <input type="email" id="email" name="email" v-model="email" required>
          <label for="phone">Телефон:</label>
          <input type="tel" id="phone" name="phone" v-model="phone" required>
          <button type="submit" class="primary">Подтвердить</button>
        </form>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, defineEmits, defineProps } from 'vue';
  
  const props = defineProps({
    isOpen: Boolean
  });
  
  const emit = defineEmits(['close', 'submit']);
  
  const email = ref('');
  const phone = ref('');
  
  const close = () => {
    emit('close');
  };
  
  const submitForm = () => {
    emit('submit', { email: email.value, phone: phone.value });
    close();
  };
  </script>
  
  <style scoped>
  .modal {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .modal-content {
    background-color: var(--white);
    margin: auto;
    padding: 20px;
    border: 1px solid var(--primary);
    width: 80%;
    max-width: 500px;
    box-shadow: 0px 4px 54.95px 0px rgba(133, 133, 133, 0.25);
    position: relative;
  }
  
  .close {
    color: var(--black);
    position: absolute;
    top: 10px;
    right: 25px;
    font-size: 35px;
    font-weight: bold;
    cursor: pointer;
  }
  
  .close:hover,
  .close:focus {
    color: var(--primary);
    text-decoration: none;
    cursor: pointer;
  }
  
  .modal-content h2 {
    margin-bottom: 20px;
  }
  
  .modal-content form {
    display: flex;
    flex-direction: column;
  }
  
  .modal-content form label {
    margin-bottom: 5px;
  }
  
  .modal-content form input {
    margin-bottom: 15px;
    padding: 10px;
    font-size: 16px;
    border: 1px solid var(--secondary-dark);
    border-radius: 5px;
  }
  </style>