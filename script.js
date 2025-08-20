function convert() {
  let amount = document.getElementById("amount").value;
  let from = document.getElementById("from").value;
  let to = document.getElementById("to").value;
  let result = document.getElementById("result");

  let rates = {
    USD: { EUR: 0.9, DZD: 135 },
    EUR: { USD: 1.1, DZD: 150 },
    DZD: { USD: 0.0074, EUR: 0.0066 }
  };

  if (from === to) {
    result.innerText = `✅ Same currency: ${amount} ${from}`;
  } else {
    let converted = amount * rates[from][to];
    result.innerText = `💰 ${amount} ${from} = ${converted.toFixed(2)} ${to}`;
  }
}
document.getElementById('resetBtn').addEventListener('click', () => {
  document.getElementById('amount').value = '';
  document.getElementById('result').innerText = '';
});
