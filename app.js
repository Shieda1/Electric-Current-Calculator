// https://calculator.swiftutors.com/electric-current-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const electricCurrentRadio = document.getElementById('electricCurrentRadio');
const chargeQuantityRadio = document.getElementById('chargeQuantityRadio');
const timePeriodRadio = document.getElementById('timePeriodRadio');

let electricCurrent;
let chargeQuantity = v1;
let timePeriod = v2;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');

electricCurrentRadio.addEventListener('click', function() {
  variable1.textContent = '(Q) Charge Quantity (coulomb)';
  variable2.textContent = '(t) Time Period (sec)';
  chargeQuantity = v1;
  timePeriod = v2;
  result.textContent = '';
});

chargeQuantityRadio.addEventListener('click', function() {
  variable1.textContent = '(I) Electric Current (amps)';
  variable2.textContent = '(t) Time Period (sec)';
  electricCurrent = v1;
  timePeriod = v2;
  result.textContent = '';
});

timePeriodRadio.addEventListener('click', function() {
  variable1.textContent = '(I) Electric Current (amps)';
  variable2.textContent = '(Q) Charge Quantity (coulomb)';
  electricCurrent = v1;
  chargeQuantity = v2;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(electricCurrentRadio.checked)
    result.textContent = `Electric Current = ${computeElectricCurrent().toFixed(2)} amps`;

  else if(chargeQuantityRadio.checked)
    result.textContent = `Charge Quantity = ${computeChargeQuantity().toFixed(2)} coulomb`;

  else if(timePeriodRadio.checked)
    result.textContent = `Time Period = ${computeTimePeriod().toFixed(2)} sec`;
})

// calculation

function computeElectricCurrent() {
  return Number(chargeQuantity.value) / Number(timePeriod.value);
}

function computeChargeQuantity() {
  return Number(electricCurrent.value) * Number(timePeriod.value);
}

function computeTimePeriod() {
  return Number(chargeQuantity.value) / Number(electricCurrent.value);
}