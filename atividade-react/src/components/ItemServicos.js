

function ItemServicos(props) {
    return (
        <div>
            
            
            <img src={props.foto}></img>
            <br></br>

            <h4>{props.nome}</h4>

            <p>{props.preco} </p>
            <br></br>

            
        </div>
    )
}
export default ItemServicos