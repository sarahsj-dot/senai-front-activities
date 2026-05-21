import { Link } from "react-router-dom"


export const Sobre =() =>{
    return(
        <>
        <h1>About Page</h1>
        <Link to="/">Home</Link>
        <br />
        <Link to="/contato">Contact</Link>
        </>
    )
}

