import Questões from "./Questões"
import { jsQuestões } from "./constantes";

function App() {
  return  <Questões perguntas={jsQuestões.perguntas} />;
}

export default App
