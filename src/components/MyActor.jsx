import MyActorCard from "./MyActorCard";
import { useState, useEffect } from "react"; 

export default function ActorList() { {/*Creazione della variabile di stato*/}
    const [actorList, setActorList] = useState ([]); {/*Array vuoto per inserire i dati dalla chiamata*/}

    function fetchActor () { {/*Chiamata AXIOS, se la risposta sarà positiva inserisci l'array richiamato, se negativa dai errore in console.log*/}
        axios.get("https://lanciweb.github.io/demo/api/actors/")
            .then((res) => setActorList(res.data)) 
            .catch((error) => console.log(error))
    }

    useEffect (() => { {/*Utilizzo del useEffect per invocare la funzione*/}
        fetchActor ();
    }, []); {/*Essendo una dipendenza di stato vuota, la funzione partirà soltanto all'avvio del componente (MOUNTING)*/}

    return (
        <div className="mainContainer">
            <div className="containerCard">
                {actorList.map((actor) => (
                    <MyActorCard key={actor.id} actor={actor}/>
                ))}
            </div>
        </div>       
    );
}