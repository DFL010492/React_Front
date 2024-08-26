import { useState } from "react";
import { resultadoInicialState } from './constantes';

const Questões = ({ perguntas }) => {
    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const [respostaIndex, setRespostasIndex] = useState(null);
    const [respostas, setRespostas] = useState(null);
    const [resultado, setResultado] = useState(resultadoInicialState);
    const [mostreResultado, setMostreResultado] = useState(false)

    const {questão, escolhas, resposta}= perguntas[perguntaAtual];

    const aoResponderClick = (respostas, index) => {
        setRespostasIndex(index);
        if (respostas === resposta) {
            setRespostas(true);
        }
        else {
            setRespostas(false);
        }
    }

    const onClickNext = () => {
        setRespostasIndex(null);
        setResultado((prev) => 
        respostas
        ? {
            ...prev,
            score: prev.score + 5,
            respostasCertas: prev.respostasCertas + 1
        } : {
            ...prev,
            respostasErradas: prev.respostasErradas + 1
        });

        if (perguntaAtual !== perguntas.length - 1) {
            setPerguntaAtual((prev) => prev +1);
        }
        else {
            setPerguntaAtual(0);
            setMostreResultado(true);
        }

    };

    const onTenteNovamente = () => {
        setResultado(resultadoInicialState);
        setMostreResultado(false);
    };

    return <div className="containerPergunta">

        {!mostreResultado ? (
            <>
            <span className="perguntasAtivas">{perguntaAtual + 1}</span>
            <span className="perguntasTotais">/{perguntas.length}</span>
            <h2>{questão}</h2>
            <ul>
                {escolhas.map((escolhas, index) => (
                    <li    
                    onClick={()=> aoResponderClick(escolhas, index)}
                    key={escolhas}
                    className={respostaIndex === index ? 'opção-selecionada' : null}
                    >
                        {escolhas}
                        </li>
                    ))}
            </ul>
            <div className="rodape">
                <button onClick={onClickNext} disabled = {respostaIndex === null}>
                    {perguntaAtual === perguntas.length - 1 ? "Finish" : "Next" }
                </button>
            </div>
            </>
        ) : (<div className="resultado">
            <h3>Resultado:</h3>
            <p>
                Total de Questões: <span>{perguntas.length}</span>
            </p>
            <p>
                Placar: <span>{resultado.score}</span>
            </p>
            <p>
                Acertos: <span>{resultado.respostasCertas}</span>
            </p>
            <p>
                Erros: <span>{resultado.respostasErradas}</span>
            </p>
            <button onClick={onTenteNovamente}>Tente Novamente</button>
            </div>
        )}
        </div>;
};

export default Questões;