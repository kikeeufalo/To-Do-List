let titulo = window.document.getElementById('titulo')
let descricao = window.document.getElementById('descricao')
let taskTitulo = window.document.getElementById('task-titulo')
let taskDescricao = window.document.getElementById('task-descricao')
let tasks = window.document.getElementById('bloco-tasks')

function load() {
    tasks.style.display = 'none'
}

function salvar() {
    let t = titulo.value
    let d = descricao.value
    if (t != '' && d != '') {
        
    }else {
        alert("Insira o titulo e faça uma breve descrição")
    }
}

/*

    Da pra colocar so uma linha nas tarefas deixando so o titulo amostra ao clicar em cima do titulo que seria a tarefa ele abriria a descrição

*/