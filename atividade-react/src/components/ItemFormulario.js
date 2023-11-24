function ItemFormulario(props) {
    return (
        <div>
            

            <label for={props.name}> {props.label}</label>
            <input type={props.tipo} name={props.name} id={props.name} placeholder={props.ph}></input>
            <br></br>
            <br></br>

            
           

        </div>

    )
}

export default ItemFormulario