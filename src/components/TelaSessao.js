import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import FooterSimples from "./FooterSimples";


export default function TelaSessao() {

    const { idFilme } = useParams();
    const [filme, setFilme] = useState({days: []});

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
                    sessoes.map(day =>{
                        const { weekday, date } = day;
                        
                        return (
                            <div class="dia-horarios" key={day.id}>
                                <p>{weekday} - {date}</p>

                                <div class="container-horarios">
                                    {
                                        day.showtimes.map(horario =>{
                                            const {name} = horario;

                                            return (
                                                <div class="horario" key={horario.id}>
                                                    <p>{name}</p>
                                                </div>
                                            );
                                        })
                                    }
                                </div>
                            </div>
                            
                        );
                        
                    })
                }
            </div>
            <FooterSimples idFilme={idFilme}/>
        </div>
    ) : <p>Carregando...</p>
}