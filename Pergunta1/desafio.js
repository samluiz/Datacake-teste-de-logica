// Dado o Array de inteiros abaixo, ordene-o de tal forma que os números “1” estejam à esquerda. 
// Os itens devem ser modificados no lugar, ou seja, 
// você não ira trocar posições e sim colocar os números “1” no inicio do Array

const numbers = [2, 1, 5, 2, 5, 2, 1, 1, 1, 7, 9, 13, 127, 21]

// Mostra o array original no console
console.log(numbers.join(", "))

// Função para reorganizar o array de forma que os números "1" apareçam à esquerda
// Essa função utiliza um loop para percorrer o array
// E um método de inserção aninhado com um método de troca.
// Quando o loop encontra o número "1", esses métodos agem
// O método splice consiste em receber dois parâmetros
// O primeiro parâmetro "i" corresponde ao índice do valor que será trocado
// O segundo parâmetro "1" corresponde ao número de elementos que serão trocados a partir desse índice
// O método unshift consiste em adicionar um novo elemento no início do array
// Como esses métodos são acionados apenas quando o loop encontra o valor "1", 
// nós temos a modificação do array empurrando todos e somente os números "1" para o início
const oneToBack = (array) => {
  for (let i in array) {
    if (array[i] === 1) {
      array.unshift(array.splice(i, 1))
    }
  }
}

oneToBack(numbers)
console.log(numbers.join(", "))