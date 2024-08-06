
const Producto = (props) =>{

    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.category}</p>
            <p>{props.price}</p>
            <button>Ver detalle</button>
        </div>
    )
}

export default Producto;

