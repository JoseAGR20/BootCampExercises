
it('should calculate the monthly rate correctly', function () {
  // ...
  const values = {
    amount: 38000,
    years: 6,
    rate: 4
  };
  expect(calculateMonthlyPayment(values)).toEqual('594.52');
});

it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 5000,
    years: 1,
    rate: 2.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('423.01');
});

/// etc
