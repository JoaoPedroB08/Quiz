let errado = document.getElementById('opcao')
let pergunta1 = document.getElementById('PerguntasSelect1')
let pergunta2 = document.getElementById('PerguntasSelect2')
let pergunta3 = document.getElementById('PerguntasSelect3')
let resposta = document.getElementById('Resultado')

function MostraValorSelect(){

    resposta.value = Number(pergunta1.value) + Number(pergunta2.value) + Number(pergunta3.value)

    if(resposta.value == 3){

        alert('Você acertou todas as perguntas!')

    }else if(resposta.value == 2){

        alert('Você acertou duas perguntas!')

    }else if(resposta.value == 1){

        alert('Você acertou uma pergunta!')

    }else if(resposta.value == 0){

        alert('Você errou todas!')

    }else if(errado == pergunta1, pergunta2, pergunta3){

        alert('Selecione todas as opções!')

    }

}