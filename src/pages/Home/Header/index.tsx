
import ilustracao_a_esquerda from '../../../assets/header/ilustracao_a_esquerda.svg';
import ilustracao_a_direita  from '../../../assets/header/ilustracao_a_direita.svg';
import {ReactComponent as SearchIcon} from '../../../assets/icons/search-icon.svg';
import {OndeComecar, Ilustracoes , Container, Input} from './styles';

export default function Header(){
    return (
        <Container>
                <Ilustracoes>
                    <img src={ilustracao_a_esquerda} style={{marginLeft: 46}}/>
                    <img src={ilustracao_a_direita} style={{marginRight: 18}} />
                </Ilustracoes>
                <OndeComecar>
                    <h1>Já sabe por onde começar?</h1>
                    <h3>Encontre em nossa estante o que precisa para seu desenvolvimento!</h3>
                    <Input>
                        <SearchIcon width={17.5} height={17.5}/>
                        <input type="text" placeholder="Qual será sua próxima leitura?"/>
                    </Input>
                </OndeComecar>
        </Container>
    );
}