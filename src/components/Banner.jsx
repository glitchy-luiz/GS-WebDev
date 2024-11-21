
function Banner (){
    return(
        <>
            <section id="intro" class="container text-center py-5">
                <h2>O que é Energia Limpa?</h2>
                <p>Descubra como as fontes de energia limpa estão moldando o futuro sustentável e contribuindo para reduzir a pegada de carbono.</p>
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="/energia-solar.jpg" class="d-block w-100 imgcarrosel" alt="Energia Solar"/>
                        </div>
                        <div class="carousel-item">
                            <img src="/energia-eolica.jpg" class="d-block w-100 imgcarrosel" alt="Energia Eólica"/>
                        </div>
                        <div class="carousel-item">
                            <img src="/energia-hidre.png" class="d-block w-100 imgcarrosel" alt="Energia Hidrelétrica"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Anterior</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Próximo</span>
                    </a>
                </div>
            </section>
        </>
    )
}
export default Banner