import MyActressesCard from "./MyActressesCard";
import { useState, useEffect } from "react"; 

export default function ActressesList() { {/*Creazione della variabile di stato*/}
    const [actressesList, setActressesList] = useState ([]); {/*Array vuoto per inserire i dati dalla chiamata*/}

    function fetchActresses () { {/*Chiamata AXIOS, se la risposta sarà positiva inserisci l'array richiamato, se negativa dai errore in console.log*/}
        axios.get("https://lanciweb.github.io/demo/api/actresses/")
            .then((res) => setActressesList(res.data)) 
            .catch((error) => console.log(error))
    }

    useEffect (() => { {/*Utilizzo del useEffect per invocare la funzione*/}
        fetchActresses ();
    }, []); {/*Essendo una dipendenza di stato vuota, la funzione partirà soltanto all'avvio del componente (MOUNTING)*/}

    return (
        <div className="containerCard">
            {actressesList.map((actress) => (
                <MyActressesCard key={actress.id} actress={actress}/>
            ))}
        </div>
    );
}