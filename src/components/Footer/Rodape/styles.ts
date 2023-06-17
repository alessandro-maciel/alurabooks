import { styled } from "styled-components";

export const Container = styled.div`
    background: #F9F9F9;
    padding: 56px;
    display: flex;
    gap: 121px;
    justify-content: center;
    border-top: 1px solid #858585;
`

export const GrupoAlura = styled.div`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 36px;
    color: #000000;
    margin-left: 106px;
    white-space: nowrap;
`

export const Grupos = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
`

export const Item = styled.div`
    border-left: 1px solid #858585;
    padding-left: 20px;
    width: 397px;
`

export const ItemTitulo = styled.p`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #858585;
    padding-bottom: 25px;
`

export const GrupoOpcao = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    padding-bottom: 16px;
`

export const ItemOpcao = styled.p`
    font-family: 'Poppins', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #474646;
`
