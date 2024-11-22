import { NavLink } from "react-router-dom"

function Header (){
    return(
        <>
        <header className="container-fluid bg-primary text-white text-center p-3">
            <h1>Energia Limpa e um Futuro Sustentável</h1>
            <nav className="navbar navbar-expand-lg navbar-dark">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item"><NavLink className="nav-link" to="/">Home</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/info">Informações</NavLink></li>
                        <li className="nav-item"><NavLink className="nav-link" to="/beneficio">Benefícios</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header