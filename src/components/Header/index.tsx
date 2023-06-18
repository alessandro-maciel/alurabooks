import {ReactComponent as Logo} from '../../assets/logo.svg';
import {ReactComponent as UserIcon} from '../../assets/icons/user.svg';
import Categorias from "./Categorias";
import {Container, HeaderContainer, HeaderLogo, Login} from './styles';

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
            <Login>
                <UserIcon width={32} height={32}/>
                <p>Login</p>
            </Login>
        </Container>
    );
}