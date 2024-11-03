document.addEventListener("DOMContentLoaded", function () {
    const tipForm = document.getElementById("tipForm");
    const billTotal = document.getElementById("billTotal");
    const tipPercentage = document.getElementById("tipPercentage");
    const tipRange = document.getElementById("tipRange");
    const tipAmount = document.getElementById("tipAmount");
    const totalBill = document.getElementById("totalBill");

    tipForm.addEventListener("input", updateTip);

    function updateTip() {
        const billValue = parseFloat(billTotal.value);
        const tipPercent = parseFloat(tipRange.value);
        if (isNaN(billValue) || isNaN(tipPercent)) {
            tipAmount.value = "";
            totalBill.value = "";
        } else {
            const tipValue = (billValue * tipPercent) / 100;
            const totalValue = billValue + tipValue;
            tipAmount.value = tipValue.toFixed(2);
            totalBill.value = totalValue.toFixed(2);
            tipPercentage.value = tipPercent;
        }
    }
});