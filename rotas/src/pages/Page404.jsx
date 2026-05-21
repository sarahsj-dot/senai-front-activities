import icon404 from "../assets/icon404.svg"
import "../styles/style.css"

export const Page404 = () => {
    return (
        <main className="page404">
            <header>
                <div className="links">
                    <span>Home</span>
                    <span>About</span>
                    <span>Contact</span>
                </div>
            </header>

            <div className="robberIcon">
                <img src={icon404} alt="404 icon" />

                <h2>Sorry, it looks like the page get lost
                    (or someone has stolen it recently)
                </h2>

                

            </div>
        </main>

    )
}