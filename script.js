
playerIni = true;
textX = "<img src='imagemX.png' alt='X'>";
textO = "<img src='imagemO.png' alt='O'>"
function inputName(nome, tipo){
    if(tipo == "X"){
        nomeX = nome;
    }
    if(tipo == "O"){
        nomeO = nome;
    }
}

function enterName(){
    nomeX = prompt("Jogador do tipo X, me dê seu nome");
    nomeO = prompt("Jogador do tipo O, me dê seu nome");
    document.getElementById("nomeJogador").innerHTML="Vez de: " + nomeX;
}

function changeLoc(row, col) {

    var table = document.getElementById("tabelaMain"); 
    var cell = table.rows[row].cells[col];
    
    if (cell.innerHTML == "") {

        if (playerIni) {
            cell.innerHTML = "<img src='imagemX.png' alt='X'>";
        } else {
            cell.innerHTML = "<img src='imagemO.png' alt='O'>";
        }

        //troca o jogador
        playerIni = !playerIni;

        if(playerIni){
            document.getElementById("nomeJogador").innerHTML="Vez de: " + nomeX;
        }
        else{
            document.getElementById("nomeJogador").innerHTML="Vez de: " + nomeO;
        }

        if (checarTabela() == "X") {
            alert("Player " + nomeX + " ganhou!");
            window.location.reload();
        }
        
        if (checarTabela() == "O") {
            alert("Player " + nomeO + " ganhou!");
            window.location.reload();
        }

        if (checarTabela() == "Empate") {
            alert("Houve um empate!");
            window.location.reload();
        }

    }

}

function checarTabela(){
    var table = document.getElementById("tabelaMain"); // Seleciona a tabela

    let countO = 0;
    let countX = 0;

    //verificação horizontal
    for (let linha = 0; linha <= 2; linha++) {
        for (let coluna = 0; coluna <= 2; coluna++) {
            cell = table.rows[linha].cells[coluna];
            let img = cell.querySelector('img');
            if(img && img.getAttribute('src') == 'imagemX.png'){
                countX++;
            }
            if(img && img.getAttribute('src') == 'imagemO.png'){
                countO++;
            }
            if(checarVitoria(countO)){
                return "O"
            }
            if(checarVitoria(countX)){
                return "X"
            }
        }

        countO = 0;
        countX = 0;
    }

    //verificação vertical
    for (let coluna = 0; coluna <= 2; coluna++) {
        for (let linha = 0; linha <= 2; linha++) {
            cell = table.rows[linha].cells[coluna];
            let img = cell.querySelector('img');
            if(img && img.getAttribute('src') == 'imagemX.png'){
                countX++;
            }
            if(img && img.getAttribute('src') == 'imagemO.png'){
                countO++;
            }
            if(checarVitoria(countO)){
                return "O"
            }
            if(checarVitoria(countX)){
                return "X"
            }
        }

        countO = 0;
        countX = 0;
    }

    //verificação diagonal primeira
    for (let coluna = 0; coluna <= 2; coluna++) {
        cell = table.rows[coluna].cells[coluna];
        let img = cell.querySelector('img');
        if(img && img.getAttribute('src') == 'imagemX.png'){
            countX++;
        }
        if(img && img.getAttribute('src') == 'imagemO.png'){
            countO++;
        }
        if(checarVitoria(countO)){
            return "O"
        }
        if(checarVitoria(countX)){
            return "X"
        }
    }
    countO = 0;
    countX = 0;

    //verificação diagonal segunda
    for (let linha = 0, coluna = 2; linha <= 2 && coluna >= 0; linha++, coluna--) {
        cell = table.rows[linha].cells[coluna];
        let img = cell.querySelector('img');
        if(img && img.getAttribute('src') == 'imagemX.png'){
            countX++;
        }
        if(img && img.getAttribute('src') == 'imagemO.png'){
            countO++;
        }
        if(checarVitoria(countO)){
            return "O"
        }
        if(checarVitoria(countX)){
            return "X"
        }
    }

    countO = 0;
    countX = 0;

    //verificação empate
    for (let linha = 0; linha <= 2; linha++) {
        for (let coluna = 0; coluna <= 2; coluna++) {
            cell = table.rows[linha].cells[coluna];
            let img = cell.querySelector('img');
            if(img && img.getAttribute('src') == 'imagemX.png'){
                countX++;
            }
            if(img && img.getAttribute('src') == 'imagemO.png'){
                countO++;
            }
        }
    }

    if((countO + countX) == 9){
        return "Empate"
    }

    return "Ninguém ainda ganhou"
}


function checarVitoria(contador){
    if(contador >= 3){
        return true;
    }
    else{
        return false;
    }
}