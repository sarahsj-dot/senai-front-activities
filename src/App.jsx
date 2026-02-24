import { useEffect, useState } from "react";
import Card from "./components/Card";
import PokeCard from "./components/PokeCard";

export default function App(){

    const [data, setData] = useState({})
    
    useEffect(() => {
        fetch("https://pokeapi.co/api/v2/pokemon/ditto")
        .then((response) => response.json())
        .then((data) => setData(data))
    }, [])

    console.log("state", data)


    return (
        <>
        <Card 
        title="Bicicleta"
        price={1000}
        description="Black Bike"
        category="Transporte"
        src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcST9DCBFxvnSzeP3be3XjxyaOgCN7fv1qYzusn5p9TIGh9SS7-DVr0JvsknPPn6DKnXYyjJGhjHKNXvTaba97Sq7Bi8rBXQth0Evydn6oaUTMO7Aj7mcD1lyg"
        />

        <PokeCard 
        name={data?.name}
        image={data?.sprites?.front_default}
        type={data?.types[0]?.type?.name} />

        {/* <Card 
        title={data.title}
        price={data.price}
        description={data.description}
        category={data.category}
        src={data.image}
        /> */}
        </>
    )
    
}