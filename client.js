let res = document.getElementById('res')
let cadastra = document.getElementById('cadastra')
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