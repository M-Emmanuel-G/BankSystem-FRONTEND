import styled from 'styled-components';

export const ContainerProfile = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
        width: 100%;
        display: flex;
        justify-content: space-between;
        span, label{
            margin:1rem 2rem;
        }
        label{
            font-size: 1.2rem;
            font-weight: bold;
            color: #F37415;
        }
    }
`;