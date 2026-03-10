import "./styles.css";


export default function Card({title, price, src, alt, description, category}){
return(
<article>        
        <h1>{title}</h1>
        <img src={src} alt={alt} />
        <p>{price}</p>
        <p>{description}</p>
        <p>{category}</p>
    </article>
)


}