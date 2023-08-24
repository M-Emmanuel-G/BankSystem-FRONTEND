import styled from 'styled-components';

export const ContainerSignup = styled.form`
    width: 100%;
    height: 90%;
    form{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items:center;
        section{
            width: 100%;
            height: 15%;
            display: flex;
            align-items: center;
            flex-direction:column;
            justify-content: center;
            
        }
        input{
            width: 300px;
            height:30px;
            border-radius: 10px;
            outline: 0;
            background: none;
            color:#fff;
            text-align: center;
            font-size: 1rem;
            margin-top:1rem;
            border:none;
        }
    }

    fieldset{
        display: flex;
        align-items: center;
        justify-content: center;
        margin-top:1rem;

        input{
            width: 300px;
            height:30px;
            border-radius: 10px;
            outline: 0;
            background: none;
            color:#fff;
            text-align: center;
            font-size: 1rem;
        }
    }
`;

export const ContainerInputs = styled.div`
    width: 100%;
    height: 75%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    div{
        input{
            width: 250px;
            height:30px;
            border-radius: 10px;
            outline: 0;
            background: #fff;
            color:#000;
            text-align: center;
            font-size: 1rem;
            margin-top:1rem;
            border:none;
        }
    }
`
export const ContainerAction = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    flex-direction: column;
    button{
        width: 250px;
        height: 30px;
        margin-top:1rem;
        background: #F37415;
        border:1px solid #fff;
        border-radius:10px;
        border:none;
        font-size:1.2rem;
        color: #fff;
    }
    
`
export const ContainerError = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
    span{
        color: red;
        font-size:1rem;
        font-weight: 500;
    }
`