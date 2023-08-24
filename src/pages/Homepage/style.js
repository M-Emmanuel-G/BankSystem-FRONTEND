import styled from 'styled-components';

export const ContainerHomepage = styled.div`
    width: 100%;
    height: 90%;
`;

export const CardContainer = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #F37415;
    color: #fff;
    div{
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
    }
`

export const ContainerServices = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
`

export const Card = styled.div`
    width: 180px;
    height: 70px;
    background: #F37415;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    margin:0.3rem 0.3rem;
    flex-direction:column;
    color:#fff;
    border-radius:10px;
    span{
        margin-top: 0.5rem;
    }
    img{
        width: 50px;
        height: 30px;
    }

    span, img{
        margin: 0 1rem;
    }
`

export const Mycard = styled.main`
    width: 90%;
    height: 150px;
    background: #f5f5f5;
    background: #000;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    color:#fff;
    border:1px solid #fff;
`

export const MyCardImg = styled.div`
    width: 100%;
    height: 40%;
    img{
        width: 70px;
        height: 70px;
        margin: 0.5rem 1rem;
    }
`

export const MyCardNumber = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const MyCardInfo = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const ContainerBalance = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: #F37415;
    border-bottom-left-radius: 100%;
    border-bottom-right-radius: 100%;
    color: #fff;
    div{
        width: 70%;
        height: 70%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius:20px;
    }
`