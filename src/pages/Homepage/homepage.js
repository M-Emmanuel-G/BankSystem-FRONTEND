import React from 'react';
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

export default function Homepage() {
    const navigate = useNavigate()

    const [ profile ] = useRequestData(`${BASE_URL}/clients/getProfile`, {headers:{ authorization: localStorage.getItem('token')}})
    
    const [ dataClient, isLoading ] = useRequestData(`${BASE_URL}/accounts/myAccountClient/${profile.id_user}`)

    const getClient = dataClient.map((client, key)=>{
        return(
            <div key={key}>
                <span>Bem vindo, {client.name_client},</span>
                <span>Conta: {client.cod_account} / {client.type_account} </span>
            </div>
        )
    })

    const getBalance = dataClient.map((client)=>{
        return client.balance
    })
    
return (
    <ContainerBase>
        <ContainerMobile>
            <ContainerHomepage>
                <CardContainer>
                    {isLoading && 'Carregando...'}
                    {!isLoading && getClient }
                </CardContainer>
                <ContainerBalance>
                    <div>
                        <label>Saldo:</label>
                        <span>R$ {Number(getBalance).toFixed(2)}</span>
                    </div>
                </ContainerBalance>
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