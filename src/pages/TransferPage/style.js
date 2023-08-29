import styled from 'styled-components';

export const ContainerTransfer = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    form{
        display: flex;
        flex-direction: column;
        div{
            width: 100%;
            height: 50px;
            display: flex;
            justify-content: space-evenly;
            align-items: center;
            margin-top:1rem;
            input{
                width: 100px;
                height: 20px;
                text-align: center;
                background: none;
                color:#fff;
                border:none;
                outline: none;
            }
        }
        button{
            width: 300px;
            height: 30px;
            margin-top:0.5rem;
            background: #F37415;
            border:1px solid #fff;
            border-radius:10px;
            border:none;
            font-size:1.2rem;
            margin-top:7rem;
            color: #fff;;
        }
    }
`;

export const ContainerError = styled.div`
    width: 100%;
    height: 5%;
    display: flex;
    justify-content:center;
    align-items:center;
    span{
        color: red;
        font-size: 12px;
    }
`