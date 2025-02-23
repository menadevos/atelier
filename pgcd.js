let a = parseInt(prompt("Veuillez entrer la valeur de a :"));
let b = parseInt(prompt("Veuillez entrer la valeur de b :"));
while (b != 0) {
    let r = a % b;
    a = b;
    b = r;
}
alert(`Le PGCD entre les deux nombres est : ${a}`);
document.getElementById('pid').textContent = `Le PGCD DE  deux nombres fournis  est : ${a}`;