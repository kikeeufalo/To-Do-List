let titulo = window.document.getElementById('titulo')
let descricao = window.document.getElementById('descricao')
let main = window.document.getElementById('main')

function lerTarefas() {

    // split divide um item em partes com base no delimitador fornecido 
    let arrayCookie = document.cookie.split(';') 
    let tituloC = []
    let descricaoC = []

    if (document.cookie) {

        // separa por sinal de igualdade
        arrayCookie.forEach(cookie => {
            let partes = cookie.split('=') 
            tituloC.push(partes[0]) 
            descricaoC.push(partes[1])
        })

        //mostra os cookies de tarefas salvas pegando por indice
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

function delCookies(name) {
    document.cookie = name + '=; Max-Age=0; path=/'
}

function newElemnt() {
    let temporizador
    let tarefaConcluida = false

    const newElemnt = document.createElement('div')
    const tituloDiv = document.createElement('h2')
    const paragrafoDiv = document.createElement('p')

    const paragrafoTeste = document.createElement('p')

    paragrafoTeste.textContent = titulo.value
    paragrafoTeste.textContent = descricao.value
    
    paragrafoTeste.appendChild(paragrafoTeste)
    paragrafoTeste.appendChild(paragrafoTeste)
    main.appendChild(paragrafoTeste)

    paragrafoTeste.style.display = 'none'

    // quando o mouse entra
    paragrafoTeste.addEventListener('mouseenter', function() {
        paragrafoTeste.style.display = 'block'
        paragrafoTeste.style.display = 'none'
    })

    //quando o mouse sai
    paragrafoTeste.addEventListener('mouseleave', function() {
        paragrafoTeste.style.display = 'none'
        paragrafoTeste.style.display = 'block'
        clearTimeout(temporizador)

        if (tarefaConcluida) {
            paragrafoTeste.style.background = '#009929'
        }else {
            paragrafoTeste.style.background = '#17f9ff'
        }
    })

    // quando o mouse é precionado
    paragrafoTeste.addEventListener('mousedown', function() {
        temporizador = setTimeout(function() {
            paragrafoTeste.remove()
            delCookies(paragrafoTeste.textContent)
        }, 1000)
        paragrafoTeste.style.background = "linear-gradient(90deg, #00b4fc, #005bc5, #012677, #012677, #005bc5, #00b4fc)"
        if (!tarefaConcluida) {
            tarefaConcluida = true
        } else {
            tarefaConcluida = false
        }
    })

    //quando o mouse solta
    paragrafoTeste.addEventListener('mouseup', function() {
        clearTimeout(temporizador)
        if (tarefaConcluida) {
            paragrafoTeste.style.background = '#009929'
        }else {
            paragrafoTeste.style.background = '#17f9ff'
        }
    })
}