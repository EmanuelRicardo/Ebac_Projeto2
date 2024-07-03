var linhas = '';
var imagem_aprovado = '<img src="imagens/emoje_festa.png" alt="Emoji festivo">'
var imagem_reprovado = '<img src="imagens/emoji_triste.png" alt="Emoje triste">'
var valor_media = window.document.getElementById ('media')

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
        // Isso aqui ta criando uma linha inteira com todas as informações
        linhas += linha;
        var quantidade_notas = linhas.length
        // Isso faz com que a gennte jogue cada vez mais "Linha", pois eu salvo o que ja tem no "Linhas" e acrescento cada vez mais "linha"
        var corpo_tabela = window.document.querySelector('tbody');
        corpo_tabela.innerHTML = linhas;

        window.alert (`Quantidade de linhas: ${quantidade_notas}`)

        nome_atividade.value = ''
        nota_atividade.value = ''
    }
    
}

// Nesse momento aqui o meu var quantidade de notas ta contando simplesmente todos os caracteres que estão sendo lançados em linhas, dando valores de 90, 150 e por aí vai. Tenho que fazer de uma forma que ele conte apenas a quantidade de notas.


