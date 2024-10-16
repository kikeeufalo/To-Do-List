let titulo = window.document.getElementById('titulo')
let descricao = window.document.getElementById('descricao')
let main = window.document.getElementById('main')
let verificador = false

function lerTarefas() {

    // Split divide um item em partes com base no delimitador fornecido 
    let arrayCookie = document.cookie.split(';') 
    let tituloC = []
    let descricaoC = []

    if (document.cookie) {

        // Separa por sinal de igualdade
        arrayCookie.forEach(cookie => {
            let partes = cookie.split('=') 
            tituloC.push(partes[0]) 
            descricaoC.push(partes[1])
        })

        // Mostra os cookies de tarefas salvas pegando por indice
        for (i = 0; i < arrayCookie.length; i++) { 
            titulo.value = tituloC[i]
            descricao.value = descricaoC[i]
            newElemnt()
        }
    
    }

    titulo.value = ''
    descricao.value = ''

    /* 
    Esta função esta separando os cookies e armazendo-os em um array, onde possa fazer a atribuição de valor correto
    */
}

function salvar() {
    if (titulo.value != '' && descricao.value != '') {
        document.cookie = `${titulo.value}=${descricao.value};` // salva as infomações em um cookie
        newElemnt()
    }else {
        window.alert("insira todos os dados para salvar")
    }

    titulo.value = ''
    descricao.value = ''
}

// Atribui uma data de 'validade' ao cookie assim deletando-o
function delCookies(name) {
    document.cookie = name + '=; Max-Age=0; path=/'
}

function newElemnt() {
    let temporizador
    let tarefaConcluida = false

    const newDiv = document.createElement('div')
    const tituloDiv = document.createElement('p')
    const paragrafoDiv = document.createElement('p')

    tituloDiv.textContent = titulo.value
    paragrafoDiv.textContent = descricao.value
    
    tituloDiv.style.fontWeight = 'bold'

    newDiv.appendChild(tituloDiv)
    newDiv.appendChild(paragrafoDiv)
    main.appendChild(newDiv)

    paragrafoDiv.style.display = 'none'

    // Quando o mouse entra
    newDiv.addEventListener('mouseenter', function() {
        paragrafoDiv.style.display = 'block'
        tituloDiv.style.display = 'none'
    })

    // Quando o mouse sai
    newDiv.addEventListener('mouseleave', function() {
        paragrafoDiv.style.display = 'none'
        tituloDiv.style.display = 'block'
        clearTimeout(temporizador)


    })

    // Quando o mouse é precionado
    newDiv.addEventListener('mousedown', function() {
        temporizador = setTimeout(function() {
            newDiv.remove()
            delCookies(tituloDiv.textContent)
        }, 1000)
        newDiv.style.background = "linear-gradient(90deg, #00b4fc, #005bc5, #012677, #012677, #005bc5, #00b4fc)"
    })

    //quando o mouse solta
    newDiv.addEventListener('mouseup', function() {
        clearTimeout(temporizador)
    })

    //quando o mouse é clicado
    newDiv.addEventListener('click', function() {
        if (!tarefaConcluida) {
            newDiv.style.background = '#009929'
        }else {
            newDiv.style.background = '#17f9ff'
        }

        if (!tarefaConcluida) {
            tarefaConcluida = true
            verificador = true
            delTarefaConcluida(tituloDiv.textContent)
        } else {
            tarefaConcluida = false
            verificador = false
        }
    })
}

//melhorar a função de deletar os cookies

function delTarefaConcluida(x) {
    setTimeout(function(){
        if (verificador) {
            delCookies(x)
            alert('tarefa deletada')
        }
    }, 10000)
}