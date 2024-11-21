import { useParams } from "react-router-dom"
import info from "../Tipos.json"

function Detalhetipo (){

    const {slug} = useParams()
    const energia = info.find((energia) => energia.slug == slug)

    return(
        <>
        {
            energia ?
                <div className="text-center paginadetalhe">
                    <h1>{energia.tit}</h1>
                    <img src={energia.img} className="detalheimg" alt="" />
                    <p className="contdetalhe">{energia.texto1}</p>
                    <p className="contdetalhe">{energia.texto2}</p>
                </div>
            : <h1>Tipo de energia não enecontrada</h1>
        }
        </>
    )
}
export default Detalhetipo