let tarefas= JSON.parse(localStorage.getItem("tarefa")) ||[];

function  addTarefa(){
    let titulo = document.getElementById("titulo").value;
    let descricaotarefa = document.getElementById("descricaotarefa").value;
    let prioridades = document.getElementById("prioridades").value;

    if(titulo && descricaotarefa && prioridades){
        alert("Preencha todos os campos por gentileza!");
        return;
    }
}

let data = new Date().toDateString();

let tarefa={
    titulo, descricaotarefa,prioridades, data, status:"Pendente | Em andamento| Finalizada"
}

tarefa.push(tarefa);
addTarefa();
lista();

document.getElementById("titulo").value = " ";
document.getElementById("descricaotarefa").value = " ";
document.getElementById("prioridades").value = " ";

function salvaTarefa(){
    localStorage.setItem("tarefa", JSON.stringify(tarefa));
}


function lista(){
    let lista = document.getElementById("lista");
    lista.innerHTML = " ";

    tarefas.forEach((tarefa,Index)=> {
        let iten = document.createElement("iten");
        iten.innerHTML = `
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

