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
    // quando o mouse entra
    newDiv.addEventListener('mouseenter', function() {
        paragrafoDiv.style.display = 'block'
        tituloDiv.style.display = 'none'
    })
    newDiv.addEventListener('mouseleave', function() {
        paragrafoDiv.style.display = 'none'
        tituloDiv.style.display = 'block'
    })
    // quando o mouse é precionado por alguns segundos remove a tarefa
    newDiv.addEventListener('mousedown', function() {
        temporizador = setTimeout(function() {
            newDiv.remove()
        }, 1000)
        newDiv.style.background = "linear-gradient(90deg, #00b4fc, #005bc5, #012677, #012677, #005bc5, #00b4fc)"
        if (!tarefaConcluida) {
            tarefaConcluida = true
        } else {
            tarefaConcluida = false
        }
    })
    //quando o mouse sai da tarefa cancela o delete
    newDiv.addEventListener('mouseleave', function() {
        clearTimeout(temporizador)

        if (tarefaConcluida) {
            newDiv.style.background = '#009929'
        }else {
            newDiv.style.background = '#17f9ff'
        }
    })
    //quando o mouse solta a tarefa tembem e calcelado o delete
    newDiv.addEventListener('mouseup', function() {
        clearTimeout(temporizador)
        if (tarefaConcluida) {
            newDiv.style.background = '#009929'
        }else {
            newDiv.style.background = '#17f9ff'
        }
    })
}

/*

    Lembrte:  
      arrumar o delete dos cookie
*/