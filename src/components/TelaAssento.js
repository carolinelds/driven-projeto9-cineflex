import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import LegendaAssentos from "./LegendaAssentos";
import FormsComprador from "./FormsComprador";
import FooterCompleto from "./FooterCompleto";

export default function TelaAssento() {
    const { idSessao } = useParams();
    const [assentos, setAssentos] = useState(null);
    const [selecionados, setSelecionados] = useState([]);
    const [titulo, setTitulo] = useState("");
    const [poster, setPoster] = useState("");
    const [diaSemana, setDiaSemana] = useState("");
    const [horario, setHorario] = useState("");

    useEffect(() => {
        const promise = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`);
        promise.then(response => {
            const { data } = response;
            //console.log(data);
            setAssentos(data);
            setTitulo(data.movie.title);
            setPoster(data.movie.posterURL);
            setDiaSemana(data.day.weekday);
            setHorario(data.name);
        });
        promise.catch(err => console.log(err.response.status));
    }, []);

    function selecionarAssento(id, isAvailable) {
        if (!isAvailable) {
            alert("Esse assento não está disponível.");
        }
        else {
            if (selecionados.includes(id)) {
                const novoSelecionados = selecionados.filter(el => el !== id);
                setSelecionados(novoSelecionados);
            } else {
                setSelecionados([...selecionados, id]);
            }
        }
    }


    function definirCor(id, isAvailable) {
        if (!isAvailable) {
            return "assento-indisponivel";
        }
        else {
            if (selecionados.includes(id)) {
                return "assento-selecionado";
            } else {
                return "assento-disponivel";
            }
        }
    }

    return assentos !== null ? (
        <div class="TelaAssento">
            <p>Selecione o(s) assento(s)</p>
            <div class="assentos-container">
                {
                    assentos.seats.map(assento => {
                        const { id, name, isAvailable } = assento;

                        const classeAssento = definirCor(id, isAvailable);

                        return (
                            <div
                                key={id}
                                class={classeAssento}
                                onClick={() => selecionarAssento(id, isAvailable)}>
                                <p>{name}</p>
                            </div>
                        );
                    })
                }
            </div>
            <LegendaAssentos />
            <FormsComprador selecionados={selecionados} />
            <FooterCompleto
                titulo={titulo}
                poster={poster}
                diaSemana={diaSemana}
                horario={horario}
            />
        </div>
    ) : <div class="TelaAssento">Carregando...</div>
}