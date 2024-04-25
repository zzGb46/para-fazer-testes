let a = document.getElementById("meu")
a.addEventListener("mouseover", botao)
a.addEventListener("mouseout", saindo)

function botao(){
    a = document.getElementById("meu").innerText = "mudei denovo"
    a.style.background = "blue"
}


function saindo(){
a.innerHTML = "saindo e mudando, né?"
a.style.color = "green"
}




let valor = 0;
document.getElementById("letra"),innerText = valor;

function btn1(){
aumentar = valor +=1;
document.getElementById("letra").innerText = aumentar

let oposto = 5;
if(valor == 5 || valor == 10){
    var body = document.body;
    body.style.background = "red"
}
else{
    var body2 = document.body;
    body2.style.background = "green"
}


}

function btn2(){
    diminuir = valor -=1;
    document.getElementById("letra").innerText = diminuir
}