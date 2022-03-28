import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function TelaFilme() {
    const [imagens, setImagens] = useState([]);

    useEffect(() => {
        const promise = axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
        promise.then((response) => {
            const { data } = response;
            setImagens(data);
        })
        promise.catch(err => console.log(err.response));
    }, []);


    return imagens.length > 0 ? (
        <div class="TelaFilme">
            <div class="container-header">
                <p>Selecione o filme</p>
            </div>
            <div class="container-filmes">
                {
                    imagens.map(imagem => {
                        const { id, title, posterURL } = imagem;

                        return <div className="filme" key={id}>
                            <Link to={`/sessoes/${id}`}>
                                <div class="moldura">
                                    <img src={posterURL} alt={title} />
                                </div>
                            </Link>
                        </div>
                    })
                }
            </div>
        </div>
    ) : <p>Carregando...</p>
}