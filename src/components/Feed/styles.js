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

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    position: relative;
`

export const PaginationContainer = styled.section`
    margin: 32px 0;
    ul {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    li {
        padding: 8px;
        margin: 0 16px; 
    }
    
`