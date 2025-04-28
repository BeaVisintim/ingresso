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


    const spanId = mapaIngressos[tipo];

    if (!spanId) {
        alert('Tipo de ingresso inválido.');
        return;
    }


    const estoqueEl = document.getElementById(spanId);
    const estoqueDisponivel = parseInt(estoqueEl.textContent, 10);

    if (qtd > estoqueDisponivel) {
        alert(`Não há ingressos suficientes para ${tipo}. Disponível: ${estoqueDisponivel}`);
        return;
    }


    estoqueEl.textContent = estoqueDisponivel - qtd;
}