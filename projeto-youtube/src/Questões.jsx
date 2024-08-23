import { useState } from "react";

const Questões = ({ perguntas }) => {
    const [perguntaAtual, setPerguntaAtual] = useState(0);

    const {questão, escolhas, resposta}= perguntas[perguntaAtual];

    return <div className="containerPergunta">
        <>
            <span className="perguntasAtivas">{perguntaAtual + 1}</span>
            <span className="perguntasTotais">/{perguntas.length}</span>
        </>
    </div>;
};

export default Questões;