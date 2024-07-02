function botao_add(e){
    e.preventDefault();

    var nome_atividade = window.document.getElementById ('nome_atividade')
    var nota_atividade = window.document.getElementById ('nota_atividade')

    if (nome_atividade.value.length == 0 || nota_atividade.value.length == 0){
        window.alert ('Você não preencheu nada, faça novamente!')
    } else {
        window.alert ('Tá funcionando')
        window.alert (`O nome é: ${nome_atividade.value} e a nota é ${nota_atividade.value}`)
    }
    
}

