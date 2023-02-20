// Что не так с этим тестом?

it("Возводит x в степень n", function() {
    let x = 5;
  
    let result = x;
    assert.equal(pow(x, 1), result);
  
    result *= x;
    assert.equal(pow(x, 2), result);
  
    result *= x;
    assert.equal(pow(x, 3), result);
  });

// my answer
// разбить тест на несколько блоков it 
// описать входные и выходные данные.