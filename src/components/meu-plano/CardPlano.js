import { Link } from "react-router-dom";

const CardPlano = (props) => {
  return (
    <div>
      {props.itens.map((item, index) => (
        <div className="cardPlano" key={index}>
          <h1>{item.titulo}</h1>
          <p>{item.descricao}</p>
          <p>Duração: {item.duracao}</p>
          <button><Link to="/historico">Ver Detalhes</Link></button>
          <button onClick={() => props.onRemover(index)}>Remover</button>
        </div>
      ))}
    </div>
  );
};

export default CardPlano;
