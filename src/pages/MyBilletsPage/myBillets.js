import React from 'react';
import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navBar';
import { ContainerBase, ContainerMobile } from '../../styles/styleGlobal';
import { ContainerMyBillets } from './style';

export default function MyBilletsPage() {
 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerMyBillets>
                <h2>Meus Boletos</h2>
            </ContainerMyBillets>
            <NavBar/>
        </ContainerMobile>
    </ContainerBase>
 );
}