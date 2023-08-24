import styled from 'styled-components';

export const ContainerPayment = styled.main`
    width: 100%;
    height: 80%;
    display:flex;
    justify-content: center;
    flex-direction:column ;
    form{
        width: 100%;
        height: 30%;
        display: flex;
        flex-direction: column;
        align-items:center;
        div{
            margin:1rem 0;
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
                margin-top:1rem;
                color:#fff;
            }
    }
`;

export const ContainerInfoBillet = styled.div`
    width: 100%;
    height: 70%;
    display: flex;
    align-items: center;
    justify-content: center;
    section{
        width: 100%;
        height: 100%;
        div{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items:center;
            label{
                font-weight:bold;
            }
            label, span{
                margin-top:1.5rem;
            }
            button{
                width: 300px;
                height: 30px;
                margin-top:0.5rem;
                background: #0dff00;
                border:1px solid #fff;
                border-radius:10px;
                border:none;
                font-size:1.2rem;
                margin-top:1.5rem;
            }
        }
    }
`