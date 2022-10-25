let num = [5, 8, 9, 3, 10, 15];
console.log(`Nosso valor é: ${num}`);
num[3] = 6; /* para acrescentar na ultima posiçao, utilizar num.push(7) */
console.log(`Agora é: ${num}`);
num.push(18);
console.log(`Agora o valor é: ${num}`);
console.log(`O vetor tem ${num.length} posições`);
console.log(`O valor na posiçã0 3 é: ${num[4]}`);
num.sort();
console.log(`Agora os valores foram ordenados ${num}`);
let pos = num.indexOf(5);
if (pos == -1) {
  console.log(`O valor nao foi encontrado`);
} else {
  console.log(`O valor esta na posicao ${pos}`);
}

/* buscando valores dentro do vetor 
num.indexOf(7)
*/

/* para saber o tamanho dele - num.lenght */
/* num.sort() - ordena os elementos */
