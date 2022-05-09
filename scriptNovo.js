document.addEventListener('click', (e) => {
    elementTarget = e.target;
    if (elementTarget.id === 'botaoAdicionar') criaTarefa();
    else if (elementTarget.id === 'botaoRemover') tarefaRemove(elementTarget);
    else if (elementTarget.id === 'botaoFeito') tarefaFeita(elementTarget);
})

document.addEventListener('keypress', (e) => {
    if(e.keyCode == 13){
         criaTarefa();
    }
})

function criaTarefa(){
    let textoInput = document.getElementById('valorTextArea');
    if (textoInput.value == ''){
        return;
    } else {
        let caixaTarefas = document.getElementById('divInterna')
        let textoTodo = document.createElement('p');
        textoTodo.classList.add('textoTarefas');
        textoTodo.innerText = textoInput.value;    
        let divBotoes = criarDivToDo(textoTodo)
        caixaTarefas.appendChild(divBotoes);
        textoInput.value = '';
        salvaTarefas(); 
    }
}

function criarDivToDo(tarefa){
    let div = document.createElement('div');
    div.id = 'containerTarefasAdicionadas';
    div.classList.add('toDoAdicionados');
    let paragrafo = tarefa;
    let divBotoes = criaDivBotoes() 
    div.append(paragrafo, divBotoes)
    return div;
}

function criaDivBotoes(){
    let div = document.createElement('div');
    div.classList.add('botoesAdicionadosDiv');
    let botaoApagar = criarBotao('botaoRemover','botaoAdicionado', 'Remover'); 
    let botaoFeito = criarBotao('botaoFeito','botaoAdicionado', 'Feito'); 
    div.append(botaoApagar, botaoFeito);
    return div;
}

function criarBotao(id, classe, texto){
    let botaoAdicionar = document.createElement('button');
    botaoAdicionar.id = id;
    botaoAdicionar.classList.add(classe);
    botaoAdicionar.innerText = texto;
    return botaoAdicionar;
}


function tarefaRemove(e){
    let divInterna = e.parentNode;
    let divInternaPai = divInterna.parentNode;
    divInternaPai.remove();
    salvaTarefas();
}

function tarefaFeita(e){
    let divInterna = e.parentNode;
    let divInternaPai = divInterna.parentNode;
    let botaoRemover = divInternaPai.querySelector('#botaoRemover');
    botaoRemover.classList.add('feitoBotoes');
    divInternaPai.classList.add('feitoDiv');
    salvarEstadoTarefa();
    e.remove();
}


function salvaTarefas(){
    let tarefas = [];
    salvarEstadoTarefa();
    let textosTarefas = document.querySelectorAll('.textoTarefas');
    for (const tarefa of textosTarefas) {
        tarefas.push(tarefa.textContent);
    }
    var stringTarefasConvertido = JSON.stringify(tarefas);
    localStorage.setItem('tarefasLocalStorage', stringTarefasConvertido)
}

function criartarefasSalvas(){
    let pegaTarefas = localStorage.getItem('tarefasLocalStorage');
    let tarefasConvertidas = JSON.parse(pegaTarefas);

    for (const i of tarefasConvertidas) {
        let caixaTarefas = document.getElementById('divInterna')
        let textoTodo = document.createElement('p');
        textoTodo.classList.add('textoTarefas');
        textoTodo.innerText = i;    
        let divBotoes = criarDivToDo(textoTodo)
        caixaTarefas.appendChild(divBotoes);
    }
    aplicarEstadoTarefa();
}

function aplicarEstadoTarefa(){
    let arrayEstado = JSON.parse(localStorage.getItem('estadoTarefa'));
    let botaoRemover = document.querySelectorAll('#botaoRemover');


    for (let i = 0; i < botaoRemover.length; i++) {
        let divPai = botaoRemover[i].parentNode;
        let botaoFeito = divPai.querySelector('#botaoFeito');
        if (arrayEstado[i] == 'Feito') tarefaFeita(botaoFeito);
}
}

function salvarEstadoTarefa(){
    let arrayFeitos = []
    let estadoTarefa = document.querySelectorAll('.botoesAdicionadosDiv');
    for (const botoesDiv of estadoTarefa) {
        let botoes = botoesDiv.querySelector('#botaoRemover');
        if(botoes.className == 'botaoAdicionado feitoBotoes'){
            arrayFeitos.push('Feito')
        } else {
            arrayFeitos.push('NaoFeito')
        }
    }
    let arrayFeitosConvertido = JSON.stringify(arrayFeitos);
    localStorage.setItem('estadoTarefa', arrayFeitosConvertido);
}


criartarefasSalvas();
