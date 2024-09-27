let titulo = window.document.getElementById('titulo')
let descricao = window.document.getElementById('descricao')
let taskTitulo = window.document.getElementById('task-titulo')
let taskDescricao = window.document.getElementById('task-descricao')
let tasks = window.document.getElementById('bloco-tasks')

function load() {
    tasks.style.display = 'block'
}

function salvar() {
    taskTitulo.innerText = titulo.value
    taskDescricao.innerText = descricao.value
}