import { useState } from "react";
import CardPlano from "../components/meu-plano/CardPlano";
import Formulario from "../components/meu-plano/Formulario";

const MeuPlano = () => {
    const [itens, setItens] = useState([
        {
            titulo: "Corrida",
            descricao: "Corrida leve de 30 minutos",
            duracao: "30 minutos",
        },
        {
            titulo: "Yoga",
            descricao: "Sessão de Yoga de 45 minutos",
            duracao: "45 minutos",
        },
    ]);

    const [formularioAberto, setFormularioAberto] = useState(false);

    const removerItem = (index) => {
        const novosItens = itens.filter((_, i) => i !== index);
        setItens(novosItens);
    };

    const adicionarPlano = (novoPlano) => {
        setItens([...itens, novoPlano]);
        setFormularioAberto(false); // Fecha o formulário
    };

    return (
        <div>
            <h1>Meu Plano</h1>

            {itens.length === 0 && !formularioAberto && (
                <div>
                    <h1>Nenhum plano disponível</h1>
                    <button onClick={() => setFormularioAberto(true)}> Adicionar Plano </button>
                </div>
            )}

            {formularioAberto && (
                <Formulario
                    gravar={adicionarPlano}
                    onCancel={() => setFormularioAberto(false)}
                />
            )}

            {!formularioAberto && itens.length > 0 && (
                <div>
                    <CardPlano itens={itens} onRemover={removerItem} />
                    <button onClick={() => setFormularioAberto(true)}> Adicionar Plano </button>
                </div>
            )}
            
        </div>
    );
};

export default MeuPlano;
