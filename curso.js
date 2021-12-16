const imperativa = require('./consertos')
// console.log(imperativa.consertos);
// console.log("-----------------------------");
// console.log(imperativa.consertos[1]);

imperativa.forEach(item => {
  // console.log("---------------------")
  // console.log(item.aparelho)
  // console.log(item.itensConcertados)
  // console.log(item.valores)
  // console.log(item.pronto)

function somar() {
  //  ----------somando valores total---------
 let total = 0

 for (let i = 0; i < item.valores.length; i++) {
   total = total + item.valores[i]
 }
  console.log(total)
  // ----------somando valores total--------
  console.log('Total: R$ ' + total.toFixed(2).replace('.', ','))
// exibir status aparelho
}
somar()


})



function exibir() {
  // mostrar produtos que estão prontos
const exibirTrue = (listaObj) => {
  let aparelhoTrue = [];

  for(let i = 0; i < listaObj.length; i++){
   if (listaObj[i].pronto === true) {
     aparelhoTrue.push(listaObj[i].aparelho);
    //  aparelhoTrue.push(listaObj[i].itensConcertados);
   }
  }
  return aparelhoTrue;
}
console.log(`\nAparelhos prontos\n${exibirTrue(imperativa)}\n`);
// mostrar produtos que estão prontos
}
exibir();

function consertar() {

// mostrar produtos que não estão prontos
const exibirFalse = (listaObj) => {
  let aparelhoFalse = [];

  for(let i = 0; i < listaObj.length; i++){
   if (listaObj[i].pronto === false) {
     aparelhoFalse.push(listaObj[i].aparelho);
   }
  }
  return aparelhoFalse;
}
console.log(`\nAparelhos aguardando conserto\n${exibirFalse(imperativa)}`);
// mostrar produtos que não estão prontos
}

consertar()