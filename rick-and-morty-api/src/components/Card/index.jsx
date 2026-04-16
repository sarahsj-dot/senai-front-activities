import './style.css'
import alienCard from '../../assets/icons/alienCard.svg'
import rayCard from '../../assets/icons/rayCard.svg'
import planetCard from '../../assets/icons/planetCard.svg'

export const Card = ({image, name, specie, status, location}) => {


    return(
        <div className="card-characters">
            <img src={image} alt={name} />
            <h3>{name}</h3>
            <div className="description-characters">
                <ul>
                    <li>
                        <img src={alienCard} alt="" />
                        {specie}
                    </li>
                    <li>
                        <img src={rayCard} alt="" />
                        {status}
                    </li>
                    <li>
                        <img src={planetCard} alt="" />
                        {location}
                    </li>
                </ul>
            </div>
        </div>
    )
}