import styled from 'styled-components'

export const Container = styled.div`
    height: auto;
    min-height: 300px;
    width: 350px;
    position: absolute;
    right:  0;
    top: 24px;
    padding: 16px;
    text-align: center;
    background: white;
    filter: drop-shadow(0 0 1rem #eee);
    z-index: 2;
    display: ${props => props.isOpen ? 'block' : 'none'};
`
export const CardContainer = styled.section`
    margin: 26px 18px;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 20%;
        margin: 0;
        box-shadow: none;
    }

    a {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    h3 {
        margin: 0 8px;
    }
`