import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 48px 0px;
    gap: 35px;
    background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
`

export const Textos = styled.div`
    width: 305px;
    p:nth-child(1) {
        font-family: 'Poppins', sans-serif;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        color: #FFFFFF;
        font-style: normal;
        padding-bottom: 8px;
    }
    p:nth-child(2){
        font-family: 'Poppins', sans-serif;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
        font-style: normal;
    }
`

export const Botoes = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
`