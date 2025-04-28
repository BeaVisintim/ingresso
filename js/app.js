function comprar() {
    const tipo = document.getElementById('tipo-ingresso').value;
    const qtd = parseInt(document.getElementById('qtd').value, 10);

    if (isNaN(qtd) || qtd <= 0) {
        alert('Por favor, insira uma quantidade válida.');
        return;
    }

    const mapaIngressos = {
        inferior: 'qtd-inferior',
        superior: 'qtd-superior',
        pista: 'qtd-pista'
    };
}