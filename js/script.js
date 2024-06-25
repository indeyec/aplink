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

  function calculateCost() {
    let area = parseFloat(document.getElementById("area").value);
    let corners = parseInt(document.getElementById("corners").value);
    let color = document.getElementById("color").value;
    let texture = document.getElementById("texture").value;

    console.log("Area:", area);
    console.log("Corners:", corners);
    console.log("Color:", color);
    console.log("Texture:", texture);

    if (!isNaN(area) && !isNaN(corners) && area >= 1 && corners >= 0) {
      let price_per_sqm = data.prices[texture][color];
      let corner_price = data.prices["corner_price"];
      let price = price_per_sqm * area + corner_price * corners;
      console.log("Price:", price);
      document.getElementById("result").textContent = "Стоимость натяжного потолка: " + price + " руб";
      
    } else {
      console.log("Invalid input for area or corners.");
      document.getElementById("result").textContent = "";
     
    }
  }

  calculateCost();

  document.getElementById("area").addEventListener('input', calculateCost);
  document.getElementById("corners").addEventListener('input', calculateCost);
  document.getElementById("color").addEventListener('change', calculateCost);
  document.getElementById("texture").addEventListener('change', calculateCost);

$(document).ready(function() {
    $('.input-number').each(function() {
      const inputNumberElement = $(this);
      const minusButton = inputNumberElement.siblings('.minus-button');
      const plusButton = inputNumberElement.siblings('.plus-button');
  
      minusButton.on('click', function() {
        let value = parseInt(inputNumberElement.val());
        if (!isNaN(value) && value > parseInt(inputNumberElement.attr('min'))) {
          inputNumberElement.val(value - 1);
          console.log("Minus button clicked. Value:", inputNumberElement.val());
        }
        calculateCost()
      });
  
      plusButton.on('click', function() {
        let value = parseInt(inputNumberElement.val());
        if (!isNaN(value) && value < parseInt(inputNumberElement.attr('max'))) {
          inputNumberElement.val(value + 1);
          console.log("Plus button clicked. Value:", inputNumberElement.val());
        }
        calculateCost()
      });
    });
});