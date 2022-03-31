var fazeres = document.getElementById('valorTextArea');

var divExterna = document.getElementById('armazenaDiv');
var divInterna = document.getElementById('divInterna');

var botaoAdicionar = document.getElementById('botaoAdcicionar');

var teste = '';

botaoAdicionar.addEventListener('click', adicionar);

function adicionar(){

    var divAdicionadosTodo = document.createElement('div');
    divAdicionadosTodo.className = 'toDoAdicionados';
    divInterna.appendChild(divAdicionadosTodo);

    var textoToDo = document.createElement('p');
    textoToDo.textContent = fazeres.value;
    divAdicionadosTodo.appendChild(textoToDo);

    var divBotoes = document.createElement('div');
    divBotoes.className = 'botoesAdicionadosDiv';
    divAdicionadosTodo.appendChild(divBotoes)

    var botaoFeito = document.createElement('button');
    botaoFeito.className = 'botaoAdicionado';
    botaoFeito.id = 'botaoRemover';
    botaoFeito.textContent = 'Remover';
    divBotoes.appendChild(botaoFeito)

    var botaoRemover = document.createElement('button');
    botaoRemover.className = 'botaoAdicionado';
    botaoRemover.id = 'botaoFeito';
    botaoRemover.textContent = 'Feito';
    divBotoes.appendChild(botaoRemover)
    

}

divInterna.addEventListener('click', function(event){
    
    var clicado = event.target;
    
    // console.log(clicado)
    if(clicado.id == 'botaoRemover'){
        var botaoRemover = document.querySelectorAll('#botaoRemover')
        botaoRemover.forEach(function(e){
            e.addEventListener('click', function(){
                e.parentNode.parentNode.remove();
            })
        })
    }

    else if (clicado.id == 'botaoFeito'){
        var botaoFeito = document.querySelectorAll('#botaoFeito')
        botaoFeito.forEach(function(e){
            e.addEventListener('click', function(){
                let divExterna = e.parentNode.parentNode;
                let teste = e.parentNode;
                teste.children[0].classList = "botaoAdicionado feitoBotoes"
                divExterna.classList = 'toDoAdicionados feitoDiv';
                teste.removeChild(this)
            })
        })
    }
}) 