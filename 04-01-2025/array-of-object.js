var products = [
    {
        id: 1,
        title: 'TV',
        price: 3456667
    }
];
// Print the products array
console.log("Products Array:", products);
// Print each product with details
products.forEach(function (product) {
    console.log("ID: ".concat(product.id, ", Title: ").concat(product.title, ", Price: ").concat(product.price));
});