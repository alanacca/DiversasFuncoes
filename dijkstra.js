function Dijkstra(_grafo, _inicio, _fim) {

    var t = new Date();

    var aberta = new Caminho();
    var fechada = new Caminho();
    var i = 0;
    var m = 0;
    var inicial = new No();

    inicial.dado = _inicio;
    inicial.conexoes = null;
    inicial.total = 0;


    aberta.add(inicial);

    var atual, conexoes, final, custoFinal, noFinal, c = new Conexoes();

    while (aberta.length()) {
        atual = aberta.menorNo();

        if (_fim === atual.dado)
            break;

        conexoes = _grafo.pegarConexoesNo(atual.dado);

        c = null;i = 0;
        m = conexoes.length;

        for (i; i < m; i++) {
            c = conexoes[i];

            if (c.paraNo.dado !== atual.dado)
                final = c.paraNo;
            else
                final = c.doNo;

            custoFinal = atual.total + c.custo;


            if (fechada.contem(final)) {
                continue;
            }
            else if (aberta.contem(final)) {
                final = aberta.procurar(final);
                if (final.total <= custoFinal)
                    continue;
            }
            else {
                noFinal = new No();
                noFinal.dado = final.dado;
                noFinal.conexoes = [new Conexoes( atual, final, c.custo)];
                noFinal.total = custoFinal;


                if (aberta.contem(final) === false)
                    aberta.add(noFinal);
            }
        }
        aberta.sub(atual)
        fechada.add(atual)
    }

    if (atual.dado !== _fim) {
        return null;
    }
    else {
        var control = 10;
        var caminho = [];
        while ( control-->0 ) {
            caminho.push(atual);
            if( atual.conexoes )
                atual = atual.conexoes[0].doNo;
            else break;
        }

        console.log('tempo:', new Date()-t);
        return caminho;
    }

}
