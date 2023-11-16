const empregados = [
  { nome: "João", salario: 1200 },
  { nome: "Maria", salario: 1500 },
  { nome: "Pedro", salario: 1800 },
  { nome: "Ana", salario: 1400 },
  { nome: "Carlos", salario: 2000 },
];

const salarioMaiorOuIgual1500 = empregados.some((empregado) => empregado.salario >= 1500);
const salarioMenorOuIgual1000 = empregados.some((empregado) => empregado.salario <= 1000);

console.log(
  salarioMaiorOuIgual1500
    ? "Ao menos um dos empregados tem salário maior ou igual a R$ 1.500,00"
    : "Nenhum dos empregados tem salário maior ou igual a R$ 1.500,00"
);

console.log(
  salarioMenorOuIgual1000
    ? "Ao menos um dos empregados tem salário menor ou igual a R$ 1.000,00"
    : "Nenhum dos empregados tem salário menor ou igual a R$ 1.000,00"
);
