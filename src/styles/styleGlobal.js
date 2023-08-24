import styled, { keyframes } from 'styled-components';

export const ContainerBase = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: grey;
    color:#fff;
`;

export const ContainerMobile = styled.div`
    width: 400px;
    height: 667px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    /* border:2px solid black; */
    border-radius: 10px;
    /* background: linear-gradient(332deg, rgba(0,0,0,1) 76%, rgba(27,240,7,1) 100%); */
    background:#000;
`
export const Circle = styled.div`
    width: 100%;
    height: 100%;
    background: red;
    display: flex;
    position:absolute;
`

export const animLoading = keyframes`
    0%{rotate:0deg}
    100%{rotate:360deg}
`

export const Loading = styled.div`
    width: 30px;
    height: 30px;
    background: none;
    border: 10px solid grey;
    border-top: 10px solid #0dff00;
    border-radius: 50%;
    animation: ${animLoading} .5s linear infinite;
`