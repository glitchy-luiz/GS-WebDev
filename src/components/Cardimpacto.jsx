
function Cardimpacto({impacto}){
    return(
        <>
        {
            impacto.map((pegaimpacto) => (
                pegaimpacto.tipo == 1?
                <div class="contdireita">
                    <div class="cont-p2">
                        <h4 class="tit-proj">Redução das emissões de carbono</h4>
                        <p class="desc-p2">Com a diminuição no uso de combustíveis fósseis, as energias renováveis ajudam a reduzir a quantidade de CO₂ e outros poluentes na atmosfera, o que desacelera o aquecimento global e mitiga eventos climáticos extremos, como secas e enchentes.</p>
                    </div>
                    <img class="imgimpacto" src="/cardco2.jpg" alt=""/>
                </div>
                : 
                <div class="contesquerda">
                    <img class="imgimpacto" src="/cardar.jpg" alt=""/>
                    <div class="cont-p">
                        <h4 class="tit-proj">Melhoria da qualidade do ar e da saúde pública</h4>
                        <p class="desc-p">A substituição de fontes poluentes por energias limpas reduz emissões de partículas e poluentes, diminuindo doenças respiratórias e cardiovasculares, principalmente em áreas urbanas.</p>
                    </div>
                </div>
            
            ))
        }
        </>
    )
}
export default Cardimpacto