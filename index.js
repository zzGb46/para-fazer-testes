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






function botao() {
var txt = document.getElementById("txt");
var res = document.getElementById("resposta");
var vel = Number(txt.value);

res.innerHTML = `a velocidade atual é de ${vel} km/h`

if(vel > 200){
    document.getElementById("resposta").innerHTML +=  "<p>metendo o louco</p>"
}else{
    res.innerHTML +=" MACHO"
}
}