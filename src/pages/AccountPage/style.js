import styled from 'styled-components';

export const ContainerAccount = styled.div`
    width: 100%;
    height: 90%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    section{
        div{
            label{
                font-weight:bold;
                margin-right:2rem;
                margin-left:1rem;
                color:#F37415;
            }
            margin:1rem 0
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
    }
`;