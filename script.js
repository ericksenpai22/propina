document.addEventListener('DOMContentLoaded', function() {
    const totalInput = document.getElementById('total');
    const percentageSelect = document.getElementById('percentage');
    const calculateButton = document.getElementById('calculate');
    const tipAmount = document.getElementById('tipAmount');
    const totalAmount = document.getElementById('totalAmount');

    calculateButton.addEventListener('click', function() {
        const total = parseFloat(totalInput.value);
        const selectedPercentage = parseFloat(percentageSelect.value);

        let tip = total * (selectedPercentage / 100);
        let totalWithTip = total + tip;

        tipAmount.textContent = `$${tip.toFixed(2)}`;
        totalAmount.textContent = `$${totalWithTip.toFixed(2)}`;
    });
});
