import React from 'react';
import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navBar';
import useRequestData from '../../hooks/useRequestData';
import { ContainerBase, ContainerMobile, Loading } from '../../styles/styleGlobal';
import { BASE_URL } from '../../URL/url';
import { Card, CardContainer, ContainerBalance, ContainerHomepage, ContainerServices, Mycard, MyCardImg, MyCardInfo, MyCardNumber } from './style';
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
                    <Mycard>
                        <MyCardImg>
                        <img src='https://play-lh.googleusercontent.com/lveOdB-DgeKN3SHHGJx0OxSPBvhLgUOeRW18rW96wTXHPEPGKgLLB4TnwDIZ2m5F1_E' alt="Logo do cartão"/>
                        </MyCardImg>
                        <MyCardNumber>
                            <span>7643-4703-3866-1235</span>
                        </MyCardNumber>
                        <MyCardInfo>
                            <span>Validade: 11/2025</span>
                            <span>Cod. segurança: 728</span>
                        </MyCardInfo>
                    </Mycard>
                    <Card>
                        <img src={ImgPix}/>
                        <span>Pix</span>
                    </Card>
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
                        <span>Meus Pagamentos</span>
                    </Card>
                    <Card onClick={()=>{navigate('/Pagamentos')}}>
                        <img src={ImgPayment}/>
                        <span>Realizar Pagamento</span>
                    </Card>
                    <Card>

                    </Card>
                </ContainerServices>
            </ContainerHomepage>
            <NavBar/>
        </ContainerMobile>
        <ToastContainer/>
    </ContainerBase>
 );
}