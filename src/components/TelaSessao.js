import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import FooterSimples from "./FooterSimples";


export default function TelaSessao() {

    const { idFilme } = useParams();
    const [filme, setFilme] = useState({ days: [] });

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`);
        promise.then(response => {
            const { data } = response;
            //console.log(data);
            setFilme(data);
        })
    }, []);

    const sessoes = filme.days;

    return sessoes.length > 0 ? (
        <div class="TelaSessao">
            <p>Selecione o horário</p>
            <div class="container-sessoes">
                {
                    sessoes.map(day => {
                        const { weekday, date } = day;

                        return (
                            <div class="dia-horarios" key={day.id}>
                                <p>{weekday} - {date}</p>

                                <div class="container-horarios">
                                    {
                                        day.showtimes.map(horario => {
                                            const { name } = horario;
                                            const idSessao = horario.id;                                            
                                            return (
                                                <Link to={`/assentos/${idSessao}`} key={horario.id} style={{textDecoration: 'none'}}>
                                                    <div class="horario">
                                                        <p>{name}</p>
                                                    </div>
                                                </Link>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                        );
                    })
                }
            </div>
            <FooterSimples idFilme={idFilme} />
        </div>
    ) : <div class="TelaSessao">Carregando...</div>
}