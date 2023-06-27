import { AbBotao, AbCampoTexto, AbModal } from "alurabooks-ds-alessandro-maciel";

import imagem from './assets/login.png';
import { useState } from "react";
import { Container, Form, Footer, EsqueciSenha, Registro, TextoCriarConta } from "./styles";
import axios from "axios";

interface ModalProps {
    visivel: boolean,
    aoFechar: () => void,
    aoFazerLogin: () => void,
}

export default function ModalLoginUsuario({visivel, aoFechar, aoFazerLogin}: ModalProps){
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const limparFormulario = () => {
        setEmail('');
        setSenha('');
    }

    const fazerLogin = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const usuario = {
            email,
            senha,
        }

        axios.post('http://localhost:8000/public/login', usuario)
            .then((response) => {
                sessionStorage.setItem('token', response.data.access_token);
                
                limparFormulario();
                aoFazerLogin();
            })
            .catch((error) => {
                if (error?.response?.data?.message) {
                    alert(error?.response?.data?.message);
                    
                    return;
                }

                alert('Error');
            })
    }

    return (
        <AbModal 
            titulo="LOGIN"
            visivel={visivel}
            aoFecharModal={() => {
                limparFormulario();
                aoFechar();
            }}
        >
            <Container>
                <figure>
                    <img src={imagem} alt="Monitor com uma fechadura e uma pessoa com uma chave logo ao lado" />
                </figure>
                
                <div>
                    <Form onSubmit={fazerLogin}>
                        <AbCampoTexto
                            value={email}
                            label="Email"
                            placeholder="seuemail@maneiro.com.br"
                            type="text"
                            onChange={setEmail}
                        />
                        <AbCampoTexto
                            value={senha}
                            label="Senha"
                            placeholder="************"
                            type="password"
                            onChange={setSenha}
                        />
                        <Footer>
                            <EsqueciSenha href="#">Esqueci minha senha</EsqueciSenha>
                            <AbBotao 
                                texto="Fazer Login"
                                tipo="primario"
                                onPress={() => {}}
                            />
                        </Footer>
                    </Form>
                    <Registro>
                        <TextoCriarConta>Ainda não tem uma conta?</TextoCriarConta>
                        <AbBotao 
                            texto="Criar conta"
                            tipo="primario"
                            onPress={() => {}}
                        />
                    </Registro>
                </div>
            </Container>
        </AbModal>
    );
}