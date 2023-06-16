import { styled } from "styled-components";

export const Titulo = styled.h1`
    color: var(--cor-laranja);
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 48px;
    text-align: center;
    padding: 16px;
    background: #FFFFFF;
`

export const CardTitulo = styled(Titulo)`
    padding: 0px;
`

export const Container = styled.div`
    padding: 48px;
    display: flex;
    justify-content: center;
    gap: 46px;
    height: 370px;
`

export const Livros = styled.div`
    display: flex;
    align-items: center;
`

export const Livro = styled.img<{emDestaque: boolean}>`
    height: ${props => props.emDestaque ? '370px' : '252.44px'};
    cursor: pointer;
    transition: 0.5s;
`

export const CardHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const CardIcons = styled.div`
    margin-left: 184px;
    display: flex;
    flex-direction: row;
    gap: 24px;
    align-items: center;
`

export const SobreLivro = styled.div`
    h3 {
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
        font-size: 18px;
        line-height: 27px;
        background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        margin-top: 16px;
        margin-bottom: 24px;
    }
    p {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: rgba(0, 0, 0, 0.85);
        max-width: 460px;
    }
    p:nth-child(2) {
        height: 42px;
    }
`

export const PrecoLivro = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: end;
`

export const Preco = styled.div`
    p:nth-child(1) {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 21px;
        color: rgba(0, 0, 0, 0.54);
        margin-top: 40px;
    }
    p:nth-child(2) {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 700;
        font-size: 36px;
        line-height: 54px;
        background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
`

export const BotaoComprar = styled.div`
    height: 62px;
`