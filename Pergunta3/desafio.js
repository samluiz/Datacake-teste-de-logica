// Dado o array de números inteiros [1, 15, 2, 7, 2, 5, 7, 1, 4] crie uma função que recebe um argumento X 
// e retorne true ou false caso haja no array uma combinação de soma entre dois números que resulte no input X. 
// Exemplo: Se X=2, a função deve retornar true pois existem dois números 1 dentro do array 1+1 = 2. 
// Caso X=1231 a função deve retornar false pois não existe uma combina de dois números capazes de somar 1231

const numbers = [1, 15, 2, 7, 2, 5, 7, 1, 4]
console.log(numbers.join(", "))

// Função para checar se a adição de dois números do array resultam no valor inserido no parâmetro
// Nela nós temos dois loops, o primeiro controla cada valor do array de forma que todas as combinações com aquele único elemento são testadas
// O segundo controla os valores que serão testados com aquele único elemento
// Exemplo de execução: 1 + 1 -> 1 + 15 -> 1 + 2 -> 1 + 7 ... 15 + 1 -> 15 -> 15 -> 15 + 2...
// Se alguma das somas for igual ao valor inserido (x), a função retorna true
function canItAdd(x) {
  for (i in numbers) {
    for (j in numbers) {
      if (numbers[i] + numbers[j] === x) {
        console.log("\n", numbers[i], " + ", numbers[j], " = ", x)
        console.log("Existe uma combinação para este resultado!")
        return true
      } else {
        console.log(x)
        console.log("Não existe uma combinação para este resultado.")
        return false
      }
    }
  }
}

// Testes

canItAdd(2)
console.log("\n")
canItAdd(1231)