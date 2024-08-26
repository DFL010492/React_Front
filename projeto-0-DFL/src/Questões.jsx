import { useState } from "react";
import { resultadoInicialState } from './constantes';

const Questões = ({ perguntas }) => {
    const [perguntaAtual, setPerguntaAtual] = useState(0);
    const [respostaIndex, setRespostasIndex] = useState(null);
    const [respostas, setRespostas] = useState(null);
    const [resultado, setResultado] = useState(resultadoInicialState);
    const [mostreResultado, setMostreResultado] = useState(false);
    const [nome, setNome] = useState('');
    const [matricula, setMatricula] = useState('');
    const [inicioQuiz, setInicioQuiz] = useState(false);

    const { questão, escolhas, resposta, explicacao } = perguntas[perguntaAtual];

    const aoResponderClick = (escolha, index) => {
        if (respostaIndex !== null) return;

        setRespostasIndex(index);
        if (escolha === resposta) {
            setRespostas(true);
        } else {
            setRespostas(false);
        }
    };

    const onClickNext = () => {
        setRespostasIndex(null);
        setResultado((prev) => 
            respostas
            ? {
                ...prev,
                score: prev.score + 5,
                respostasCertas: prev.respostasCertas + 1,
            } : {
                ...prev,
                respostasErradas: prev.respostasErradas + 1,
            }
        );

        if (perguntaAtual !== perguntas.length - 1) {
            setPerguntaAtual((prev) => prev + 1);
        } else {
            setPerguntaAtual(0);
            setMostreResultado(true);
        }
    };

    const onTenteNovamente = () => {
        setResultado(resultadoInicialState);
        setMostreResultado(false);
        setInicioQuiz(false);
        setNome('');
        setMatricula('');
    };

    const iniciarQuiz = () => {
        if (nome && matricula) {
            setInicioQuiz(true);
        } else {
            alert("Por favor, preencha seu nome e matrícula.");
        }
    };

    return (
        <div className="containerPergunta">
            {!inicioQuiz ? (
                <div className="inicio">
                    <h2>Por favor, insira suas informações:</h2>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        className="input"
                    />
                    <input
                        type="number"
                        placeholder="Matrícula"
                        value={matricula}
                        onChange={(e) => setMatricula(e.target.value)}
                        className="input"
                    />
                    <button onClick={iniciarQuiz} className="start-button">Iniciar Quiz</button>
                </div>
            ) : !mostreResultado ? (
                <>
                    <span className="perguntasAtivas">{perguntaAtual + 1}</span>
                    <span className="perguntasTotais">/{perguntas.length}</span>
                    <h2>{questão}</h2>
                    <ul>
                        {escolhas.map((escolha, index) => (
                            <li
                                onClick={() => aoResponderClick(escolha, index)}
                                key={escolha}
                                className={
                                    respostaIndex === index
                                        ? respostas
                                            ? 'opção-correta'
                                            : 'opção-incorreta'
                                        : null
                                }
                                style={{ pointerEvents: respostaIndex !== null ? 'none' : 'auto' }}
                            >
                                {escolha}
                            </li>
                        ))}
                    </ul>
                    {respostaIndex !== null && !respostas && (
                        <p className="explicacao">{explicacao}</p>
                    )}
                    <div className="rodape">
                        <button onClick={onClickNext} disabled={respostaIndex === null}>
                            {perguntaAtual === perguntas.length - 1 ? "Finish" : "Next"}
                        </button>
                    </div>
                </>
            ) : (
                <div className="resultado">
                    <h3>Resultado:</h3>
                    <p>Total de Questões: <span>{perguntas.length}</span></p>
                    <p>Placar: <span>{resultado.score}</span></p>
                    <p>Acertos: <span>{resultado.respostasCertas}</span></p>
                    <p>Erros: <span>{resultado.respostasErradas}</span></p>
                    <button onClick={onTenteNovamente}>Tente Novamente</button>
                </div>
            )}
        </div>
    );
};

export default Questões;
