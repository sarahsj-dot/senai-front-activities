import logoGitHub from '../../assets/icons/logoGitHub.svg'
import './style.css'

//criar componente(função) com arrow function(=> {})
export const Header = () => {
    return(
        <header>
            <div className="header-wrapper">
                <a href="">
                <span>SarahSantos</span>
                <img src={logoGitHub} alt="Logo GitHub" />
                </a>
            </div>
        </header>
    )
}