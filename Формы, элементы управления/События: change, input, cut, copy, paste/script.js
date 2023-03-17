// Депозитный калькулятор
{
  /* <form>
  <h2>Депозитный калькулятор</h2>
  <div>
    <label for="deposit">Сумма вклада:</label>
    <input type="number" id="deposit">
  </div>
  <div>
    <label for="interest">Процентная ставка:</label>
    <input type="number" id="interest">
  </div>
  <div>
    <label for="period">Срок (в годах):</label>
    <input type="number" id="period">
  </div>
  <button type="submit">Рассчитать</button>
  <p id="result"></p>
</form> */
}

const form = document.querySelector("form");
const depositInput = document.getElementById("deposit");
const interestInput = document.getElementById("interest");
const periodInput = document.getElementById("period");
const result = document.getElementById("result");
form.addEventListener("submit", calculateDeposit);
function calculateDeposit(event) {
  event.preventDefault();
  const deposit = +depositInput.value;
  const interest = +interestInput.value / 100;
  const period = +periodInput.value;
  const amount = deposit * (1 + interest) ** period;
  const roundedAmount = Math.round(amount * 100) / 100;
  result.textContent = `Сумма вклада через ${period} будет равна ${roundedAmount}`;
}
