import useCategorias from "../../../hooks/useCategorias";
import { Container } from './styles';
import { useState } from "react";

export default function Categorias(){
    const [itensVisiveis, setItensVisiveis] = useState(false);
    const {categorias} = useCategorias();

    return (
        <Container 
            onMouseOver={() => setItensVisiveis(true)}
            onMouseOut={() => setItensVisiveis(false)}
            itensVisiveis={itensVisiveis}
        >
            <label>CATEGORIAS</label>
            <ul>
                {itensVisiveis && categorias.map((categoria, index) => {
                    return (
                        <li key={index}>{categoria}</li>
                    );
                })}
            </ul>
        </Container>
    );
}