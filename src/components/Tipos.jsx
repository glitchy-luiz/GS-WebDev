import Cardtipo from "./Cardtipo"
import info from "../Tipos.json"

function Tipos (){
    return(
        <>
            <section id="tipos" class="container py-5">
                <div class="todotipo">
                <h2 class="tittipos">Tipos de Energia</h2>
                <div class="grid-container">
                    <Cardtipo energia={info}/>
                </div>
                </div>
            </section>

            {/* <div class="modal fade" id="videoModal" tabindex="-1" role="dialog" aria-labelledby="videoModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="videoModalLabel">Vídeo Educativo</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            <iframe width="100%" height="400px" src="https://www.youtube.com/watch?v=FsMMbA09axY" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
                        </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}
export default Tipos