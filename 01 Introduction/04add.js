function addNum() {
    var n1 = document.getElementById("num1").value;
    var n2 = document.getElementById("num2").value;
    var res1 = Number(n1) + Number(n2);
    var outputelement = document.getElementById("result");
    outputelement.innerText = res1.toString();
    alert("Sum of " + n1 + " and " + n2 + " is: " + res1);
}
