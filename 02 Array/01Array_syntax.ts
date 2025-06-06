let fruits: string[] = ["Apple", "Banana", "Cherry"];
fruits.forEach((fruit) => {
    console.log(fruit.toUpperCase());
});

for(let i in fruits) {// Using 'for...in' to iterate over indices
    console.log(fruits[i]);
}
for(let fruit of fruits) {// Using 'for...of' to iterate over values
    console.log(fruit);
}
