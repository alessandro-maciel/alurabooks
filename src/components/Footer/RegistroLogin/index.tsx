import { AbBotao } from "alurabooks-ds-alessandro-maciel";
import { Botoes, Container, Textos } from "./styles";

export default function RegistroLogin(){
    return (
        <Container>
            <Textos>
                <p>Já possui uma conta?</p>
                <p>Com um conta você pode criar sua própria estante de livros e e-books.</p>
            </Textos>
            <Botoes>
                <AbBotao
                    texto="Criar conta"
                    onPress={() => {}}
                    tipo="secundario"
                />
                <AbBotao
                    texto="Fazer login"
                    onPress={() => {}}
                    tipo="primario"
                />
            </Botoes>
        </Container>
    );
}