document.addEventListener("DOMContentLoaded", () => {
    const url = "https://currency-rate-exchange-api.onrender.com/all";
    
    const fromCurrency = document.getElementById("fromCurrency");
    const toCurrency = document.getElementById("toCurrency");
    const amountInput = document.getElementById("amount");
    const convertBtn = document.querySelector("#curConverterMain button");
    const container = document.querySelector("#curConverterMain .container");

    const resultText = document.createElement("h2");
    container.appendChild(resultText);

    let exchangeRates = {};

    function populateSelects(rates) {
        fromCurrency.innerHTML = "";
        toCurrency.innerHTML = "";

        const currencyCodes = Object.keys(rates).sort();

        currencyCodes.forEach(code => {
            const upperCode = code.toUpperCase();
            
            const optionFrom = document.createElement("option");
            optionFrom.value = code;
            optionFrom.textContent = upperCode;
            
            const optionTo = document.createElement("option");
            optionTo.value = code;
            optionTo.textContent = upperCode;

            fromCurrency.appendChild(optionFrom);
            toCurrency.appendChild(optionTo);
        });

        if (rates['usd']) fromCurrency.value = 'usd';
        if (rates['rub']) toCurrency.value = 'eur';
    }

    async function fetchRates() {
        convertBtn.disabled = true;
        convertBtn.textContent = "Загрузка...";

        try {
            const response = await fetch(url);
            const data = await response.json();
            
            exchangeRates = data.rates.all; 
            
            populateSelects(exchangeRates);
            
            convertBtn.disabled = false;
            convertBtn.textContent = "Конвертировать";
        } catch (error) {
            console.error("Ошибка при получении данных API:", error);
            resultText.textContent = "Ошибка сети. Не удалось загрузить курсы.";
            resultText.style.color = "#e81123";
        }
    }

    convertBtn.addEventListener("click", () => {
        const amount = parseFloat(amountInput.value);
        const from = fromCurrency.value;
        const to = toCurrency.value;

        if (isNaN(amount) || amount <= 0) {
            resultText.textContent = "Пожалуйста, введите корректную сумму.";
            return;
        }

        const rateFrom = exchangeRates[from];
        const rateTo = exchangeRates[to];

        const result = amount * (rateTo / rateFrom);

        resultText.textContent = `${amount} ${from.toUpperCase()} = ${result.toFixed(2)} ${to.toUpperCase()}`;
        resultText.style.color = "var(--color-text-1)";
    });

    fetchRates();
});