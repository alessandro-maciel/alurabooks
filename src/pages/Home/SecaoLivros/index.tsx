import { useState } from 'react';
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
import { LivroType } from '../../../types/LivroType';
import { AbBotao, AbCard } from 'alurabooks-ds-alessandro-maciel';
import {ReactComponent as SacolaIcon} from '../../../assets/icons/sacola_icon.svg';
import {ReactComponent as FavoritoIcon} from '../../../assets/icons/favorito_icon.svg';

interface Props {
    titulo:string, 
    livros: LivroType[],
}

export default function SecaoLivros({ titulo, livros }: Props){
    const [livroSelecionado, setLivroSelecionado] = useState(livros[1]);

    const selecionarLivro = (livro: LivroType) => {
        setLivroSelecionado(livro);
    }

    const renderLivro = (livro: LivroType, emDestaque: boolean) => {
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
            <Titulo>{titulo}</Titulo>
            <Container>
                <Livros>
                    {livros.map(livro => renderLivro(livro, livro.id === livroSelecionado?.id))}
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