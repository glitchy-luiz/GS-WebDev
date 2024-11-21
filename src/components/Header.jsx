import { NavLink } from "react-router-dom"

function Header (){
    return(
        <>
        <header class="container-fluid bg-primary text-white text-center p-3">
            <h1>Energia Limpa e um Futuro Sustentável</h1>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item"><NavLink class="nav-link" to="/">Home</NavLink></li>
                        <li class="nav-item"><NavLink class="nav-link" to="/info">Informações</NavLink></li>
                        <li class="nav-item"><NavLink class="nav-link" to="/beneficio">Benefícios</NavLink></li>
                    </ul>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Header