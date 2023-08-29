import React, { useState } from 'react';
import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navBar';
import useRequestData from '../../hooks/useRequestData';
import { ContainerBase, ContainerMobile, Loading } from '../../styles/styleGlobal';
import { BASE_URL } from '../../URL/url';
import { Card, CardContainer, ContainerBalance, ContainerHomepage, ContainerInfo, ContainerLoan, ContainerServices, Mycard, MyCardImg, MyCardInfo, MyCardNumber } from './style';
import ImgPix from '../../images/pix.png'
import ImgTransfer from '../../images/transfer.png'
import ImgDeposit from '../../images/deposit.png'
import ImgPayment from '../../images/payment.png'
import ImgMyPayment from '../../images/myPayments.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
// import getProfile from '../../hooks/getProfile';

export default function Homepage() {
    const navigate = useNavigate()

    const [ profile ] = useRequestData(`${BASE_URL}/clients/getProfile`, {headers:{ authorization: localStorage.getItem('token')}})
    const [ dataClient, isLoading ] = useRequestData(`${BASE_URL}/accounts/myAccountClient/${profile.id_user}`)

    const getBalance = dataClient && dataClient.map((client)=>{
        return(
            <span id='Balance'>R$ {Number(client.balance).toFixed(2)}</span>
        )
    })

    const showBalance = ()=>{
        const balance = document.getElementById('Balance')
        const showEye = document.getElementById('showBalance')
        const unshowEye = document.getElementById('unshowBalance')

        if(balance.style.display === 'flex') {
            balance.style.display = 'none'
            showEye.style.display = 'none'
            unshowEye.style.display = 'flex'
        }else{
            balance.style.display = 'flex'
            showEye.style.display = 'flex'
            unshowEye.style.display = 'none'
        }
    }
    
return (
    <ContainerBase>
        <ContainerMobile>
            <ContainerHomepage>
                <Header/>
                <CardContainer>
                    <label>Saldo:</label>
                    {isLoading && 'Carregando'}
                    {!isLoading && getBalance}
                    <img onClick={showBalance} id='showBalance' src='https://cdn-icons-png.flaticon.com/128/2767/2767194.png'/>
                    <img onClick={showBalance} id='unshowBalance' src='https://cdn-icons-png.flaticon.com/128/2767/2767146.png'/>
                </CardContainer>
                <ContainerServices>
                    {/* <Card>
                        <img src={ImgPix}/>
                        <span>Pix</span>
                    </Card> */}
                    <Card onClick={()=>{navigate('/Transfer')}} >
                        <img src={ImgTransfer}/>
                        <span>Transferências</span>
                    </Card>
                    <Card onClick={()=>{navigate('/Deposito')}}>
                        <img src={ImgDeposit}/>
                        <span>Depositos</span>
                    </Card>
                    <Card onClick={()=>{navigate('/MinhaConta')}}>
                        <img src={ImgMyPayment}/>
                        <span>Pagamentos</span>
                    </Card>
                    <Card onClick={()=>{navigate('/Pagamentos')}}>
                        <img src={ImgPayment}/>
                        <span>Pagar</span>
                    </Card>
                </ContainerServices>
                <ContainerLoan>
                    <span>Voce tem R$ 10.000 disponiveis para emprestimo.</span>
                </ContainerLoan>
            </ContainerHomepage>
            <NavBar/>
        </ContainerMobile>
        <ToastContainer/>
    </ContainerBase>
 );
}