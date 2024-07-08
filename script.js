function separarParesImpares(n) {
    let pares = [];
    let impares = [];

    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            pares.push(i);
        } else {
            impares.push(i);
        }
    }

    return { pares, impares };
}

// Usar la función para separar pares e impares hasta el número 10
let resultado = separarParesImpares(10);
console.log("Números Pares:", resultado.pares); // [2, 4, 6, 8, 10]
console.log("Números Impares:", resultado.impares); // [1, 3, 5, 7, 9]