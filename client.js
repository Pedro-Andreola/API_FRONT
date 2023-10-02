let res = document.getElementById('res')
let resN = document.getElementById('res_nome')
let resI = document.getElementById('res_idade')
let cadastra = document.getElementById('cadastra')
let consulta = document.getElementById('consulta')

let endpoint = 'http://localhost:3000/dados'

cadastra.addEventListener('click', ()=>{
    let nome = document.getElementById('nome').value
    let idade = document.getElementById('idade').value

    let dados ={
        nome: nome,
        idade: idade
    }

    fetch(endpoint,{
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dados)
    }
        )
    .then(res=> res.json())
    .then(retorno =>{
    console.log(retorno)
    })
})

consulta.addEventListener('click', ()=>{
    const codigo = document.getElementById('codigo').value
    fetch(`${endpoint}/${codigo}`,{
        method: "GET",
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => res.json())
    .then(dados =>{
        console.log(dados)
        resN.innerHTML =('Nome: '+ dados.nome)
        resI.innerHTML =('Idade: '+ dados.idade)
    })
})