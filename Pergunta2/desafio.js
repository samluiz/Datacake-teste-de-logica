// Dada a seguinte arvore binária de palavras, faça uma função que busque nessa arvore pela palavra-chave. 
// O output da sua função deve ser o caminho até chegar no item procurado. 
// Por exemplo, se o input de buscar for “goiaba” o output deve ser uma string “Maça -> morango -> Goiaba”

// Criando os nós
class Node {
  constructor(fruits, left = null, right = null) {
    this.fruits = fruits
    this.left = left
    this.right = null
  }
}

// Criando a árvore
class Tree {
  constructor(root = null) {
    this.root = null
  }

// Método de inserção de dados
  InsertFruit(fruit) {
    let newNode = new Node(fruit)

    if (this.root === null) {
      this.root = newNode
    } else {
        this.InsertNode(this.root, newNode)
    }
  }

// Método de criação de nós
  InsertNode(node, newNode) {
    if (newNode.fruits < node.fruits) {
      if (node.left === null) {
        node.left = newNode
      } else {
          this.InsertNode(node.left, newNode)
      }
    } else {
        if (node.right === null) {
          node.right = newNode
        } else {
            this.InsertNode(node.right, newNode)
        }
    }
  }

// Método para encontrar a raiz
  FindRoot() {
    return this.root
  }

// Método para ordenar a árvore
  Sort(node) {
    if (node !== null) {
      this.Sort(node.left)
      console.log(node.fruits)
      this.Sort(node.right)
    }
  }

// Método para pesquisar um valor na árvore (incompleto...)
  Search(node, value) {
    if (node == null) {
      return false
    }

    if (node.fruits == value) {
      return true
    }

    let foundleft = Search(node.left, value)

    if (foundleft) {
      return true
    }

    let foundRight = this.Search(node.right, value)

    return foundRight
  }
}

let binaryTree = new Tree()

binaryTree.InsertFruit("Maçã")
binaryTree.InsertFruit("Morango")
binaryTree.InsertFruit("Pera")
binaryTree.InsertFruit("Goiaba")
binaryTree.InsertFruit("Limão")
binaryTree.InsertFruit("Abacaxi")
binaryTree.InsertFruit("Laranja")
binaryTree.InsertFruit("Banana")
binaryTree.InsertFruit("Cebola")

let root = binaryTree.FindRoot()

// Infelizmente ainda tenho um conhecimento bem raso em estrutura de dados e não consegui completar esse desafio :(