import styled from 'styled-components'

export const CardContainer = styled.main`
    display: grid;
    grid-template-columns: repeat(3,minmax(300px, 1fr));
    grid-gap: 24px;

    @media screen and (max-width: 850px) {
        grid-template-columns: repeat(2,minmax(300px, 1fr));
    }

    @media screen and (max-width: 450px) {
        grid-template-columns: minmax(300px,1fr);
    }

    
`

export const Title = styled.h2`
    margin: 32px 0;
    font-size: 12px;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 600;

    @media screen and (max-width: 500px) {
        text-align: center;
    }
`

export const SubTitle = styled.h3`
    text-align: center;
    font-size: 24px;
    color: #333;
    text-transform: uppercase;
    font-weight: 900;
`

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    position: relative;
    min-height: 250px;
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
export const HeaderFeed = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`