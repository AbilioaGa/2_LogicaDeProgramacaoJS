const hortifrutis = [
  "banana",
  "agrião",
  "maçã",
  "abacaxi",
  "melancia",
  "laranja",
  "limão",
  "cenoura",
  "melancia",
  "batata",
  "brócolis",
  "abóbora",
  "tomate",
  "alho-poró",
  "alface",
  "espinafre",
  "rúcula",
  "couve",
  "acelga",
  "maçã",
  "batata",
];

function hortifrutisTipos(hortifrutis) {
  let frutas = 0;
  let legumes = 0;
  let verduras = 0;

  hortifrutis.forEach((item) => {
    if (["banana", "maçã", "abacaxi", "melancia", "laranja", "limão", "tomate"].includes(item)) {
      frutas++;
    } else if (["cenoura", "batata", "brócolis", "abóbora", "alho-poró"].includes(item)) {
      legumes++;
    } else if (["alface", "espinafre", "rúcula", "couve", "agrião", "acelga"].includes(item)) {
      verduras++;
    }
  });

  const resposta = `Total de hortifrutis: ${hortifrutis.length}
  \nTotal de ${frutas} frutas sendo → ${itensPorTipos(
    ["banana", "maçã", "abacaxi", "melancia", "laranja", "limão", "tomate"],
    hortifrutis
  )}\nTotal de ${legumes} legumes sendo → ${itensPorTipos(
    ["cenoura", "batata", "brócolis", "abóbora", "alho-poró"],
    hortifrutis
  )}\nTotal de ${verduras} verduras sendo → ${itensPorTipos(
    ["alface", "espinafre", "rúcula", "couve", "agrião", "acelga"],
    hortifrutis
  )}`;

  return resposta;
}

function itensPorTipos(tipo, lista) {
  const contador = {};

  lista.forEach((item) => {
    if (tipo.includes(item)) {
      contador[item] = (contador[item] || 0) + 1;
    }
  });

  const resposta = Object.entries(contador)
    .map(([item, quantidade]) => `${quantidade} ${item}`)
    .join(", ");
  return resposta;
}

console.log(hortifrutisTipos(hortifrutis));
