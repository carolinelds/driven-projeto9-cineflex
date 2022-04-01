export default function FooterCompleto(props) {
    const { titulo, poster, diaSemana, horario } = props;

    return (
        <div class="FooterCompleto">
            <div class="moldura">
                <img src={poster} alt={titulo} />
            </div>
            <div class="infos-filme">
                <p class="titulo">{titulo}</p>
                <p class="dia-horario">{diaSemana} - {horario}</p>
            </div>
        </div>

    );
}