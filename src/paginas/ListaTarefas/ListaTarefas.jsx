import { useState } from "react";
import Principal from "../../componentes/Principal/Principal";
import CampoCustomizado from "../../componentes/CampoCustomizado/CampoCustomizado";
import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";

function ListaTarefas({}){
    const [novaTarefa, setNovaTarefa] = useState("");
    const [tarefas, setTarefas] = useState([]);

    const adicionarTarefa = () => {
        if (novaTarefa.trim() === "") {
            alert("Digite uma tarefa!");
            return;
        }

        setTarefas([...tarefas, novaTarefa]);
    }

    return ( <Principal>
        <h2>Lista de Tarefas</h2>

            <CampoCustomizado 
            id="nova-tarefa"
            label="Nova Tarefa"
            type="text" 
            placeholder="Pressione Enter para adicionar" 
            value={novaTarefa} 
            onChange={(event) => setNovaTarefa(event.
            target.value)}
            />

            <BotaoCustomizado tipo="primario"
            aoClicar={adicionarTarefa}
            >
            +</BotaoCustomizado>

            {JSON.stringify(tarefas, null, 2)}
        </Principal>
    )
}

export default ListaTarefas;