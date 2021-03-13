const readline = require('readline');

var products = [
    {
        name: 'Apple',
        price: 20,
        tax: 1,
        isImported: false
    },
    {
        name: 'Toy Car',
        price: 100,
        tax: 1,
        isImported: false
    },
    {
        name: 'Banana',
        price: 10,
        tax: 1,
        isImported: false
    },
    {
        name: 'Imported Wine',
        price: 2000,
        tax: 600,
        isImported: true
    }
];

var cart = [];
var totalTaxablePrice = 0;
var totalNonTaxablePrice = 0;
var totalTax = 0;

var discount = 5; // percent
var importedDuty = 12; // percent
var cess = 4; // percent

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



rl.on('line', (input) => {
    var productName = input.substring(0, input.lastIndexOf(" ") + 1).trim();
    var quantity = parseInt(input.substring(input.lastIndexOf(" ") + 1, input.length).trim());

    if (quantity > 0) {

        var found = {};
        found = products.find(function (element) {
            return element.name.toLowerCase() == productName.toLowerCase();
        });
        if (found) {
            found.quantity = quantity;
            var nonTaxablePrice = quantity * found.price;
            var cost = nonTaxablePrice + found.tax;

            if (found.isImported) {
                var importDutyForProd = (nonTaxablePrice * importedDuty / 100);
                cost += importDutyForProd;
                found.importDuty = importDutyForProd;
            }
            found.cost = cost;

            totalTax += found.tax;
            totalTaxablePrice += found.cost;
            totalNonTaxablePrice += nonTaxablePrice;

            cart.push(found);
        } else {
            console.log('Product out of stock');
        }
    } else {
        console.log('Please enter proper quantity');
    }
});


rl.on('close', (input) => {
    displayCart(cart);
    displayTotal();
});


function displayCart(cart) {
    console.log('\nSelected Products\n');
    for (c of cart) {
        for (const [key, value] of Object.entries(c)) {
            if (key != 'isImported') console.log(`${key}: ${value}`);
        }
        console.log('\n');
    }
}

function displayTotal() {
    var applicableCess = totalTax * cess / 100;
    var grandTotal = totalTaxablePrice + applicableCess;
    var discountProd = 0;
    if (totalNonTaxablePrice > 5000) {
        discountProd = (totalNonTaxablePrice * discount / 100);
        grandTotal -= discountProd;
    }
    console.log('Total Discount:' + discountProd);
    console.log('Total:' + totalTaxablePrice);
    console.log('Cess:' + applicableCess);
    console.log('Grand Total:' + grandTotal);
}