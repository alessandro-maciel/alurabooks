import { styled } from "styled-components";

export const Container = styled.section`
    position: relative;
    height: 375px;
`

export const OndeComecar = styled.section`
    background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
    opacity: 0.75;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    color: #FFFFFF;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    h1 {
        font-weight: 700;
        font-size: 36px;
        line-height: 54px;
        margin-top: 2px;
    }
    h3 {
        font-weight: 500;
        font-size: 16px;
        line-height: 24px;
    }
`

export const Ilustracoes = styled.div`
    display: flex;
    justify-content: space-between;
    position: absolute;
    overflow: hidden;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    background: #FFFFFF;
`

export const Input = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 24px;
    gap: 10px;
    width: 586px;
    border: 1px solid #FFFFFF;
    border-radius: 24px;
    Padding: 10px 24px;
    margin-top: 26px;
    input {
        background: transparent;
        width: 245px;
        height: 24px;
        border: none;
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        color: #FFFFFF;
        &:focus {
            color: #FFFFFF;
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