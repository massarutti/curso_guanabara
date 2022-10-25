function soma(n1, n2) {
  return n1 + n2;
}

console.log(soma(5, 5));

/* caso não seja informado alguns dos parametros, podemos deixar previamente definidos*/

function soma(n1 = 0, n2 = 0) {
  return n1 + n2;
}

console.log(soma(15));
