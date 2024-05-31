var Beatriz = document.getElementById("Beatriz");
var Gabriel_Eduardo = document.getElementById("Gabriel_Eduardo");
var Jessica = document.getElementById("Jessica");
var Julia = document.getElementById("Julia");
var Kaiky = document.getElementById("Kaiky");
var Gabriel_Viana = document.getElementById("Gabriel_Viana");
var Maira = document.getElementById("Maira");
var Leticia = document.getElementById("Leticia");
var mensagemInicial = document.getElementById("mensagem-inicial");

// Função para esconder todos os elementos
function esconderTodos() {
    Beatriz.style.display = "none";
    Gabriel_Eduardo.style.display = "none";
    Jessica.style.display = "none";
    Julia.style.display = "none";
    Kaiky.style.display = "none";
    Gabriel_Viana.style.display = "none";
    Maira.style.display = "none";
    Leticia.style.display = "none";
}

// Esconder todos os elementos na inicialização
esconderTodos();

function liga_display(elemento, estado){
    if(estado == 1){
        elemento.style.display = "none";
        console.log(elemento.id + " Desligado");
    } else if(estado == 0){
        elemento.style.display = "block";
        console.log(elemento.id + " Ligado");
    }
}

function MudaMenu(x){
    esconderTodos(); // Esconder todos os elementos antes de exibir o selecionado
    mensagemInicial.style.display = "none"; // Esconder a mensagem inicial
    
    if(x == "Beatriz"){
        liga_display(Beatriz, 0);
    } else if(x == "Gabriel Eduardo"){
        liga_display(Gabriel_Eduardo, 0);
    } else if(x == "Jessica"){
        liga_display(Jessica, 0);
    } else if(x == "Julia"){
        liga_display(Julia, 0);
    } else if(x == "Kaiky"){
        liga_display(Kaiky, 0);
    } else if(x == "Gabriel Viana"){
        liga_display(Gabriel_Viana, 0);
    } else if(x == "Maira"){
        liga_display(Maira, 0);
    } else if(x == "Leticia"){
        liga_display(Leticia, 0);
    } 
}
