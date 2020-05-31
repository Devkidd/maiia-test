import styled from 'styled-components'

export const NavContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 50px;
    margin-bottom: 80px;
    color: #333;
    margin-top: 32px;

    @media screen and (max-width: 850px) {
        justify-content: space-around;
    }
`
export const BasketIcon = styled.span`
    cursor: pointer;
    color: #333;
    position: relative;
`

export const Logo = styled.h2`
    font-size: 24px;
    font-weight: 900;
    color: #673AB7;
`

export const Badge = styled.span`
    position: absolute;
    top: -11px;
    right: -14px;
    background: #673AB7;
    color: white;
    height: 20px;
    width: 20px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 10px;
    font-weight: bold;
`