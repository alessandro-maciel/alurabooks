import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as UserIcon} from '../../assets/icons/user.svg';
import Categorias from "./Categorias";
import {Container, HeaderContainer, HeaderLogo, Login, LoginCadastro} from './styles';
import ModalCadastroUsuario from '../ModalCadastroUsuario/ModalCadastroUsuario';
import { useState } from 'react';
import ModalLoginUsuario from '../ModalLoginUsuario/ModalLoginUsuario';
import { Link } from 'react-router-dom';

export default function Header(){
    const [modalCadastroVisivel, setModalCadastroVisivel] = useState(false);
    const [modalLoginVisivel, setModalLoginVisivel] = useState(false);

    const token = sessionStorage.getItem('token');
    const [usuarioEstaLogado, setUsuarioEstaLogado] = useState(token != null);

    const aoFazerLogin = () => {
        setModalLoginVisivel(true);
        setUsuarioEstaLogado(true);
    }

    return (
        <Container>
            <HeaderContainer>
                <HeaderLogo>
                    <Logo width={40} height={40}/>
                    <h1>AluraBooks</h1>
                </HeaderLogo>
                <Categorias />
            </HeaderContainer>
            {!usuarioEstaLogado &&
                <LoginCadastro>
                    <Login
                        onClick={() => setModalLoginVisivel(true)}
                    >
                        <UserIcon width={32} height={32}/>
                        <p>Login</p>
                    </Login>
                    <ModalLoginUsuario 
                        visivel={modalLoginVisivel}
                        aoFechar={() => setModalLoginVisivel(false)}
                        aoFazerLogin={aoFazerLogin}
                    />
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
            }
            {usuarioEstaLogado &&
                <LoginCadastro>
                    <Link to="/minha-conta/pedidos " >
                        <Login>
                            <UserIcon width={32} height={32}/>
                            <p>Minha conta</p>
                        </Login>
                    </Link>
                </LoginCadastro>
            }
        </Container>
    );
}