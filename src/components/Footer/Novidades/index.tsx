import { Container, Input, Textos } from "./styles";
import {ReactComponent as MessageIcon} from '../../../assets/message-icon.svg';

export default function Novidades(){
    return (
        <Container>
            <Textos>
                <p>Fique por dentro das novidades!</p>
                <p>Atualizações de e-books, novos livros, promoções e outros.</p>
            </Textos>
            <Input>
                <MessageIcon width={20} height={16}/>
                <input type="text" placeholder="Cadastre seu e-mail"/>
            </Input>
        </Container>
    );
}