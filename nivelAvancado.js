cont = 0;
function verific1(){

    var potum = document.getElementById("pot1").value;

    if(potum == 4){
        document.getElementById("imprimir").innerHTML = "UHUU, Parabéns, você acertou!";
        document.getElementById("imprimir").style.color = "#ff1b8d";
        cont++;
    }
    else {
        document.getElementById("imprimir").innerHTML = "Errou, tente mais uma vez :)";
        document.getElementById("imprimir").style.color = "#ff0000";
    }
}

 function verific2(){

    var potdois = document.getElementById("pot2").value;

    if(potdois == 64){
        document.getElementById("imprimir2").innerHTML = "UHUU, Parabéns, você acertou!";
        document.getElementById("imprimir2").style.color = "#ff1b8d";
        cont++;
    }
    else {
        document.getElementById("imprimir2").innerHTML = "Errou, tente mais uma vez :)";
        document.getElementById("imprimir2").style.color = "#ff0000";
    }
}

function verific3(){

    var porcum = document.getElementById("porc1").value;

    if(porcum == 50){
        document.getElementById("imprimir3").innerHTML = "UHUU, Parabéns, você acertou!";
        document.getElementById("imprimir3").style.color = "#ff1b8d";
        cont++;
    }
    else {
        document.getElementById("imprimir3").innerHTML = "Errou, tente mais uma vez :)";
        document.getElementById("imprimir3").style.color = "#ff0000";
    }
}

function verific4(){

    var porcdois = document.getElementById("porc2").value;

    if(porcdois == 10){
        document.getElementById("imprimir4").innerHTML = "UHUU, Parabéns, você acertou!";
        document.getElementById("imprimir4").style.color = "#ff1b8d";
        cont++;
    }
    else {
        document.getElementById("imprimir4").innerHTML = "Errou, tente mais uma vez :)";
        document.getElementById("imprimir4").style.color = "#ff0000";
    }
}

function verifica(){

    if(cont == 4){
        document.getElementById("resultado").innerHTML = "Simulado concluido com sucesso, parabéns, você é um gênio e está pronto para fazer a prova! \n\n Viu como a matemática pode ser divertida!";  
    } 
    else{
        document.getElementById("resultado").innerHTML = "Acerte tudo para concluir o simulado!";  

    }
}  