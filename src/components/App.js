import "./../css/reset.css";
import "./../css/styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TelaAssento from "./TelaAssento";
import TelaFilme from "./TelaFilme";
import TelaSessao from "./TelaSessao";
import TelaSucesso from "./TelaSucesso";
import Head from "./Head";

export default function App() {

    return (
        <BrowserRouter>
            <Head /> 

            <Routes> 
                <Route path="/" element={<TelaFilme />}></Route>
                <Route path="/sessoes/:idFilme" element={<TelaSessao />}></Route>
                <Route path="/assentos/:idSessao" element={<TelaAssento />}></Route>
                <Route path="/sucesso" element={<TelaSucesso />}></Route>
            </Routes>

        </BrowserRouter>
    );
}

