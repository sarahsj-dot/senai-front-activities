import { Link } from "react-router-dom"

export const Home = () => {
    return(
        <>

        <h1>Home Page</h1>
        <Link to="/sobre">About</Link>
        <br />
        <Link to="/contato">Contact</Link>
        </>
    
        
    )
}