const pessoas = [
  { nome: "João", altura: 1.75, peso: 80 },
  { nome: "Maria", altura: 1.68, peso: 60 },
  { nome: "Pedro", altura: 1.8, peso: 70 },
  { nome: "Ana", altura: 1.65, peso: 55 },
  { nome: "Carlos", altura: 1.9, peso: 100 },
];

function calcularIMC(pessoa) {
  const imc = Math.round(pessoa.peso / pessoa.altura ** 2);
  return imc;
}

function mostrarIMC(pessoas) {
  pessoas.forEach((pessoas) => {
    const imc = calcularIMC(pessoas);
    console.log(`O IMC de ${pessoas.nome} é ${imc}`);
  });
}

mostrarIMC(pessoas);
