document.getElementById("calc").onclick = function (event) {
    event.preventDefault(); 
    var x = parseFloat(document.getElementById("x").value);
    var y = parseFloat(document.getElementById("y").value);
    var res = 0;

    
    var op = document.querySelector('input[name="op"]:checked');

    if (!op) {
        document.getElementById("res").innerHTML = "Please select an operation.";
        return;
    }

    var operation = op.value;

    // Perform the calculation
    switch (operation) {
        case "+":
            res = x + y;
            break;
        case "-":
            res = x - y;
            break;
        case "*":
            res = x * y;
            break;
        case "/":
            res = y !== 0 ? x / y : "Cannot divide by zero!";
            break;
        default:
            res = "Invalid operation";
    }

    // Display the result
    document.getElementById("res").innerHTML = `Result: ${res}`;
};
