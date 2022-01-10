function sum() {
    let number = Number(document.getElementById("inputNumber").value);
    let total = 0;
    let i;
    for (i = 0; i < number; i++) {
        total += i;
    }
    document.getElementById("result").innerText = "Total is " + total;
}

// let number = Number(prompt("Enter number"));
// let total = 0;
// let i;
// for (i = 0; i < number; i++) {
//     total += i;
// }
// document.getElementById("result").innerText = "Total is " + total;

