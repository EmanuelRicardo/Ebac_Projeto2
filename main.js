var linhas = '';
var imagem_aprovado = '<img src="imagens/emoje_festa.png" alt="Emoji festivo">'
var imagem_reprovado = '<img src="imagens/emoji_triste.png" alt="Emoje triste">'
var valor_media = window.document.getElementById ('media')
var contador_media = 0
var valor_total_notas = 0
var media = 0
var passou_ou_nao = window.document.getElementById ('passou_ou_nao')
var nota_minima = Number (prompt('Digite a nota minima: '))


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
        linha += `<td>${nota_atividade.value >= nota_minima? imagem_aprovado : imagem_reprovado}`
        linha += '</tr>';
        // Isso aqui ta criando uma linha inteira com todas as informações
        linhas += linha;
        // Isso faz com que a gennte jogue cada vez mais "Linha", pois eu salvo o que ja tem no "Linhas" e acrescento cada vez mais "linha"
        if (nome_atividade.value.length != 0){
            contador_media += 1
        } 
        // Isso aqui vai contar quantas vezes foi lançado um numero no "nota_atividade"
        var nota_atividade_number = Number(nota_atividade.value)
        valor_total_notas += nota_atividade_number

        media = valor_total_notas / contador_media
        valor_media.innerHTML = media.toFixed(1)


        var corpo_tabela = window.document.querySelector('tbody');
        corpo_tabela.innerHTML = linhas;


        if (media >= nota_minima){
            passou_ou_nao.innerHTML = 'Aprovado'
            passou_ou_nao.style.backgroundColor = 'green'
        } else {
            passou_ou_nao.innerHTML = 'Reprovado'
            passou_ou_nao.style.backgroundColor = 'red'
        }

        nome_atividade.value = ''
        nota_atividade.value = ''
    }
    
}

// preciso mudar agora aquele indicador de aprovado ou reprovado
