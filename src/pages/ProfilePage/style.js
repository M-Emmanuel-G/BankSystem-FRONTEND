import styled from 'styled-components';

export const ContainerProfile = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
`;

export const ContainerAction = styled.section`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    
    h2, img{
        margin: 0 1rem;
    }

    img{
        height: 40px;
        width: 40px;
    }
`

export const ContainerInfo = styled.section`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    img{
        width: 200px;
        height: 200px;
        background: #fff;
        border-radius: 15px;
    }
    section{
        div{
            margin: 0.7rem 0rem;
            label, span{
                margin: 0rem 1rem;
            }
        }
    }
`