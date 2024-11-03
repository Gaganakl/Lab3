document.addEventListener("DOMContentLoaded", function () {
    const tipForm = document.getElementById("tipForm");
    const billTotal = document.getElementById("billTotal");
    const tipPercentage = document.getElementById("tipPercentage");
    const tipRange = document.getElementById("tipRange");
    const tipAmount = document.getElementById("tipAmount");
    const totalBill = document.getElementById("totalBill");
    const currencySelect = document.getElementById("currency");

    const conversionRates = {
        USD: 1,
        INR: 84.07,
        JPY: 149.34,
    };

    tipForm.addEventListener("input", updateTip);

    function updateTip() {
        const billValue = parseFloat(billTotal.value);
        const tipPercent = parseFloat(tipRange.value);
        
        if (isNaN(billValue) || billValue < 0) {
            alert("Please enter a valid positive number for the bill total.");
            tipAmount.value = "";
            totalBill.value = "";
            return;
        }

        tipPercentage.value = tipPercent;

        const tipValue = (billValue * tipPercent) / 100;
        const totalValue = billValue + tipValue;

        const selectedCurrency = currencySelect.value;
        const convertedTip = tipValue * conversionRates[selectedCurrency];
        const convertedTotal = totalValue * conversionRates[selectedCurrency];

        tipAmount.value = convertedTip.toFixed(2);
        totalBill.value = convertedTotal.toFixed(2);
    }

    currencySelect.addEventListener("change", updateTip);
});
