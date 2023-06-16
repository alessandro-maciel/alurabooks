import { useEffect, useState } from 'react';
import useUltimosLancamentos from '../../../../hooks/useUltimosLancamentos';
import { UltimosLancamento } from '../../../../types/UltimosLancamento';
import { 
    Titulo, 
    Livros, 
    Livro, 
    CardHeader,
    CardIcons,
    CardTitulo,
    SobreLivro,
    PrecoLivro,
    Preco,
    BotaoComprar,
    Container
} from'./styles';
import { AbBotao, AbCard } from 'alurabooks-ds-alessandro-maciel';
import {ReactComponent as SacolaIcon} from '../../../../assets/sacola_icon.svg';
import {ReactComponent as FavoritoIcon} from '../../../../assets/favorito_icon.svg';

export default function Lancamentos(){
    const [livroSelecionado, setLivroSelecionado] = useState<UltimosLancamento | null>(null);
    const { lancamentos } = useUltimosLancamentos();

    useEffect(() => {
        if (!livroSelecionado) {
            setLivroSelecionado(lancamentos[1]);
        }
    },[]);

    const selecionarLivro = (livro: UltimosLancamento) => {
        setLivroSelecionado(livro);
    }

    const renderLivro = (livro: UltimosLancamento, emDestaque: boolean) => {
        return (
            <Livro 
                key={livro.id} 
                src={livro.link_da_imagem} 
                emDestaque={emDestaque} 
                onClick={() => selecionarLivro(livro)}
            />
        );
    }

    return (
        <>
            <Titulo>ÚLTIMOS LANÇAMENTOS</Titulo>
            <Container>
                <Livros>
                    {lancamentos.map(livro => renderLivro(livro, livro.id === livroSelecionado?.id))}
                </Livros>
                <AbCard>
                    <CardHeader>
                        <CardTitulo>Sobre o livro:</CardTitulo>
                        <CardIcons>
                            <SacolaIcon />
                            <FavoritoIcon />
                        </CardIcons>
                    </CardHeader>
                    <SobreLivro>
                        <h3>{livroSelecionado?.titulo}</h3>
                        <p>{livroSelecionado?.descricao}</p>
                        <p>Por: {livroSelecionado?.autor}</p>
                    </SobreLivro>
                    <PrecoLivro>
                        <Preco>
                            <p>A partir de:</p>
                            <p>{livroSelecionado?.preco}</p>
                        </Preco>
                        <BotaoComprar>
                            <AbBotao 
                                texto='Comprar'
                                onPress={() => {}}
                                tipo='primario'
                            />
                        </BotaoComprar>
                    </PrecoLivro>
                </AbCard>
            </Container>
        </> 
    );
}