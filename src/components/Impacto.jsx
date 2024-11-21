import Cardimpacto from "./Cardimpacto"

function Impacto (){

    const dados = [
        {
            tit: 'Redução das emissões de carbono',
            desc: 'Com a diminuição no uso de combustíveis fósseis, as energias renováveis ajudam a reduzir a quantidade de CO₂ e outros poluentes na atmosfera, o que desacelera o aquecimento global e mitiga eventos climáticos extremos, como secas e enchentes.',
            img: "/cardco2.jpg",
            tipo: 1
        },
        {
            tit: 'Melhoria da qualidade do ar e da saúde pública',
            desc: 'A substituição de fontes poluentes por energias limpas reduz emissões de partículas e poluentes, diminuindo doenças respiratórias e cardiovasculares, principalmente em áreas urbanas.',
            img: "/cardar.jpg",
            tipo: 2
        },
    ]

    return(
        <>
            <section id="impacto" class="container text-center py-5">
                <h2>Impactos</h2>
                <div class="todoimpacto">
                    <Cardimpacto impacto={dados}/>
                </div>
            </section>
        </>
    )
}
export default Impacto