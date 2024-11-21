import { Link } from "react-router-dom"

function Cardtipo({energia}){
    return(
        <>
        {
            energia.map((pegaenergia) =>(

                <Link to={`tipoenergia/${pegaenergia.slug}`}>
                    <article class="card">
                        <h3>{pegaenergia.tit}</h3>
                        <p>{pegaenergia.desc}</p>
                        <button class="btn btn-primary">Saber Mais</button>
                    </article>
                </Link>

            ))
        }
        </>
    )
}
export default Cardtipo