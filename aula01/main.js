var linhas = '';
var imagem_aprovado = '<img src="imagens/emoje_festa.png" alt="Emoji festivo">'
var imagem_reprovado = '<img src="imagens/emoji_triste.png" alt="Emoje triste">'

function botao_add(e){
    e.preventDefault();

    var nome_atividade = window.document.getElementById ('nome_atividade')
    var nota_atividade = window.document.getElementById ('nota_atividade')

    if (nome_atividade.value.length == 0 || nota_atividade.value.length == 0){
        window.alert ('Você não preencheu nada, faça novamente!')
    } else {
        var linha = '<tr>';
        linha += `<td>${nome_atividade.value}</td>`
        linha += `<td>${nota_atividade.value}</td>`
        linha += `<td>${nota_atividade.value >= 6? imagem_aprovado : imagem_reprovado}`
        linha += '</tr>';

        linhas += linha;

        var corpo_tabela = window.document.querySelector('tbody');
        corpo_tabela.innerHTML = linhas;

        nome_atividade.value = ''
        nota_atividade.value = ''
    }
    
}

