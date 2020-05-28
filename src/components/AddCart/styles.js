import styled from 'styled-components'

export const Button = styled.button`
    position: absolute;
    right: 55px;
    bottom: 80px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: white;
    filter: drop-shadow(4px 3px 5px #ccc);
    transition: all 0.1s ease-in;

    &:hover {
        transform: scale(1.2)
    }
`