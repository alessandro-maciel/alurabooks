import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as UserIcon} from '../../assets/icons/user.svg';
import Categorias from "./Categorias";
import {Container, HeaderContainer, HeaderLogo, Login, LoginCadastro} from './styles';
import ModalCadastroUsuario from '../ModalCadastroUsuario/ModalCadastroUsuario';

export default function Header(){
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
                <Login>
                    <UserIcon width={32} height={32}/>
                    <p>Cadastrar-se</p>
                    <ModalCadastroUsuario />
                </Login>
            </LoginCadastro>
        </Container>
    );
}