// App.jsx
import { useState } from "react";
import Login from "./Login";
import Questões from "./Questões";
import { jsQuestões } from "./constantes";

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLoginSuccess = () => {
        setIsLoggedIn(true); // Atualiza o estado para indicar que o usuário está logado
    };

    return (
        <div>
            {isLoggedIn ? (
                <Questões perguntas={jsQuestões.perguntas} />
            ) : (
                <Login onLoginSuccess={handleLoginSuccess} />
            )}
        </div>
    );
}

export default App;
