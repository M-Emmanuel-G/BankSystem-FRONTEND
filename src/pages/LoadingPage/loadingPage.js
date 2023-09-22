import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navBar';
import { ContainerBase, ContainerMobile, Loading } from '../../styles/styleGlobal';
import { ContainerLoading } from './style';

export default function LoadingPage(props) {
    const navigate = useNavigate()
    const timeout = 3000
    
    setTimeout(() => {
        const text = document.getElementById('text')
        const loading = document.getElementById('loading')
        
        loading.style.visibility = 'hidden'
        text.style.visibility = 'visible'
    }, timeout);

    setTimeout(()=>{
        navigate('/homepage')
    }, 6000)

    return (
        <ContainerBase>
            <ContainerMobile>
                <Header/>
                <ContainerLoading>
                    <h3 id='text'>Operação realizada com sucesso!</h3>
                    < Loading id='loading'/>
                </ContainerLoading>
                <NavBar/>
            </ContainerMobile>
        </ContainerBase>
    );
}