let products:{id:number,title:string,price:number}[]=[
    {
        id:1,
        title:'TV',
        price:3456667
    }
];

// Print the products array
console.log("Products Array:", products);

// Print each product with details
products.forEach((product) => {
  console.log(`ID: ${product.id}, Title: ${product.title}, Price: ${product.price}`);
});