cont = 0;
function verific1(){

    var multum = document.getElementById("mult1").value;

    if(multum == 36){
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

    var multdois = document.getElementById("mult2").value;

    if(multdois == 25){
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

    var divum = document.getElementById("div1").value;

    if(divum == 5){
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

    var divdois = document.getElementById("div2").value;

    if(divdois == 2){
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
        window.location.replace("nivel3.html");
    }
    else {
        document.getElementById("resultado").innerHTML = "Acerte todas a questões para continuar";
    }
    
}  