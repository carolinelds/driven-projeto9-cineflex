import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import NameContext from "./../contexts/NameContext";
import CpfContext from "./../contexts/CpfContext";

export default function FormsComprador(props) {

    const selecionados = props;
    const { setName } = useContext(NameContext);
    const { setCpf } = useContext(CpfContext);

    const [nomeComprador, setNomeComprador] = useState("");
    const [cpfComprador, setCpfComprador] = useState("");

    function reservarAssentos(event) {
        event.preventDefault();

        if (selecionados.length >= 1) {
            console.log(selecionados);
            alert("Selecione pelo menos um assento para prosseguir.");
        } else {

            const promise = axios.post("https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many", {
                ids: selecionados,
                name: nomeComprador,
                cpf: cpfComprador
            });
            promise.then((response) => {
                const { data } = response;
                console.log(data);
                setName(nomeComprador);
                setCpf(cpfComprador);
                mudarPagina();

            });
            promise.catch(err => {
                console.log(err.status)
                setNomeComprador("");
                setCpfComprador("");
            });
        }
    }

    let navigate = useNavigate();

    function mudarPagina() {
        navigate("/sucesso");
    }

    return (
        <div class="FormsComprador">
            <form onSubmit={reservarAssentos}>
                <p>Nome do comprador:</p>
                <input type="text" value={nomeComprador} onChange={e => setNomeComprador(e.target.value)} placeholder="Digite seu nome" required />
                <p>CPF do comprador:</p>
                <input type="text" value={cpfComprador} onChange={e => setCpfComprador(e.target.value)} placeholder="Digite seu CPF" required />
                <div>
                    <button type="submit">Reservar assento(s)</button>
                </div>
            </form>
        </div>
    );
}