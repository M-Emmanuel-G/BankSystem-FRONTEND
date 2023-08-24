import styled from 'styled-components';

export const ContainerSignup = styled.div`
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
            button{
                width: 300px;
                height: 30px;
                margin-top:0.5rem;
                background: #F37415;
                border:1px solid #fff;
                border-radius:10px;
                border:none;
                font-size:1.2rem;
                color: #fff;
            }
            
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