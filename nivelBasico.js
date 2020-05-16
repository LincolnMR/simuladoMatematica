cont = 0;
function verific1(){

    var somaum = document.getElementById("soma1").value;

    if(somaum == 14){
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

    var somadois = document.getElementById("soma2").value;

    if(somadois == 7){
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

    var subum = document.getElementById("sub1").value;

    if(subum == 2){
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

    var subdois = document.getElementById("sub2").value;

    if(subdois == 7){
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
                window.location.replace("nivel2.html");
            }
            else {
                document.getElementById("resultado").innerHTML = "Acerte todas a questões para continuar";
            }
            
    }       
