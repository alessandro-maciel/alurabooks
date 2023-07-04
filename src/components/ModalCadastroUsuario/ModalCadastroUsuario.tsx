import { AbBotao, AbCampoTexto, AbModal } from "alurabooks-ds-alessandro-maciel";

import imagem from './assets/login.png';
import { useState } from "react";
import { Container, Form, Footer, ComplementoCep } from "./styles";
import http from "../../http";

interface ModalProps {
    visivel: boolean,
    aoFechar: () => void,
}

export default function ModalCadastroUsuario({visivel, aoFechar}: ModalProps){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cep, setCep] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    const limparFormulario = () => {
        setNome('');
        setEmail('');
        setEndereco('');
        setComplemento('');
        setCep('');
        setSenha('');
        setConfirmaSenha('');
    }

    const cadastrarUsuario = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        const cliente = {
            nome,
            email,
            endereco,
            complemento,
            cep,
            senha,
        }

        http.post('/public/registrar', cliente)
            .then(() => {
                alert('usuário cadastrado com sucesso');
                limparFormulario();
                aoFechar();
            })
            .catch(() => {
                alert('Algo deu errado');
            });
    }

    return (
        <AbModal 
            titulo="CADASTRO"
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
                
                <Form onSubmit={cadastrarUsuario}>
                    <AbCampoTexto
                        value={nome}
                        label="Nome"
                        placeholder="Seu nome completo"
                        type="text"
                        onChange={setNome}
                    />
                    <AbCampoTexto
                        value={email}
                        label="Email"
                        placeholder="seuemail@maneiro.com.br"
                        type="text"
                        onChange={setEmail}
                    />
                    <AbCampoTexto
                        value={endereco}
                        label="Endereco"
                        placeholder="Sua rua e número"
                        type="text"
                        onChange={setEndereco}
                    />
                    <ComplementoCep>
                        <AbCampoTexto
                            value={complemento}
                            label="Complemento"
                            placeholder="Apto/casa, bloco, referência"
                            type="text"
                            onChange={setComplemento}
                        />
                        <AbCampoTexto
                            value={cep}
                            label="Cep"
                            placeholder="Apto/casa e bloco"
                            type="text"
                            onChange={setCep}
                        />
                    </ComplementoCep>
                    <AbCampoTexto
                            value={senha}
                            label="Senha"
                            placeholder="************"
                            type="password"
                            onChange={setSenha}
                        />
                    <AbCampoTexto
                        value={confirmaSenha}
                        label="Confirmar senha"
                        placeholder="************"
                        type="password"
                        onChange={setConfirmaSenha}
                    />
                    <Footer>
                        <AbBotao 
                            texto="Cadastrar"
                            tipo="primario"
                            onPress={() => {}}
                        />
                    </Footer>
                </Form>
            </Container>
        </AbModal>
    );
}