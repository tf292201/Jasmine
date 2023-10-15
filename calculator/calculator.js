window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();

    });
  }
});

function getCurrentUIValues() {
  return values = {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
document.getElementById("loan-amount").value = 100000;
document.getElementById("loan-years").value = 30;
document.getElementById("loan-rate").value = 4;

update();

}

// Get the current values from the UI
// Update the monthly payment
function update() {
  getCurrentUIValues();
  calculateMonthlyPayment(values);
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values)
{

  monthly = Math.round((values.amount * (values.rate / 12 / 100)) / (1 - Math.pow(1 + (values.rate / 12 / 100), -(values.years * 12))) * 100) / 100;
  console.log(monthly);
  updateMonthly(monthly);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  document.getElementById("monthly-payment").textContent = monthly.toString();
}
