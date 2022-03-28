import { useEffect, useState } from "react";
import axios from "axios";

export default function FooterSimples(props){

    const id = props.idFilme;

    const [filme, setFilme] = useState({days: []});

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${id}/showtimes`);
        promise.then(response => {
            const { data } = response;
            //console.log(data);
            setFilme(data);
        })
    }, []);

    const urlFilme = filme.posterURL;
    const tituloFilme = filme.title;

    return (
        <div class="FooterSimples">
            <div class="moldura">
                <img src={urlFilme} alt={tituloFilme}/>
            </div>
            <p>{tituloFilme}</p>
        </div>
    );
}