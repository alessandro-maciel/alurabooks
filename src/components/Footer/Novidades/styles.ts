import { styled } from "styled-components";

export const Container = styled.div`
    padding-top: 64px;
    padding-bottom: 64px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background: #FFFFFF;
    gap: 24px;
`

export const Textos = styled.div`
    width: 401px;
    p:nth-child(1) {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 36px;
        background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
    }
    p:nth-child(2) {
        font-family: 'Poppins';
        font-style: normal;
        font-weight: 300;
        font-size: 16px;
        line-height: 24px;
        background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        width: 377px;
    }
`

export const Input = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 24px;
    gap: 12px;
    border-radius: 24px;
    border: 1px solid #002F52;
    height: max-content;
    width: 349px;
    input {
        font-family: 'Poppins', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        text-fill-color: transparent;
        border: none;
        &:focus {
            outline: none;
        }
    }
    ::placeholder {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
    }
`



