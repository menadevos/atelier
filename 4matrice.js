
function affiche(mat) {
    mat.forEach(row => console.log(row.join(' ')));
}


function additionnermats(mat1, mat2) {
    const n = mat1.length;
    const res = Array.from({ length: n }, () => Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res[i][j] = mat1[i][j] + mat2[i][j];
        }
    }
    return res;
}


function soustrairemats(mat1, mat2) {
    const n = mat1.length;
    const res = Array.from({ length: n }, () => Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res[i][j] = mat1[i][j] - mat2[i][j];
        }
    }
    return res;
}


function multipliermats(mat1, mat2) {
    const n = mat1.length;
    const res = Array.from({ length: n }, () => Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                res[i][j] += mat1[i][k] * mat2[k][j];
            }
        }
    }
    return res;
}


function transposermat(mat) {
    const n = mat.length;
    const res = Array.from({ length: n }, () => Array(n).fill(0));
    
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            res[j][i] = mat[i][j];
        }
    }
    return res;
}


const mat1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const mat2 = [
    [9, 8, 7],
    [6, 5, 4],
    [3, 2, 1]
];

console.log("mat 1:");
affiche(mat1);

console.log("mat 2:");
affiche(mat2);

console.log("Addition des matrices:");
affiche(additionnermats(mat1, mat2));

console.log("Soustraction des matrices:");
affiche(soustrairemats(mat1, mat2));

console.log("Multiplication des matrices:");
affiche(multipliermats(mat1, mat2));

console.log("Transposition de la matrice 1:");
affiche(transposermat(mat1));
