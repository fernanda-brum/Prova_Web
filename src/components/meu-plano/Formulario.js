import React, { useState } from "react";

const Formulario = ({ gravar, onCancel }) => {
    const [novoPlano, setNovoPlano] = useState({
        titulo: "",
        descricao: "",
        duracao: "",
    });

    const handleChange = (field, value) => {
        setNovoPlano((prev) => ({ ...prev, [field]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        gravar(novoPlano); // Envia os dados para o componente pai
        setNovoPlano({ titulo: "", descricao: "", duracao: "" }); // Reseta o formulário
    };

    return (
        <div>
            <h2>Adicionar Novo Plano</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input
                        type="text"
                        value={novoPlano.titulo}
                        onChange={(e) => handleChange("titulo", e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Descrição:</label>
                    <textarea
                        value={novoPlano.descricao}
                        onChange={(e) => handleChange("descricao", e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Duração:</label>
                    <input
                        type="text"
                        value={novoPlano.duracao}
                        onChange={(e) => handleChange("duracao", e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Salvar</button>
                <button type="button" onClick={onCancel}>
                    Cancelar
                </button>
            </form>
        </div>
    );
};

export default Formulario;
