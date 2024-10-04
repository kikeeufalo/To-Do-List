let titulo = window.document.getElementById('titulo')
let descricao = window.document.getElementById('descricao')
let main = window.document.getElementById('main')

function salvar() {
    if (titulo.value == 'Game') {
        newElemnt()
        newElemnt()
        newElemnt()
        newElemnt()
        newElemnt()
    }else if (titulo.value != '' && descricao.value != '') {
        newElemnt()
    }else {
        window.alert("insira todos os dados para salvar")
    }

    titulo.value = ''
    descricao.value = ''
}

function newElemnt() {
    let temporizador
    let tarefaConcluida = false

    const newDiv = document.createElement('div')
    const tituloDiv = document.createElement('h2')
    const paragrafoDiv = document.createElement('p')

    tituloDiv.textContent = titulo.value
    paragrafoDiv.textContent = descricao.value
    
    newDiv.appendChild(tituloDiv)
    newDiv.appendChild(paragrafoDiv)
    main.appendChild(newDiv)

    paragrafoDiv.style.display = 'none'
    
    newDiv.addEventListener('mouseenter', function() {
        paragrafoDiv.style.display = 'block'
        tituloDiv.style.display = 'none'
    })
    newDiv.addEventListener('mouseleave', function() {
        paragrafoDiv.style.display = 'none'
        tituloDiv.style.display = 'block'
    })
    // quando o mouse e precionado por 3 segundos remove a tarefa
    newDiv.addEventListener('mousedown', function() {
        temporizador = setTimeout(function() {
            newDiv.remove()
        }, 1000)
        newDiv.style.background = "linear-gradient(90deg, #00b4fc, #005bc5, #012677, #012677, #005bc5, #00b4fc)"

        tarefaConcluida = true
    })
    //quando o mouse sai da tarefa cancela o delete
    newDiv.addEventListener('mouseleave', function() {
        clearTimeout(temporizador)

        if (tarefaConcluida) {
            newDiv.style.background = 'green'
        }else {
            newDiv.style.background = '#17f9ff'
        }
    })
    //quando o mouse solta a tarefa tembem e calcelado o delete
    newDiv.addEventListener('mouseup', function() {
        clearTimeout(temporizador)
        newDiv.style.background = '#17f9ff'
    })
}

/*

lembrar de colocar um feito nas tarefas concluidas.

*/