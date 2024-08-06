import React, {useState} from "react";
import Producto from './Producto';

const Productos = () =>{
    const [titulo] = useState("LISTADO DE PRODUCTOS")
    const [productos, setProductos] = useState([
        {
            id: 1,
            title: "Moto Z",
            price: 1000,
            category: "Motos"
        },
        {
            id: 2,
            title: "Moto X",
            price: 800,
            category: "Motos"
            },
            {
                id: 3,
                title: "Moto Y",
                price: 1200,
                category: "Motos"
                }

    ]);

    const filtrar = () =>{
        setProductos([
            {
                id: 1,
                title: "Moto Z",
                price: 1000,
                category: "Motos"
                }
        ])
    }
    return(
        <div>
            <h1>{titulo}</h1>
            {productos.map(producto => (
            <Producto key={producto.id} title={producto.title} price={producto.price} category={producto.category}/>
        ))}
        <button onClick={filtrar}>Filtrar</button>
        </div>
    )
};

export default Productos;