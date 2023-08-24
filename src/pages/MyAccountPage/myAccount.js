import React, { useState } from 'react';
import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navBar';
import useRequestData from '../../hooks/useRequestData';
import { ContainerBase, ContainerMobile } from '../../styles/styleGlobal';
import { BASE_URL } from '../../URL/url';
import { ContainerMyAccount } from './style';

export default function MyAccountPage() {

const [ profile ] = useRequestData(`${BASE_URL}/clients/getProfile`, {headers:{ authorization: localStorage.getItem('token')}})
    
const [dataClient] = useRequestData(`${BASE_URL}/accounts/myAccountClient/${profile.id_user}`)

const getCodAccount = dataClient.map((account)=>{ return account.cod_account} )
    
const [payments] = useRequestData(`${BASE_URL}/payments/mypayments/${getCodAccount}`)

const getPayments = payments.map((payment, key)=>{
    return(
        <div key={key}>
            <span>{payment.description_billets}</span>
            <span>R$ {payment.value_billet.toFixed(2)}</span>
        </div>
    )
})

return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerMyAccount>
                <h3>Pagamentos</h3>
                {getPayments}
            </ContainerMyAccount>
            <NavBar/>
        </ContainerMobile>
    </ContainerBase>
 );
}