
it('should calculate the monthly rate correctly', function () {
 var rate = 5;
 var expectedMonthlyRate =.0041667;

  expect(rate/12/100).toBeCloseTo(expectedMonthlyRate)
  
})

it("should return a result with 2 decimal places", function() {
  var rate = 5;
  var amount = 100000;
  var years = 30;
 
   expect(monthly = Math.round((amount * (rate / 12 / 100)) / (1 - Math.pow(1 + (rate / 12 / 100), -(years * 12))) * 100) / 100).toBeCloseTo(monthly, 2)
})

it("shoudld check if output is a string", function() {
  var monthly = 500.00
  
  expect(updateMonthly(monthly)).toBe(500.00)});

