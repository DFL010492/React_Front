import { useState } from "react";
import { resultadoInicialState } from './constantes';

const Questões = ({ perguntas }) => {
    // Definindo estados iniciais para gerenciar o estado do quiz
    const [perguntaAtual, setPerguntaAtual] = useState(0); // Índice da pergunta atual
    const [respostaIndex, setRespostasIndex] = useState(null); // Índice da resposta selecionada pelo usuário
    const [respostas, setRespostas] = useState(null); // Verifica se a resposta selecionada está correta ou não
    const [resultado, setResultado] = useState(resultadoInicialState); // Estado para armazenar o resultado do quiz
    const [mostreResultado, setMostreResultado] = useState(false); // Indica se o resultado final deve ser exibido
    const [nome, setNome] = useState(''); // Armazena o nome do usuário
    const [matricula, setMatricula] = useState(''); // Armazena a matrícula do usuário
    const [inicioQuiz, setInicioQuiz] = useState(false); // Indica se o quiz foi iniciado

    // Desestruturação para obter os elementos da pergunta atual
    const { questão, escolhas, resposta, explicacao } = perguntas[perguntaAtual];

    // Função chamada quando o usuário clica em uma resposta
    const aoResponderClick = (escolha, index) => {
        if (respostaIndex !== null) return; // Impede que o usuário selecione mais de uma resposta

        setRespostasIndex(index); // Armazena o índice da resposta selecionada
        if (escolha === resposta) {
            setRespostas(true); // Define que a resposta está correta
        } else {
            setRespostas(false); // Define que a resposta está incorreta
        }
    };

    // Função chamada quando o usuário clica no botão "Next" ou "Finish"
    const onClickNext = () => {
        setRespostasIndex(null); // Reseta o índice da resposta para a próxima pergunta
        // Atualiza o estado de resultado com base na resposta atual
        setResultado((prev) => 
            respostas
            ? {
                ...prev,
                score: prev.score + 5, // Incrementa o placar se a resposta estiver correta
                respostasCertas: prev.respostasCertas + 1, // Incrementa o contador de respostas corretas
            } : {
                ...prev,
                respostasErradas: prev.respostasErradas + 1, // Incrementa o contador de respostas erradas
            }
        );

        if (perguntaAtual !== perguntas.length - 1) {
            setPerguntaAtual((prev) => prev + 1); // Vai para a próxima pergunta
        } else {
            setPerguntaAtual(0); // Reseta o índice para a primeira pergunta
            setMostreResultado(true); // Exibe o resultado final do quiz
        }
    };

    // Função para tentar novamente o quiz, resetando todos os estados para os valores iniciais
    const onTenteNovamente = () => {
        setResultado(resultadoInicialState); // Reseta o resultado para o estado inicial
        setMostreResultado(false); // Oculta o resultado
        setInicioQuiz(false); // Reseta o estado de início do quiz
        setNome(''); // Limpa o nome do usuário
        setMatricula(''); // Limpa a matrícula do usuário
    };

    // Função para iniciar o quiz após o usuário inserir nome e matrícula
    const iniciarQuiz = () => {
        if (nome && matricula) {
            setInicioQuiz(true); // Inicia o quiz se o nome e a matrícula estiverem preenchidos
        } else {
            alert("Por favor, preencha seu nome e matrícula."); // Mostra um alerta se os campos não estiverem preenchidos
        }
    };

    return (
        <div className="containerPergunta">
            {!inicioQuiz ? ( // Verifica se o quiz foi iniciado
                <div className="inicio">
                    <h2>Por favor, insira suas informações:</h2>
                    <input
                        type="text"
                        placeholder="Nome"
                        value={nome}
                        onChange={(e) => setNome(e.target.value)} // Atualiza o estado do nome
                        className="input"
                    />
                    <input
                        type="number"
                        placeholder="Matrícula"
                        value={matricula}
                        onChange={(e) => setMatricula(e.target.value)} // Atualiza o estado da matrícula
                        className="input"
                    />
                    <button onClick={iniciarQuiz} className="start-button">Iniciar Quiz</button>
                </div>
            ) : !mostreResultado ? ( // Verifica se o resultado final deve ser mostrado
                <>
                    <span className="perguntasAtivas">{perguntaAtual + 1}</span>
                    <span className="perguntasTotais">/{perguntas.length}</span>
                    <h2>{questão}</h2> {/* Exibe a questão atual */}
                    <ul>
                        {escolhas.map((escolha, index) => (
                            <li
                                onClick={() => aoResponderClick(escolha, index)} // Chama a função aoResponderClick ao clicar em uma escolha
                                key={escolha}
                                className={
                                    respostaIndex === index
                                        ? respostas
                                            ? 'opção-correta' // Aplica a classe 'opção-correta' se a resposta estiver correta
                                            : 'opção-incorreta' // Aplica a classe 'opção-incorreta' se a resposta estiver incorreta
                                        : null
                                }
                                style={{ pointerEvents: respostaIndex !== null ? 'none' : 'auto' }} // Desativa o clique nas escolhas após a resposta
                            >
                                {escolha}
                            </li>
                        ))}
                    </ul>
                    {respostaIndex !== null && !respostas && (
                        <p className="explicacao">{explicacao}</p> // Exibe a explicação se a resposta estiver errada
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
                    <button onClick={onTenteNovamente}>Tente Novamente</button> {/* Botão para reiniciar o quiz */}
                </div>
            )}
        </div>
    );
};

export default Questões;
