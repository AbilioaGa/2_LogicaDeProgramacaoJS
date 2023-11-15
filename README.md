# Lista de exercicios do modulo

## Exercício 1

Crie uma função que receba como parâmetro a lista de hortifrútis abaixo que tem três tipos: `frutas`, `legumes` e `verduras`, faça com que essa função retorne o número de itens de cada um desses tipos.

Sendo que:

fruta → banana, maçã, abacaxi, melancia, laranja, limão.

legume → cenoura, batata, brócolis, abóbora, tomate, alho-poró.

verdura → alface, espinafre, rúcula, couve, agrião, acelga.

```jsx
const hortifrutis = ['banana', 'agrião', 'maçã', 'abacaxi', 'melancia', 'laranja', 'limão','cenoura', 'melancia', 'batata', 'brócolis', 'abóbora', 'tomate', 'alho-poró', 'alface', 'espinafre', 'rúcula', 'couve', 'acelga', 'maçã', 'batata' ];

```

## Exercício 2

Temos a lista de empregados com seus respectivos nomes e salários:

```jsx
const empregados = [
  { nome: 'João', salario: 1200 },
  { nome: 'Maria', salario: 1500 },
  { nome: 'Pedro', salario: 1800 },
  { nome: 'Ana', salario: 1400 },
  { nome: 'Carlos', salario: 2000 }
]

```

Utilize o método `some` para verificar se pelo menos um dos empregados tem salário maior ou igual a R$ 1.500,00.

Utilize o método `some` novamente para verificar se pelo menos um dos empregados tem salário menor ou igual a R$ 1.000,00.

Obs: Pode utilizar o `for` .

## Exercício 3

Temos uma lista de pessoas com seus respectivos nomes, alturas e pesos:

```jsx
const pessoas = [
  { nome: 'João', altura: 1.75, peso: 80 },
  { nome: 'Maria', altura: 1.68, peso: 60 },
  { nome: 'Pedro', altura: 1.80, peso: 70 },
  { nome: 'Ana', altura: 1.65, peso: 55 },
  { nome: 'Carlos', altura: 1.90, peso: 100 }
]

```

Crie um função que receba a função a seguir e mostre no console o valor do calculo do IMC da pessoa.

exemplo: `O IMC é Carlos é 40`

Sendo que o IMC é calculado pela fórmula `peso / altura²`.

Obs: Utilize `for` ou algum método de array.

## Exercício 4

Temos a lista de alunos com suas notas:

```jsx
const alunos = [
  { nome: 'Ana', notas: [7, 8, 9] },
  { nome: 'Pedro', notas: [5, 6, 7] },
  { nome: 'Maria', notas: [9, 8, 10] },
  { nome: 'João', notas: [6, 7, 8] },
  { nome: 'Lucas', notas: [8, 9, 7] },
  { nome: 'Julia', notas: [10, 8, 9] }
]
```

Utilize o método `map` para criar um novo objeto com o nome e a média de cada aluno.

A média deve ser calculada utilizando o método `reduce` para somar as notas e dividi-las pelo número de notas.

Obs: Utilize `for` ou algum método de array.