import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navBar';
import { ContainerBase, ContainerMobile, Loading } from '../../styles/styleGlobal';
import { ContainerLoading } from './style';

export default function LoadingPage() {
    const navigate = useNavigate()
    const timeout = 3000
    
    setTimeout(() => {
        alert('Operação realizada com sucesso...')
        navigate('/homepage')
    }, timeout);

    return (
        <ContainerBase>
            <ContainerMobile>
                <Header/>
                <ContainerLoading>
                    <Loading/>
                </ContainerLoading>
                <NavBar/>
            </ContainerMobile>
        </ContainerBase>
    );
}