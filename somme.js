let somme = function() {
    let a = parseInt(prompt("Entrez un nombre entier :"));
    let b, r;
    let sum = 0; 
    do {
        r = a % 10; 
        sum += r;   
        a = Math.floor(a / 10);
        
    } while (a != 0);   

  
    alert(`La somme des chiffres est : ${sum}`);
}


somme();
