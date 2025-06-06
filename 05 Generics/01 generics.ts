//funtion identity<T>(arg: T): T {
//    return arg;
//}
//generic allows us to create a function that can work with any type

function display<T>(arg: T): void {
    console.log(arg);
}
display<string>("Hello, World!");
display<number>(42);
display<boolean>(true);    