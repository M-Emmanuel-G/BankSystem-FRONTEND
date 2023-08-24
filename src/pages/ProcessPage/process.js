import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ContainerBase, ContainerMobile } from '../../styles/styleGlobal';
import { ContainerProcess, Loading } from './style';

export default function ProcessPage() {

    const navigate = useNavigate()

    setTimeout(()=>{
        alert('Parabens..sua conta na DevBank foi criada com sucesso...!!!')
        navigate('/login')
    }, 5000)

 return (
    <ContainerBase>
        <ContainerMobile>
            <ContainerProcess>
                <h2>Aguarde...</h2>
                <Loading/>
            </ContainerProcess>
        </ContainerMobile>
    </ContainerBase>
 );
}