function TocaSomPom (){
    document.queryselector('#som_tecla_pom').play();
}

const listaDeBotoes = document.querySelectorAll('.tecla');

let contador = 0;

while (contador < listaDeBotoes.length) {
    listaDeBotoes[contador].onclick = TocaSomPom;
     contador += 1;
}