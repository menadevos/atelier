function binaire(decimal) {
    if (decimal === 0) {
        return "";
    }
    return binaire(Math.floor(decimal / 2)) + (decimal % 2);
}

let dec = parseInt(prompt("Entrez un nombre décimal :"));
if (dec === 0) {
    alert("Le nombre binaire de 0 est : 0");
} else {
    let bin = binaire(dec);
    alert(`Le nombre binaire de ${dec} est : ${bin}`);
}
