var fazeres = document.getElementById('valorTextArea');

var divExterna = document.getElementById('armazenaDiv');
var divInterna = document.getElementById('divInterna');

var botaoAdicionar = document.getElementById('botaoAdcicionar');

var teste = '';

botaoAdicionar.addEventListener('click', adicionar);

function adicionar(){

    // var divAdicionadosTodo = document.createElement('div');
    // divAdicionadosTodo.className = 'toDoAdicionados';
    // divInterna.appendChild(divAdicionadosTodo);

    // var textoToDo = document.createElement('p');
    // textoToDo.textContent = fazeres.value;
    // divAdicionadosTodo.appendChild(textoToDo);

    // var divBotoes = document.createElement('div');
    // divBotoes.className = 'botoesAdicionadosDiv';
    // divAdicionadosTodo.appendChild(divBotoes)

    // var botaoFeito = document.createElement('button');
    // botaoFeito.className = 'botaoAdicionado';
    // botaoFeito.textContent = 'Remover';
    // divBotoes.appendChild(botaoFeito)

    // var botaoRemover = document.createElement('button');
    // botaoRemover.className = 'botaoAdicionado';
    // botaoRemover.id = 'botaoAdicionado2';
    // botaoRemover.textContent = 'Feito';
    // divBotoes.appendChild(botaoRemover)
    teste+=`<div id="adicionadosToDoDiv" class="toDoAdicionados">
    <p></p>
    <div id='botoes' class="botoesAdicionadosDiv">
    <button id='teste' class="botaoAdicionado">Remover</button>
    <button class="botaoAdicionado">Feito</button>
    </div>
    </div> `
    
    divInterna.innerHTML=teste;

}

window.onclick = function(){
    verificar;
}

function verificar(){
    var botoesRemoverArray = document.getElementById('teste');
}

botoesRemoverArray.addEventListener('click', function(){
    alert('teste')
})
