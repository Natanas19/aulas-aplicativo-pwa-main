import BotaoCustomizado from "../../componentes/BotaoCustomizado/BotaoCustomizado";
import Principal from "../../componentes/Principal/Principal";
import "./PaginaInicial.css";

import { useNavigate } from 'react-router-dom';

function PaginaInicial() {
  const navigate = useNavigate();

  return (
    <Principal>
      <BotaoCustomizado tipo="primario" aoClicar={() => navigate('/lista-produtos')}>
        LISTA DE PRODUTOS
        </BotaoCustomizado>

      <BotaoCustomizado tipo="primario" aoClicar={() => navigate('/cadastro-produto')}>
        CADASTRAR PRODUTO
        </BotaoCustomizado>

        <BotaoCustomizado tipo="primario" aoClicar={() => navigate('/lista-tarefas')}>
        LISTA DE TAREFAS
        </BotaoCustomizado>
    </Principal>
  );
}

export default PaginaInicial;
