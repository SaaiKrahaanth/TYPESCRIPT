function getFirstElement<T>(arr: T[]): T | undefined {
    return arr[0];
}
var arr:number[]=[1,2,3];
var arr2:string[]=["a","b","c"];
console.log(getFirstElement(arr)); // Output: 1
console.log(getFirstElement(arr2)); // Output: "a"