function Curso(props) {

    return (

        <div>

            <h2>
                {props.nome}
            </h2>

            <p>
                {props.descricao}
            </p>

        </div>

    );

}

export default Curso;