import styled from 'styled-components'

export const CardContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 24px;
`

export const Title = styled.h2`
    margin: 32px 0;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
`