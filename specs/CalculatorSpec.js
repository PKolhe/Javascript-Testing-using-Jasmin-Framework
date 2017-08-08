
describe("Calculator", function () {
  var calc;
  var OutputId = "#calc-fixture";

  beforeEach(function () {
    $("body").append($("#template-wrapper").html().replace('-template', ''));
    calc = new Calculator($(OutputId));

    // Custom matcher
    this.addMatchers({
      toBeBetween: function (a, b) {
        return this.actual >= a && this.actual <= b;
      }
    });
  });

  afterEach(function () {
    $("#calc-fixture").remove();
  });

  it("should be able to add 1 plus 1", function () {
    expect(calc.add(1, 1)).toBe(2);
  });

  xit("should be able to add 3 plus 2", function () {
    expect(calc.add(3, 2)).toBe(6);
  });

  it('should be able to divide 6 and 2', function () {
    expect(calc.divide(6, 2)).toBe(3);
  });

  // Usage of Custom Matcher
  it('should be able to divide a rational number', function () {
    expect(calc.divide(1, 3)).toBeBetween(0.3, 0.4);
  });

  // Testing DOM
  it("should be able to add 4 plus 5", function () {
    calc.add(4, 5);
    expect($(OutputId).text()).toBe('9');
  });

  it("should be able to divide 4 into 20", function () {
    calc.divide(20, 4);
    expect($(OutputId).text()).toBe('5');
  });

});
