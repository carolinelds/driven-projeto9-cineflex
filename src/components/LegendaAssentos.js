export default function LegendaAssentos(){
    return(
        <div class="LegendaAssentos">
            <div class="opcoes-container">
                <div class="assento-selecionado"></div>
                <p>Selecionado</p>
            </div>
            <div class="opcoes-container">
                <div class="assento-disponivel"></div>
                <p>Disponível</p>
            </div>
            <div class="opcoes-container">
                <div class="assento-indisponivel"></div>
                <p>Indisponível</p>
            </div>
        </div>
    );
}