const initialPrice = document.querySelector("#initial-price");
const quantityOfStocks = document.querySelector("#quantity");
const currentPrice = document.querySelector("#current-price");
const checkButton = document.querySelector("#check-btn");
const outputText = document.querySelector("#output")

checkButton.addEventListener('click', submitHandler);

function submitHandler() {
    var initialPriceRef = Number(initialPrice.value);
    var currentPriceRef = Number(currentPrice.value);
    var quantityRef = Number(quantityOfStocks.value);
    if (!initialPriceRef || !currentPriceRef || !quantityRef) {
        showOutput(`Please fill in all the fields`);
    } else {
        calculateProfitOrLoss(initialPriceRef, currentPriceRef, quantityRef);
    }
}

function stockValueCalculator(stockPrice, quantity) {
    return stockPrice * quantity;
}

function calculateProfitOrLoss(initialPriceRef, currentPriceRef, quantityRef) {
    var initialValue = stockValueCalculator(initialPriceRef, quantityRef);
    var currentValue = stockValueCalculator(currentPriceRef, quantityRef);

    if (initialValue > currentValue) {
        var loss = initialValue - currentValue;
        var lossPercentage = (loss / initialValue) * 100;
        showOutput(`Whoops! Your loss is ${Number.parseFloat(loss).toFixed(2)} and loss percentage is ${Number.parseFloat(lossPercentage).toFixed(2)}% 😢`);
    } else if (currentValue > initialValue) {
        var profit = currentValue - initialValue;
        var profitPercentage = (profit / initialValue) * 100;
        showOutput(`Yay! Your profit is ${Number.parseFloat(profit).toFixed(2)} and profit percentage is ${Number.parseFloat(profitPercentage).toFixed(2)}% 🚀`);
    } else {
        showOutput(`No pain no gain and no gain no pain 🙂`);
    }
}

function showOutput(message) {
    outputText.innerText = message;
}