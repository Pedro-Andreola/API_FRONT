const listar = document.getElementById('listar')
const tc = document.getElementById('tabela_cliente')

const endpoint = ('http://localhost:3000/dados')

listar.addEventListener('click', ()=>{
    fetch(endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/Json',
        }
    })
    .then(resposta => resposta.json())
    .then(dados=>{
        console.log(dados)
        tc.innerHTML = ''
        dados.forEach((valores)=>{
            let nova_linha = document.createElement('tr')
            let id_cliente = document.createElement('td')
            id_cliente.textContent += valores.id
            nova_linha.appendChild(id_cliente)
            tc.appendChild(nova_linha)
            let nome_cliente = document.createElement('td')
            nome_cliente.textContent += valores.nome
            nova_linha.appendChild(nome_cliente)
            tc.appendChild(nova_linha)
            let idade_cliente = document.createElement('td')
            idade_cliente.textContent += valores.idade
            nova_linha.appendChild(idade_cliente)
            tc.appendChild(nova_linha)
        })
    })
})