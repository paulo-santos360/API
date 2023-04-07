const addressForm = document.querySelector("#address-form");
const cepInput = document.querySelector("#cep");
const addressInput = document.querySelector("#address");
const cityInput = document.querySelector("#city");
const neighborhoodInput = document.querySelector("#neighborhood");
const regionInput = document.querySelector("#region");
const formInputs = document.querySelectorAll("[data-input]");
/* Selecionou os input primeiro Todos tem o data-input menos o input Cep*/

const closeButton = document.querySelector("#close-message");

//Validação do input cep
cepInput.addEventListener("keypress", (e) => {
  const onlyNumbers = /[0-9]|\./;
  const key = String.fromCharCode(e.keyCode);

  console.log(key);
  console.log(onlyNumbers.test(key));

  // allow only numbers
  if (!onlyNumbers.test(key)) {
    e.preventDefault();
    return;
  }
});