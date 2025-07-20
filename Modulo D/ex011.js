var idade = 72;
console.log(`você tem ${idade} anos`)
if (idade < 16) {
  console.log("nao vota");
} else if (idade < 18 || idade > 65) {
  console.log("seu voto é opcional");
} else {
  console.log("seu voto é obrigatorio");
}
