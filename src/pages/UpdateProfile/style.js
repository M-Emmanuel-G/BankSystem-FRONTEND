import styled from 'styled-components';

export const ContainerUpdate = styled.main`
    width: 100%;
    height: 70%;
    background: red;
    display: flex;
    flex-direction: column;
    align-items:center;
    input{
        width: 200px;
        margin:0 1rem;
    }
`;

export const ContainerAction = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    button{
        width: 300px;
        height: 30px;
        border-radius: 12px;
    }
` 