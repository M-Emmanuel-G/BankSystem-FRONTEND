import styled from 'styled-components';

export const ContainerLogin = styled.div`
    width: 100%;
    height: 90%;
    form{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
`
export const ContainerError = styled.div`
    width: 100%;
    height: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        font-size: 1rem;
        color: red;
    }
`
export const ContainerLogo = styled.div`
    width: 100%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    img{
        width:150px;
        height: 150px;
    }
`
export const ContainerInputs = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    input{
            width: 250px;
            height:30px;
            outline: 0;
            background: #fff;
            color:#000;
            text-align: center;
            font-size: 1rem;
            margin-top:1rem;
            border: 0;
            border-radius: 20px;
        }
`
export const ContainerAction = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    button{
        width: 250px;
        height: 30px;
        margin-top:0.5rem;
        background: #F37415;
        border:1px solid #fff;
        border-radius:10px;
        font-size:1.2rem;
        border:none;
        color:#fff;
    }    
`