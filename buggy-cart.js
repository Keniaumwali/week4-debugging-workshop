
const cart = [
    { name: "Notebook", price: "1500", qty: 2 },
    { name: "Pen", price: 300, qty: 5 },
    { name: "Bag", price: 12000, qty: 1 },
];

function getSubtotal(items) {
    let subtotal = 0;
    // Bug 1 fixed: The <= condition allowed i to equal items.length,
// causing items[i] to be undefined. I used a breakpoint and
// inspected i and items.length in the Scope panel.
   for (let i = 0; i < items.length; i++) {
        subtotal += items[i].price * items[i].qty;
    }
    return subtotal;
}

function getDiscount(subtotal) {
    // Bug 2 fixed: The 10% condition was checked before the 20% condition.
// I inspected subtotal and tested the conditions using a breakpoint.
    if (subtotal > 20000) return 0.2;
    else if (subtotal > 10000) return 0.1;
    return 0;
}

// Bug 3 fixed: discount is a rate, not a money amount.
// I inspected subtotal and discount in the Scope/Watch panels.
function getTotal(items) {
    const subtotal = getSubtotal(items);
    const discount = getDiscount(subtotal);
    const total = subtotal - subtotal * discount;
    return total;
}

console.log(getTotal(cart));
