var Beatriz = document.getElementById("Beatriz")
var Gabriel_Eduardo = document.getElementById("Gabriel_Eduardo");
var Jessica = document.getElementById("Jessica");
var Julia = document.getElementById("Julia");
var Kaiky = document.getElementById("Kaiky");
var Gabriel_Viana = document.getElementById("Gabriel_Viana");
var Maira = document.getElementById("Maira");
var Leticia = document.getElementById("Leticia");
var Mensagem = document.getElementById("Mensagem");

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
    if(x=="Beatriz"){
        liga_display(Beatriz,0);
        liga_display(Gabriel_Eduardo,1);
        liga_display(Jessica,1);
        liga_display(Julia,1);
        liga_display(Kaiky,1);
        liga_display(Gabriel_Viana,1);
        liga_display(Maira,1);
        liga_display(Leticia,1);
    }else if(x=="Gabriel Eduardo"){
        liga_display(Beatriz,1);
        liga_display(Gabriel_Eduardo,0);
        liga_display(Jessica,1);
        liga_display(Julia,1);
        liga_display(Kaiky,1);
        liga_display(Gabriel_Viana,1);
        liga_display(Maira,1);
        liga_display(Leticia,1);
    }else if(x=="Jessica"){
        liga_display(Beatriz,1);
        liga_display(Gabriel_Eduardo,1);
        liga_display(Jessica,0);
        liga_display(Julia,1);
        liga_display(Kaiky,1);
        liga_display(Gabriel_Viana,1);
        liga_display(Maira,1);
        liga_display(Leticia,1);
    }else if(x=="Julia"){
        liga_display(Beatriz,1);
        liga_display(Gabriel_Eduardo,1);
        liga_display(Jessica,1);
        liga_display(Julia,0);
        liga_display(Kaiky,1);
        liga_display(Gabriel_Viana,1);
        liga_display(Maira,1);
        liga_display(Leticia,1);
    }else if(x=="Kaiky"){
        liga_display(Beatriz,1);
        liga_display(Gabriel_Eduardo,1);
        liga_display(Jessica,1);
        liga_display(Julia,1);
        liga_display(Kaiky,0);
        liga_display(Gabriel_Viana,1);
        liga_display(Maira,1);
        liga_display(Leticia,1);
    }else if(x=="Gabriel Viana"){
        liga_display(Beatriz,1);
        liga_display(Gabriel_Eduardo,1);
        liga_display(Jessica,1);
        liga_display(Julia,1);
        liga_display(Kaiky,1);
        liga_display(Gabriel_Viana,0);
        liga_display(Maira,1);
        liga_display(Leticia,1);
    }else if(x=="Maira"){
        liga_display(Beatriz,1);
        liga_display(Gabriel_Eduardo,1);
        liga_display(Jessica,1);
        liga_display(Julia,1);
        liga_display(Kaiky,1);
        liga_display(Gabriel_Viana,1);
        liga_display(Maira,0);
        liga_display(Leticia,1);
    }else if(x=="Leticia"){
        liga_display(Beatriz,1);
        liga_display(Gabriel_Eduardo,1);
        liga_display(Jessica,1);
        liga_display(Julia,1);
        liga_display(Kaiky,1);
        liga_display(Gabriel_Viana,1);
        liga_display(Maira,1);
        liga_display(Leticia,0);
    } 
}

