import ItemFormulario from "./ItemFormulario"

function Contato() {
    return (

        <div>
            <h1>Contato</h1>

            <ItemFormulario label="Nome: " name="nome" tipo="text" ph="Digite seu nome..." ></ItemFormulario>

            <ItemFormulario label="E-mail: " name="email" tipo="email" ph="Digite seu email..." ></ItemFormulario>

            <ItemFormulario label="Assunto: " name="assunto" tipo="text" ph="Digite o motivo de contato..." ></ItemFormulario>

            <ItemFormulario label="Mensagem: " name="mensagem" tipo="text" ph="Digite aqui sua mensagem..." ></ItemFormulario>

            <button>Enviar</button>
            <br></br>
            <br></br>

        
        </div>




    )
}

export default Contato