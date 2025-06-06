function addNum():void{
let n1=(document.getElementById("num1") as HTMLInputElement).value;
let n2=(document.getElementById("num2") as HTMLInputElement).value;
let res1=Number(n1)+Number(n2);

const outputelement = document.getElementById("result") as HTMLInputElement;
outputelement.innerText = res1.toString();
alert("Sum of " + n1 + " and " + n2 + " is: " + res1);

}