// Dado o array [9, 2, 3, 1, 4] encontre todos os números que estão faltando para completar o intervalo 0 a n, 
// onde n é o maior número dentro do array. 
// Adicione os números faltando dentro do array

const numbers = [9, 2, 3, 1, 4]

// Declarando o maior número dentro do array
const maxNum = Math.max(...numbers)


// Função para achar os números que estão faltando. 
// Ela apenas percorre o array inteiro, 
// verifica os números de 0 a 10 que não existem no array, 
// e mostra esses números no console.
function missingNumbers() {
  for (let i = 0; i <= maxNum; i++) {
    if (!numbers.includes(i, 0)) {
      console.log(i)
    }
  }
}

missingNumbers()