import { styled } from "styled-components"

export const Container = styled.nav`
    background: #FFFFFF;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 18px 80px;
    align-items: center;
`

export const HeaderContainer = styled.nav`
    display: flex;
    flex-direction: row;
    align-items: center;
`

export const HeaderLogo = styled.div`
    display: flex;
    flex-direction: row;
    h1 {
        font-size: 30px;
        line-height: 30px;
        color: #000000;
        font-family: 'Josefin Sans', sans-serif;
        font-weight: 700;
        display: flex;
        align-items: center;
        margin-top: 10px;
        margin-left: 11px;
    }
`

export const LoginCadastro = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
`

export const Login = styled.div`
    display: flex;
    flex-direction: row;
    p {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
        font-size: 20px;
        line-height: 30px;
        color: #000000;
        margin-left: 8px;
    }
`