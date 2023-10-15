describe("sumPaymentTotal", function() {
  beforeEach(function() {
    let allPayments = {
      'payment1': { billAmt: 100, tipAmt: 20 },
      'payment2': { billAmt: 50, tipAmt: 10 }
    };
  });

  it("should calculate the total for the specified payment type", function() {
    expect(sumPaymentTotal('payment1')).toEqual(120);
    expect(sumPaymentTotal('payment2')).toEqual(60);
  });

  afterEach(function() {
    allPayments = {};
  });
});



describe("calculateTipPercent", function() {
  it("should correctly calculate the tip percentage", function() {
    expect(calculateTipPercent(200, 20)).toEqual(10);
    expect(calculateTipPercent(175, 15)).toEqual(9);
    expect(calculateTipPercent(80, 20)).toEqual(25);
  });
});

describe("appendTd", function() {

  beforeEach(function() {
    tr = document.createElement('tr');
  });

  it("should append a td with the given value to the tr", function() {
    appendTd(tr, '1234');
    expect(tr.children.length).toEqual(1);
    expect(tr.children[0].innerText).toEqual('1234');
  });

  afterEach(function() {
    tr = null;
  });
});






