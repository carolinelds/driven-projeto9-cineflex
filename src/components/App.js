import "./../css/reset.css";
import "./../css/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import TelaAssento from "./TelaAssento";
import TelaFilme from "./TelaFilme";
import TelaSessao from "./TelaSessao";
import TelaSucesso from "./TelaSucesso";
import Cabecalho from "./Cabecalho";
import NameContext from "../contexts/NameContext";
import CpfContext from "../contexts/CpfContext";

export default function App() {
    const [name, setName] = useState("");
    const [cpf, setCpf] = useState("");

    return (
        <NameContext.Provider value={{ name, setName }} >
            <CpfContext.Provider value={{ cpf, setCpf }} >
                <BrowserRouter>
                    <Cabecalho />

                    <Routes>
                        <Route path="/" element={<TelaFilme />}></Route>
                        <Route path="/sessoes/:idFilme" element={<TelaSessao />}></Route>
                        <Route path="/assentos/:idSessao" element={<TelaAssento />}></Route>
                        <Route path="/sucesso" element={<TelaSucesso />}></Route>
                    </Routes>

                </BrowserRouter>
            </CpfContext.Provider>
        </NameContext.Provider>
    );
}

