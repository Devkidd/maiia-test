import styled from 'styled-components'

export const CardTitle = styled.h3`
    color: #333;
    font-size: 16px;
    width: 60%;
    margin: auto;
`

export const CardImage = styled.img`
    box-shadow: -1px 2px 10px 6px #3737372b;
    margin-bottom: 16px;
`

export const CardButton = styled.button`
    font-size: 15px;
    background: white;
    color: #333;
    padding: 14px;
    border: solid 1px #333;
    border-radius: 3px;
    font-weight: bold;
    margin-top: 16px;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
        background: #333;
        color: white;
    }
`