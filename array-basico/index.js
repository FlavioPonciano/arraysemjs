/* 

Arrays
São listas ordenadas
Itens que são relacionados à indices ou chamados chaves
O Array permite que seja armazenada toda uma lista de itens em uma variável, fazendo uma associação com indices

*/

// Variáveis:
var variavel1 = 'Banana'
var variavel2 = 'Maçã'
var variavel3 = 'Morango'
var variavel4 = 'Uva'

// Com um único Array:
var listaFrutas = Array() // também podendo ser chamado var listaFrutas = [] podendo ser manipulando normalmente
listaFrutas['0'] = 'Melancia'
listaFrutas['1'] = 'Banana'
listaFrutas['2'] = True
listaFrutas['3'] = 'Morango'
listaFrutas['4'] = 100
//O indice não precisa ser número ou sequencial, ele precisa ser unico e pode ser mesclado

console.log(listaFrutas[2]) //Pode ser solicitado a impressão de toda a array ou de um indice

//Array pode ser declado assinm tamém:
var listaFrutas = Array('Mamão', 'laranja')
var listaFrutas = ['Mamão', 'laranja']