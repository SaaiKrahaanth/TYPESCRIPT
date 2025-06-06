class DataHolder<T>{
    private data:T;
    constructor(data:T) {
        this.data = data;
    }
    getData(): T {
        return this.data;
    }

}
const numberHolder = new DataHolder<number>(123);
const stringHolder = new DataHolder<string>("hello");
console.log(numberHolder.getData()); // Output: 123
console.log(stringHolder.getData()); // Output: "hello"