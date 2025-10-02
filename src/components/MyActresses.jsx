import { useState } from "react"; {/*Creazione della variabile di stato*/}

export default function ActressesList() { 
    const [actressesList, setActressesList] = useState ([]); {/*Array vuoto per inserire i dati di results*/}

    function fetchActresses () {
        axios.get("https://lanciweb.github.io/demo/api/actresses/")
            .then((res) => console.log(res)) 
    }

    return (
        <div>
            <h1>Actresses</h1>
            <ul>
                {actressesList.map((actress) => (
                    <li key={actress.id}>{actress.name}</li>
                ))}
            </ul>
        </div>
    );
}