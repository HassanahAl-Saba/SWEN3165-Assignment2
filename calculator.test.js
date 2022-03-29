describe("Calculator", function () {
  // Set up HTML for tests
  beforeEach(function () {
    var fixture = `
    <!-- calculator -->
    <div class="calculator" id='fixture'>
  
      <!-- display -->
      <input type="text" class="display" disabled>
      <!-- keys -->
      <div class="keys">
        <!-- 4 rows of keys -->
        <div class="row">
          <button value='seven' value="7">7</button>
          <button value='eight' value="8">8</button>
          <button value='nine' value="9">9</button>
          <button value='plus' value="+" class="operator">+</button>
        </div>
        <div class="row">
          <button value='four' value="4">4</button>
          <button value='five' value="5">5</button>
          <button value='six' value="6">6</button>
          <button value='minus' value="-" class="operator">-</button>
        </div>
        <div class="row">
          <button value='one' value="1">1</button>
          <button value='two' value="2">2</button>
          <button value='three' value="3">3</button>
          <button value='mult' value="*" class="operator">*</button>
        </div>
        <div class="row">
          <button value='clear' value="C" class="operator">C</button>
          <button value='zero' value="0">0</button>
          <button value='division' value="/" class="operator">/</button>
          <button value='equal_sign' value="=" class="opera~~tor">=</button>
        </div>
      </div>
    
    </div>
    <!-- calculator body ends -->
    `;

    document.body.insertAdjacentHTML("afterbegin", fixture);
  });

  afterEach(function () {
    document.body.removeChild(document.getElementById("fixture"));
  });

  beforeEach(function () {
    window.calculator.init();
  });

  it("Should return 15 for 7 + 8", function () {
    const one = document.getElementById("seven");
    const eight = document.getElementById("eight");
    const plus = document.getElementById("plus");
    const equal_sign = document.getElementById("equal_sign");
    const display = document.querySelector(".display");
    one.click();
    plus.click();
    eight.click();
    equal_sign.click();
    console.log(display.value);

    expect(document.querySelector(".display").value).toBe("15");  
  });


  it("Should return 2 for 3 - 1", function () {
    const one = document.getElementById("three");
    const eight = document.getElementById("one");
    const plus = document.getElementById("minus");
    const equal_sign = document.getElementById("equal_sign");
    const display = document.querySelector(".display");
    one.click();
    plus.click();
    eight.click();
    equal_sign.click();
    console.log(display.value);

    expect(display.value).toBe("2");
  });

  it("Should return 3 for 3 * 1", function () {
    const one = document.getElementById("three");
    const eight = document.getElementById("one");
    const plus = document.getElementById("mult");
    const equal_sign = document.getElementById("equal_sign");
    const display = document.querySelector(".display");
    one.click();
    plus.click();
    eight.click();
    equal_sign.click();
    console.log(display.value);

    expect(display.value).toBe("3");
  });

  it("Should return 3 for 3 / 1", function () {
    const one = document.getElementById("three");
    const eight = document.getElementById("one");
    const plus = document.getElementById("division");
    const equal_sign = document.getElementById("equal_sign");
    const display = document.querySelector(".display");
    one.click();
    plus.click();
    eight.click();
    equal_sign.click();
    console.log(display.value);

    expect(display.value).toBe("3");
  });

  

});
