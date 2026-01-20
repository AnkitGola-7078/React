//Shopping Cart → only price or item name  niklane ke liye
const cart = [
  { item: "Laptop", price: 50000 },
  { item: "Mouse", price: 1500 },
  { item: "Keyboard", price: 2500 }
];

const prices = cart.map(product => product.price);
console.log(prices); // [50000, 1500, 2500]

// map() का use array को transform करने के लिए होता है।
// Real life use cases:
// - Shopping cart से सिर्फ prices निकालना
// - Emails से subjects लेना
// - Movies से titles लेना
// - Discounts या calculations apply करना
// - User data से full names बनाना
