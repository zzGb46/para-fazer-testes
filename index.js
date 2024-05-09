// let a = document.getElementById("meu");// valor necessário para o todo

// a.addEventListener("click", clicar); //escutando o evento
// a.addEventListener("mouseout", tirei); //

// function clicar(){
//     a.innerText="cliquei"
//     a.style.background="green"
// }
// function tirei(){
//     a.innerText="tiro"
//     a.style.background="orange"
// }


// let valor = 10; //começo a colocar conta


// document.getElementById("letra").innerText= valor;

// function btn1(){
//     aumentar = valor +=10
//     document.getElementById("letra").innerText= aumentar;


//     let total = 20;//a partir daqui tem if

// if(valor == total%2){
//     document.getElementById("letra").innerHTML="par"
// }else{
//     let body = document.body;
//     body.style.background = "green"
// }

// }

// function btn2(){
//     diminuir = valor -=10
//     document.getElementById('letra').innerText= diminuir;

//  let total = 20;
//  if(valor == total){
//     let body2 = document.body2;
//     body2.style.background = "red"
//  }
    
// }






// function botao() {
// var txt = document.getElementById("txt");
// var res = document.getElementById("resposta");
// var vel = Number(txt.value);

// res.innerHTML = `a velocidade atual é de ${vel} km/h`

// if(vel > 200){
//     document.getElementById("resposta").innerHTML +=  "<p>metendo o louco</p>"
// }else{
//     res.innerHTML +=" MACHO"
// }
// }

// -----------
// for(let c = 1;c <= 4;c++){ COM UTILIZAR O FOR 
// console.log("oi")
// }

// let num = [8, 9, 10] APRENDENDO A UTILIZAR O PRIMEIRO EXEMPLO DE ARRAY
// console.log(`Os números escolhidos são ${num}`)

// let numdois = [900, 800, 300, 400, 500]
// numdois.sort() 
// console.log(numdois)
// console.log(`Colocando nome às posições dos elementos que fazem parte de ${numdois.length}`)
// console.log(numdois[2])
// for( let pos=0; pos < numdois.length; pos++){
//     console.log(`A posição ${pos} tem o valor de ${numdois[pos]}`)
// }

// APRENDENDO A DECLARAR PARÂMETROS
// function nosso(n){
// if(n%2 == 0){
//     return "my dick"
// }else{
//     return "mentira"
// }

// }
// document.getElementById("resposta").innerHTML = nosso(3)

// --------
// DEFINIÇÃO DE PARÂMETROS
// function diminuir(n1, n2){
//     return n1 + n2
// }
// // document.getElementById("resposta").innerHTML = diminuir(7,3)
// console.log(diminuir(9,9))

// ----------
// DECLARANDO UM FUNÇÃO COMO UMA VARIÁVEL
// // let v = function(y){
// //     return y*2
// // }
// // console.log(v(5))

 
// SOMANDO VARIÁVEIS COMPOSTAS
//  let a=(n1,n2)=>{
// return n1 + n2
//  }
//  document.getElementById("resposta").innerHTML=(a(7,7))



// -------------------
// MANIPULANDO E MUDANDO IMAGENS ATRAVÉS DE COMANDOS DE JS
let img1 = "interiores.jfif";
let img2 = "interior 2.jfif";
let img3 = "interior3.jfif";

function teste(){
    document.getElementById("imagem1").src= img1;
    let aux = img1;
    img1 = img2;
    img2 = img3;
    img3 = aux;
}

function teste2(){
    document.getElementById("imagem1").src = img3;
    let aux2 = img3;
    img3 = img2;
    img2 = img1;
    img1 = aux2;

}

let titulo = document.getElementById("titu").innerHTML

titulo = document.body;
titulo.style.color = "red"