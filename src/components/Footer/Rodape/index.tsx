import { Container, GrupoAlura, Grupos, Item, ItemTitulo, GrupoOpcao, ItemOpcao } from "./styles";
import {ReactComponent as Caelum} from '../../../assets/rodape/caelum.svg';
import {ReactComponent as CasaDoCodigo} from '../../../assets/rodape/casa_do_codigo.svg';
import {ReactComponent as Alura} from '../../../assets/rodape/alura.svg';
import {ReactComponent as Empresas} from '../../../assets/rodape/alura_para_empresas.svg';
import {ReactComponent as Latam} from '../../../assets/rodape/alura_latam.svg';
import {ReactComponent as Start} from '../../../assets/rodape/alura_start.svg';
import {ReactComponent as Music} from '../../../assets/rodape/musica_dot.svg';
import {ReactComponent as Lingua} from '../../../assets/rodape/alura_ligua.svg';
import {ReactComponent as PontoTech} from '../../../assets/rodape/ponto_tech.svg';
import {ReactComponent as Mp3} from '../../../assets/rodape/mp3.svg';
import {ReactComponent as Scuba} from '../../../assets/rodape/scuba.svg';
import {ReactComponent as Layers} from '../../../assets/rodape/layers.svg';
import {ReactComponent as Like} from '../../../assets/rodape/like.svg';
import {ReactComponent as Carreira} from '../../../assets/rodape/carreira.svg';
import {ReactComponent as Jobs} from '../../../assets/rodape/jobs.svg';
import {ReactComponent as GUJ} from '../../../assets/rodape/guj.svg';

export default function Rodape(){
    return (
       <Container>
            <GrupoAlura>Grupo Alura</GrupoAlura>
            <Grupos>
                <Item>
                    <ItemTitulo>EDUCAÇÃO </ItemTitulo>
                    <GrupoOpcao>
                        <Caelum/>
                        <ItemOpcao>Caelum</ItemOpcao>
                    </GrupoOpcao>
                    <GrupoOpcao>
                        <CasaDoCodigo/>
                        <ItemOpcao>Casa do Código</ItemOpcao>
                    </GrupoOpcao>
                </Item>
                <Item>
                    <ItemTitulo>EDUCAÇÃO ONLINE</ItemTitulo>
                    <GrupoOpcao>
                        <Alura/>
                        <ItemOpcao>Alura</ItemOpcao>
                    </GrupoOpcao>
                    <GrupoOpcao>
                        <Empresas/>
                        <ItemOpcao>Alura Para Empresas</ItemOpcao>
                    </GrupoOpcao>
                    <GrupoOpcao>
                        <Latam/>
                        <ItemOpcao>Alura LATAM</ItemOpcao>
                    </GrupoOpcao>
                    <GrupoOpcao>
                        <Start/>
                        <ItemOpcao>Alura Start</ItemOpcao>
                    </GrupoOpcao>
                    <GrupoOpcao>
                        <Music/>
                        <ItemOpcao>MusicDot</ItemOpcao>
                    </GrupoOpcao>
                    <GrupoOpcao>
                        <Lingua/>
                        <ItemOpcao>Alura Língua</ItemOpcao>
                    </GrupoOpcao>
                    <GrupoOpcao>
                        <Mp3/>
                        <ItemOpcao>PM3</ItemOpcao>
                    </GrupoOpcao>
                </Item>
                <Item>
                    <ItemTitulo>COMUNIDADE</ItemTitulo>
                    <GrupoOpcao>
                        <PontoTech/>
                        <ItemOpcao>Hipsters ponto Tech</ItemOpcao>
                    </GrupoOpcao>
                    <GrupoOpcao>
                        <Scuba/>
                        <ItemOpcao>Scuba Dev</ItemOpcao>
                    </GrupoOpcao>
                    <GrupoOpcao>
                        <Layers/>
                        <ItemOpcao>Layers ponto Tech</ItemOpcao>
                    </GrupoOpcao>
                    <GrupoOpcao>
                        <Like/>
                        <ItemOpcao>Like a Boss</ItemOpcao>
                    </GrupoOpcao>
                    <GrupoOpcao>
                        <Carreira/>
                        <ItemOpcao>Carreira sem Fronteira</ItemOpcao>
                    </GrupoOpcao>
                    <GrupoOpcao>
                        <Jobs/>
                        <ItemOpcao>Hipsters ponto Jobs</ItemOpcao>
                    </GrupoOpcao>
                    <GrupoOpcao>
                        <GUJ/>
                        <ItemOpcao>GUJ</ItemOpcao>
                    </GrupoOpcao>
                </Item>
            </Grupos>
       </Container> 
    );
}