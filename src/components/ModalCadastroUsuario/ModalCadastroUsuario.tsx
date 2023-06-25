import { AbBotao, AbCampoTexto, AbModal } from "alurabooks-ds-alessandro-maciel";

import imagem from './assets/login.png';
import { useState } from "react";
import { Container, Form, Footer, ComplementoCep } from "./styles";

export default function ModalCadastroUsuario(){
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [endereco, setEndereco] = useState('');
    const [complemento, setComplemento] = useState('');
    const [cep, setCep] = useState('');
    const [senha, setSenha] = useState('');
    const [confirmaSenha, setConfirmaSenha] = useState('');

    return (
        <AbModal 
            titulo="CADASTRO"
            visivel={true}
        >
            <Container>
                <figure>
                    <img src={imagem} alt="Monitor com uma fechadura e uma pessoa com uma chave logo ao lado" />
                </figure>
                
                <Form>
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