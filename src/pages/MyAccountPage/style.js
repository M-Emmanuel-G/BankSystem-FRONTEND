import styled from 'styled-components';

export const ContainerMyAccount = styled.div`
    width:100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div{
        width: 100%;
        display: flex;
        justify-content:space-between;

        span{
            margin:0.3rem 1rem;
            color: #fff;
        }
    }
`;

export const EachServices = styled.div`
    width: 300px;
    height: 100px;
    background:#00E782;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin:0.3rem 0.3rem;
    color:#111;
    border-radius:10px;
    span{
        margin-top: 0.5rem;
    }
    img{
        width: 50%;
        height: 50%;
    }
`