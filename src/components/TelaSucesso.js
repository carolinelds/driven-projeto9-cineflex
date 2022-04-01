import { useContext } from "react";
import { Link } from "react-router-dom";
import NameContext from "./../contexts/NameContext";
import CpfContext from "./../contexts/CpfContext";
import DadosCompraContext from "../contexts/DadosCompraContext";


export default function TelaSucesso() {

    const { dadosCompra } = useContext(DadosCompraContext);
    const { cpf } = useContext(CpfContext);
    const { name } = useContext(NameContext);

    return (
        <div class="TelaSucesso">
            <h1>Pedido feito com sucesso!</h1>
            <div class="info">
                <h2>Filme e sessão</h2>
                <p>{dadosCompra.titulo}</p>
                <p>{dadosCompra.diaMes} {dadosCompra.horario}</p>
            </div>
            <div class="info">
                <h2>Ingressos</h2>
                {
                    dadosCompra.assentosComprados.map(assento => {
                        return (
                            <p key={assento}>Assento {assento}</p>
                        )
                    })
                }
            </div>
            <div class="info">
                <h2>Comprador</h2>
                <p>Nome: {name}</p>
                <p>CPF: {cpf}</p>
            </div>
            <div class="btn">
                <Link to="/">
                    <button>Voltar para Home</button>
                </Link>
            </div>
        </div>
    );
}