import styled from 'styled-components';

export const ContainerHeader = styled.header`
    width: 100%;
    height: 10%;
    display: flex;
    background: linear-gradient(31deg, rgba(255,203,55,1) 25%, rgba(243,116,21,1) 69%);
    justify-content:center;
    align-items: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    color:#fff;
    img{
        width: 50px;
        height: 50px;
        margin: 0 1rem;;
    }
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        margin: 0 1rem;
    }
`;