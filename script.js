let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvaTarefa(){
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function addTarefa(){
    let titulo = document.getElementById("titulo").value;
    let descricaotarefa = document.getElementById("descricaotarefa").value;
    let prioridades = document.getElementById("prioridades").value;

    if (!titulo || !descricaotarefa || !prioridades){
        alert("Preencha todos os campos!");
        return;
    }

    let data = new Date().toLocaleDateString('pt-BR');

    let tarefa = {
        titulo,
        descricaotarefa,
        prioridades,
        data,
        status: "Pendente"
    };

    tarefas.push(tarefa);

    salvaTarefa();
    lista();

    document.getElementById("titulo").value = "";
    document.getElementById("descricaotarefa").value = "";
}

function lista(){
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    tarefas.forEach((tarefa,index)=> {
        let item = document.createElement("li");

        item.className = tarefa.status === "Concluída" ? "concluir" : "";

        item.innerHTML = `
        <h3>${tarefa.titulo}</h3>
        <p>${tarefa.descricaotarefa}</p>
        <p>Prioridade: ${tarefa.prioridades}</p>
        <p>Data: ${tarefa.data}</p>
        <p>Status: ${tarefa.status}</p>

        <button onclick = "concluirTarefa(${index})"> Concluir </button>
        <button onclick = "remove(${index})"> Remover </button>
        <button onclick = "toggleStatus(${index})"> Alterar Status </button>
        <button onclick = "editarTarefa(${index})"> Editar </button>

        `;

        lista.appendChild(item);
    });
}

function PesquisesuaTarefa(){
    let pesquisa = document.getElementById("pesquisar").value.toLowerCase();
    let filtrarTarefa = tarefas.filter(tarefa => tarefa.titulo.toLowerCase().includes(pesquisa));

    mostraFiltrada(filtrarTarefa);
}

function mostraFiltrada(listaFiltrada){
    let lista = document.getElementById("lista");
    lista.innerHTML = "";

    if (listaFiltrada.length === 0){
        lista.innerHTML = "<p> Nenhuma tarefa encontada! Insira uma nova tarefa.</p>";
        return;
    }

    listaFiltrada.forEach((tarefa, index) => {
        let item = document.createElement("li");
        item.className = tarefa.status === "Concluída" ? "concluir" : "";
        item.innerHTML = `

        <h3>${tarefa.titulo}</h3>
        <p>${tarefa.descricaotarefa}</p>
        <p>Prioridade: ${tarefa.prioridades}</p>
        <p>Data: ${tarefa.data}</p>
        <p>Status: ${tarefa.status}</p>

        `;

        lista.appendChild(item);
    });   
}

function concluirTarefa(index){
    tarefas[index].status = "Tarefa Concluída!";
    salvaTarefa();
    lista();
}

function remove(index){
    tarefas.splice(index,1);

    salvaTarefa();
    lista();
}

function toggleStatus(index){
    tarefas[index].status = tarefas[index].status === "Pendente" ? "Concluída" : "Pendente";
    salvaTarefa();
    lista();
}

function editarTarefa(index){
    let novoTitulo = prompt("Digite o novo título da tarefa:");
    let novaDescricao = prompt("Digite a nova descrição da tarefa:");

    if (novoTitulo && novaDescricao){
        tarefas[index].titulo = novoTitulo;
        tarefas[index].descricaotarefa = novaDescricao;
        salvaTarefa();
        lista();
    }
    }




lista();