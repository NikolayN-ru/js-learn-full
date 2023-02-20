describe("pow", function () {
  //   it("возводит в степень n", function () {
  //     assert.equal(pow(2, 3), 8);
  //     assert.equal(pow(3, 3), 27);
  //   });

  //   it("3 в степени 3 будет 27", function () {
  //     assert.equal(pow(3, 3), 27);
  //   });
  
//   before(() => alert("Тестирование началось – перед тестами"));
//   after(() => alert("Тестирование закончилось – после всех тестов"));

//   beforeEach(() => alert("Перед тестом – начинаем выполнять тест"));
//   afterEach(() => alert("После теста – заканчиваем выполнение теста"));


  function makeTest(x) {
    let expected = x * x * x;
    it(`${x} в степени 3 будет ${expected}`, function () {
      assert.equal(pow(x, 3), expected);
    });
  }

  for (let x = 1; x <= 5; x++) {
    makeTest(x);
  }

  it("для отрицательных n возвращает NaN", function() {
    assert.isNaN(pow(2, -1));
  });

  it("для дробных n возвращает NaN", function() {
    assert.isNaN(pow(2, 1.5));
  });
});
