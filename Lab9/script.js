const exchangeArray = [{'name': 'USD', 'value': 1}, {'name': 'EUR', 'value': 0.88}, {'name': 'POUND', 'value': 0.75}, {'name': 'WON', 'value': 1433}, {'name': 'YEN', 'value': 142}, {'name': 'YAN', 'value': 7.31}, {'name': 'MNT', 'value': 3537}];

const amountInput = document.getElementById('amount');
const fromCurrencySelect = document.getElementById('fromCurrency');
const toCurrencySelect = document.getElementById('toCurrency');
const resultAmountSpan = document.getElementById('resultAmount');

function populateCurrencies() {
    exchangeArray.forEach(currency => {
        const fromOption = document.createElement('option');
        fromOption.value = currency.value;
        fromOption.textContent = currency.name;
        fromCurrencySelect.appendChild(fromOption);

        const toOption = document.createElement('option');
        toOption.value = currency.value;
        toOption.textContent = currency.name;
        toCurrencySelect.appendChild(toOption);
    });
}

function appendToAmount(value) {
    if (amountInput.value === '0') {
        amountInput.value = value;
    } else {
        amountInput.value += value;
    }
}
function tseg(){
    let amount = document.getElementById("amount").value;
    if(!amount.includes(".")) document.getElementById("amount").value = amount + ".";
}

function clearAmount() {
    amountInput.value = '0';
}

function convertCurrency() {
    const amount = parseFloat(amountInput.value);
    const fromValue = parseFloat(fromCurrencySelect.value);
    const toValue = parseFloat(toCurrencySelect.value);

    if (!isNaN(amount)) {
        const result = (amount / fromValue) * toValue;
        resultAmountSpan.textContent = result.toFixed(2);
        resultAmountSpan.textContent = 'Error';
    }
}

populateCurrencies();
