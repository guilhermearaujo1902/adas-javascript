function descobrirTurno() {

    // Mapeando o input do arquivo 'turno.html', capturando o valor que foi digitado
    // e atribuindo esse valor para a constante 'hora'
    const hora = document.getElementById('hora').value;

    // Mapear a div do arquivo 'turno.html' que vai receber o valor do processamento
    // de dados, ou seja, o valor do turno correto validado no IF
    const divResultado = document.getElementById('resultado');

    // Testar para descobrir qual o turno do horário indicado
    if (hora >= 6 && hora <= 14) {
        divResultado.innerHTML = '<p> Primeiro turno! </p>';
    } else if (hora > 14 && hora <= 22) {
        divResultado.innerHTML = '<p> Segundo turno! </p>';
    } else {
        divResultado.innerHTML = '<p> Turno não definido! </p>';
    }

    // Mapeando o input novamente e atribuindo uma string vazia, ou seja, um texto vazio
    // para a propriedade 'value'
    document.getElementById('hora').value = ''; 

}