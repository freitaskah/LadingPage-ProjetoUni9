let salgada = document.querySelector(".salgada")
let doce = document.getAnimations("doce");
let bebidas = document.getAnimations("bebidas");
let massas = document.getAnimations("massas");
let fogazza = document.getAnimations("fogazza");

function Mudar(option){
    if(option=="salgada"){
        console.log(salgada)
        salgada.style.display = "block";
        doce.style.display = "none";
        /*
        bebidas.style.display = "none"
        massas.style.display = "none"
        fogazza.style.display = "none"
        */

    }else if(option=="doce"){
        salgada.style.display = "none"
        doce.style.display = "block";
    }
    
}