document.getElementById('button').onclick = function() {
    let number = prompt("Veuillez entrer un nombre pour afficher sa table de multiplication :");
    
   
        number = number;
        let resultDiv = document.getElementById('result');
        resultDiv.innerHTML = ""; 

        for (let i = 1; i <= 10; i++) {
            resultDiv.innerHTML += `${number} * ${i} = ${number * i} <br>`;
        }
   
}
