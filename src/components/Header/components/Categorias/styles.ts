import { styled } from "styled-components"

export const Container = styled.nav<{itensVisiveis: boolean}>`
    font-family: 'Poppins', sans-serif;
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-left: 67px;
    padding: 8px;
    label {
        background: ${ props => props.itensVisiveis === true 
            ? 'linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%)' 
            : '#FFFFFF' };
        color: ${props => props.itensVisiveis === true ? '#FFFFFF' : '#000000'};
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        padding: 10px;
    }
    ul {
        position: absolute;
        background: #FFFFFF;  
    }
    li {
        padding: 24px 24px 16px;
        background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-clip: text;
        cursor: pointer;
        &:hover {
            background: linear-gradient(97.54deg, #002F52 35.49%, #326589 165.37%);
            -webkit-text-fill-color: #FFFFFF;
        }
    }
`