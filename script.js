let tarefas= JSON.parse(localStorage.getItem("tarefa")) ||[];

function salvaTarefa(){
    localStorage.setItem("tarefa", JSON.stringify(tarefa));
}

function  addTarefa(){
    let titulo = document.getElementById("titulo").value;
    let descricaotarefa = document.getElementById("descricaotarefa").value;
    let prioridades = document.getElementById("prioridades").value;

    if(!titulo || !descricaotarefa || !prioridades){
        alert("Preencha todos os campos por gentileza!");
        return;
    }
}

let data = new Date().toDateString('pt-BR');

let tarefa={
    titulo, descricaotarefa,prioridades, data, status:"Pendente | Em andamento| Finalizada"
}

tarefas.push(tarefa);

salvaTarefa();
lista();

document.getElementById("titulo").value = "";
document.getElementById("descricaotarefa").value = "";


function lista(){
    let lista = document.getElementById("lista");
    lista.innerHTML = " ";

    tarefas.forEach((tarefa,index)=> {
        let item = document.createElement("li");
        
        item.innerHTML = `
        <h3>${tarefa.titulo}</h3>
        <p>${tarefa.descricaotarefa}</p>
        <p>Prioridade: ${tarefa.prioridades}</p>
        <p>Data: ${tarefa.data}</p>
        <p>Status: ${tarefa.status}</p>
        <button onclick="editar(${Index})">Editar</button>
        <button onclick="deletar(${Index})">Deletar</button>
        `;
        lista.appendChild(iten);
        

    })
}

lista();

