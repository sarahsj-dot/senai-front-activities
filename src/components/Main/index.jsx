import heroRickMorty from '../../assets/images/heroRickMorty.png'
import heroTitulo from '../../assets/icons/heroTitulo.svg'
import './style.css'

export const Main = () => {
    return(
        <main>

            <div>
                <img src={heroRickMorty} alt="ilustração do Rick" />
            </div>

            <div className="content-main">
                <img src={heroTitulo} alt="logo Rick and Morty" />
                <h1>Bem-vindos ao <span>consumo de API</span> do Rick and Morty</h1>
                <p>Aqui você encontra informações sobre os personagens de Rick and Morty.</p>

                <div className="container-btn-main">
                    <a href="" className="btn-primary">Veja agora</a>
                    <a href="" className="btn-secondary"> Saiba mais</a>
                </div>
            </div>

        </main>
    )
}