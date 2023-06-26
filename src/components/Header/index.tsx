import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as UserIcon} from '../../assets/icons/user.svg';
import Categorias from "./Categorias";
import {Container, HeaderContainer, HeaderLogo, Login, LoginCadastro} from './styles';
import ModalCadastroUsuario from '../ModalCadastroUsuario/ModalCadastroUsuario';
import { useState } from 'react';

export default function Header(){
    const [modalCadastroVisivel, setModalCadastroVisivel] = useState(false);

    return (
        <Container>
            <HeaderContainer>
                <HeaderLogo>
                    <Logo width={40} height={40}/>
                    <h1>AluraBooks</h1>
                </HeaderLogo>
                <Categorias />
            </HeaderContainer>
            <LoginCadastro>
                <Login>
                    <UserIcon width={32} height={32}/>
                    <p>Login</p>
                </Login>
                <Login
                    onClick={() => setModalCadastroVisivel(true)}
                >
                    <UserIcon width={32} height={32}/>
                    <p>Cadastrar-se</p>
                </Login>
                <ModalCadastroUsuario 
                    visivel={modalCadastroVisivel}
                    aoFechar={() => setModalCadastroVisivel(false)}
                />
            </LoginCadastro>
        </Container>
    );
}