<script setup>

</script>

<template>
 <main>
      <h1>Рассчитайте стоимость Вашего потолка онлайн!</h1>
      <div class="navigation">
          <button class="selected">Комната №1</button>
          <button><i class="fa-solid fa-plus"></i> Добавить комнату</button>
      </div>
      <div class="wrapper">
          <div class="content">
              <div class="content__group">
                  <div>
                      <p>Площадь помещения: </p>
                      <div class="content__input">
                          <div>
                              <button class="minus-button"><i class="fa-solid fa-minus"></i></button>
                              <input id="area" class="input-number" type="text" value="10" min="1" max="1000">
                              <p class="tooltip">м²</p>
                              <button class="plus-button"><i class="fa-solid fa-plus"></i></button>
                          </div>
                      </div>
                  </div>
                  <div>
                      <p>Количество углов: </p>
                      <div class="content__input">
                          <div>
                              <button class="minus-button"><i class="fa-solid fa-minus"></i></button>
                              <input id="corners" class="input-number" type="text" value="4"  min="1" max="50">
                              <p class="tooltip">м²</p>
                              <button class="plus-button"><i class="fa-solid fa-plus"></i></button>
                          </div>
                      </div>
                  </div>
              </div>
              <div class="content__group">
                  <div>
                      <p>Фактура потолка: </p>
                      <div class="content__select">
                          <div>
                              <select id="texture">
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
                              <select id="color">
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
                  <p class="sum" id="result"></p>
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
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
select::-ms-expand {
  display: none;
}
html {
  font-size: 16px;
}
html,
body {
  overflow-x: hidden;
}
@font-face {
  font-family: 'Futura PT Medium';
  font-style: normal;
  font-weight: normal;
  src: local('Futura PT Medium'), url('../fonts/FuturaCyrillicMedium.woff') format('woff');
}
:root {
  --primary: #bf3266;
  --secondary: rgba(183, 186, 203, 0.20);
  --secondary-dark: rgba(183, 186, 203, 0.40);
  --black: #000000;
  --white: #ffffff;
}
body {
  font-family: 'Futura PT Medium';
  background: url("./components/icons/bg.png") no-repeat;
  background-color: var(--white);
  background-size: cover;
  min-height: 100dvh;
  display: grid;
  place-content: center;
}
main {
  max-width: 1920px;
  margin: 0 auto;
  padding: 5px 10px;
}
h1 {
  color: var(--black);
  font-size: 48px;
  margin-bottom: 38px;
  font-weight: 500;
}
.navigation {
  display: flex;
}
.navigation button {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  background: var(--secondary);
  padding: 18px 20px;
  font-size: 18px;
  border: none;
  outline: none;
}
.navigation button i {
  border: 2px var(--black) solid;
  border-radius: 100%;
  padding: 2px;
  font-size: 12px;
}
.navigation button.selected {
  background: var(--white);
  box-shadow: 0px 4px 54.85px 0px rgba(133, 133, 133, 0.25);
}
.wrapper {
  background: var(--white);
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 4px 54.95px 0px rgba(133, 133, 133, 0.25);
}
.wrapper img {
  object-fit: cover;
  width: 750px;
  height: 481px;
}
.content {
  padding: 40px;
}
.content__group {
  display: flex;
  gap: 30px;
}
.content__group p {
  font-size: 18px;
  margin-bottom: 12px;
}
.content__group:first-child {
  margin-bottom: 35px;
}
.content__input,
.content__select {
  width: 280px;
  background-color: var(--secondary);
  font-size: 18px;
  padding: 10px;
}
.content__input button {
  cursor: pointer;
  background: var(--secondary-dark);
  outline: none;
  border: none;
  padding: 10px 12px;
  font-size: 18px;
}
.content__select select {
  padding: 10px;
  appearance: none;
  outline: none;
  border: 0;
  box-shadow: none;
  flex: 1;
  color: var(--black);
  background-color: transparent;
  background-image: none;
  cursor: pointer;
  font-size: 18px;
}
.content__select i {
  position: absolute;
  right: 0;
  pointer-events: none;
  z-index: 10;
  padding: 10px 12px;
  color: var(--white);
  background: var(--primary);
}
.content__input div,
.content__select div {
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content__price {
  display: flex;
  align-items: center;
  margin: 35px 0;
  gap: 4px;
}
.content__input div input {
    background: transparent;
    border: 0;
    text-align: center;
    font-family: 'Futura PT Medium';
    font-size: 18px;
    font-weight: 400;
    width: 100px;
    min-width: none;
    outline: 0;
}
.content__price h4 {
  font-size: 36px;
  font-weight: 500;
}
.content__price p {
  font-size: 18px;
}
.content__price h4 span {
  color: var(--primary);
}
.content__btns {
  display: flex;
  gap: 35px;
}
.content__btns button {
  border: 1px solid var(--primary);
  background: transparent;
  font-size: 18px;
  font-weight: 500;
  padding: 20px 35px;
  border-radius: 5px;
  cursor: pointer;
}
.content__btns .primary {
  border: none;
  overflow: hidden;
  position: relative;
  color: var(--white);
  background: var(--primary);
}
.sum{
margin-left: 20px;
top: 20px;
font-size: 18px;
}

.tooltip {
    position: absolute;
    right: 90px;
    top: 8px;
}

.content__btns .primary::after {
  content: "?";
  position: absolute;
  top: 0;
  right: 0;
  background: var(--black);
  padding: 2px 7px;
}
.content__btns .secondary {
  color: var(--primary);
}
@media (max-width: 1440px) {
  .wrapper img {
    width: 400px;
  }
}
@media (max-width: 1080px) {
  .wrapper img {
    width: 250px;
  }
}
@media (max-width: 920px) {
  body {
    background: none;
  }
  .wrapper {
    justify-content: center;
  }
  .wrapper img {
    display: none;
  }
}
@media (max-width: 680px) {
  h1 {
    font-size: 26px;
  }
  button {
    font-size: 16px !important;
  }
  .content {
    padding: 20px 10px;
  }
  .content__price {
    flex-direction: column;
    align-items: start;
  }
  .content__btns {
    gap: 10px;
  }
  .content__btns button {
    padding: 15px 25px;
    font-size: 12px !important;
  }
  .content__price h4 {
    font-size: 26px;
  }
  .wrapper {
    display: block;
    background: none;
    box-shadow: none;
  }
  .content__group {
    width: 100%;
    display: block;
  }
  .content__group:first-child {
    margin-bottom: 0;
  }
  .content__input,
  .content__select {
    width: 100%;
  }
  .content__group p {
    margin-top: 20px;
  }
  .tooltip {
    top: -12px;
  }
}
</style>
