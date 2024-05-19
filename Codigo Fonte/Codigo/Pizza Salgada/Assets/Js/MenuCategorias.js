var salgada = document.getElementById("salgada")
var doce = document.getElementById("doce");
var bebidas = document.getElementById("bebidas");
var massas = document.getElementById("massas");
var fogazza = document.getElementById("fogazza");

function liga_display(elemento,estado){
    if(estado==1){
        elemento.style.display="none";
        console.log(elemento + " Ligado");
    }else if(estado==0){
        elemento.style.display="block";
        console.log(elemento + " Desligado");
    }
}

function MudaMenu(x){
    if(x=="salgada"){
        liga_display(salgada,0);
        liga_display(doce,1);
        liga_display(bebidas,1);
        liga_display(massas,1);
        liga_display(fogazza,1);
    }else if(x=="doce"){
        liga_display(salgada,1);
        liga_display(doce,0);
        liga_display(bebidas,1);
        liga_display(massas,1);
        liga_display(fogazza,1);
    }else if(x=="bebidas"){
        liga_display(salgada,1);
        liga_display(doce,1);
        liga_display(bebidas,0);
        liga_display(massas,1);
        liga_display(fogazza,1);
    }else if(x=="massas"){
        liga_display(salgada,1);
        liga_display(doce,1);
        liga_display(bebidas,1);
        liga_display(massas,0);
        liga_display(fogazza,1);
    }else if(x=="fogazza"){
        liga_display(salgada,1);
        liga_display(doce,1);
        liga_display(bebidas,1);
        liga_display(massas,1);
        liga_display(fogazza,0);
    } 
}