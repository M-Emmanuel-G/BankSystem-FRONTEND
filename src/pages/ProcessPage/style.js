import styled, { keyframes } from 'styled-components';

export const animLoading = keyframes`
    0%{rotate:0deg}
    100%{rotate:360deg}
` 

export const ContainerProcess = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const Loading = styled.div`
    width:60px;
    height: 60px;
    background: none;
    border: 10px solid transparent;
    border-top: 10px solid #0dff00;
    border-radius: 50%;
    animation: ${animLoading} .5s linear infinite;
`