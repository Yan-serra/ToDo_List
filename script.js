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
        `;

        lista.appendChild(item);
    });
}

lista();