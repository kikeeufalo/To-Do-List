let titulo = window.document.getElementById('titulo')
let descricao = window.document.getElementById('descricao')
let main = window.document.getElementById('main')

function load() {
}

function salvar() {

}

function newElemnt() {
    const newDiv = document.createElement('div')
    const tituloDiv = document.createElement('h2')
    const paragrafoDiv = document.createElement('p')

    newDiv.appendChild(tituloDiv)
    newDiv.appendChild(paragrafoDiv)
    main.appendChild(newDiv)
}

function mouseEnter() {
}

function mouseOut() {
}

/*

    Da pra colocar so uma linha nas tarefas deixando so o titulo amostra ao clicar em cima do titulo que seria a tarefa ele abriria a descrição

*/