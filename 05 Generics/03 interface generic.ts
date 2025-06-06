interface container<T>{
    value:T;
}
const numberbox:container<number> = {
    value:123;
};
const stringbox:container<string> = {
    value:"hello";
};
console.log(numberbox.value); // Output: 123
console.log(stringbox.value); // Output: "hello"