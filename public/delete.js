function deletarDados() {
    var cpf = document.getElementById('identificadorCPF').value

    fetch('http://:/pessoas')
        .then(response => response.json())
        .then(data => {
            const pessoa = data.find(pessoa => pessoa.cpf === cpf)

            if (pessoa) {
                if (!confirm('Remover o cliente ' + pessoa.nome + '?')) return

                fetch(`http://:/pessoas/${pessoa.id}`, {
                    method: 'DELETE'
                })
                .then(() => {
                    alert('Cliente removido com sucesso!')
                    document.getElementById('identificadorCPF').value = ''
                })
            } else {
                alert('CPF não encontrado.')
            }
        })
        .catch(() => alert('Não foi possível conectar ao servidor.'))
}