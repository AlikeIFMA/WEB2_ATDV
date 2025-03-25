
function pesquisar(){
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    campoPesquisa = campoPesquisa.toLowerCase();

    let resultados = "";
    let nome = "";
    let descricao = "";

    
    
    if (campoPesquisa == ""){
        dados.forEach((dado) => {
            resultados +=
            `
                <div class="item-resultado">
                    <div class="divcom">
                        <img src="${dado.src}" alt="${dado.alt}" height="250px">
                    </div>
                    <h2>${dado.nome}</h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                    <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Mais Informações</a>
                </div>
            `
        });

        section.innerHTML = resultados;
        return;
    }
    for (let dado of dados){
        nome = dado.nome.toLocaleLowerCase();
        descricao = dado.descricao.toLocaleLowerCase();
        
        if (nome.includes(campoPesquisa) || descricao.includes(campoPesquisa)){
            resultados += 
        `
            <div class="item-resultado">
                    <div class="divcom">
                        <img src="${dado.src}" alt="${dado.alt}" height="250px">
                    </div>
                <h2>${dado.nome}</h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Mais Informações</a>
            </div>
        `
        }
        
    }
    if(!resultados) {
        resultados = "<p>Resultado não Encontrado</p>"
    }     
    section.innerHTML = resultados;
}
