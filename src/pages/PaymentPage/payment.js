import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navBar';
import useRequestData from '../../hooks/useRequestData';
import { ContainerBase, ContainerMobile } from '../../styles/styleGlobal';
import { BASE_URL } from '../../URL/url';
import { ContainerInfoBillet, ContainerPayment } from './style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function PaymentPage() {

    const navigate = useNavigate()

    const [ profile ] = useRequestData(`${BASE_URL}/clients/getProfile`, {headers:{ authorization: localStorage.getItem('token')}})
    
    const [dataClient] = useRequestData(`${BASE_URL}/accounts/myAccountClient/${profile.id_user}`)

    const getCodAccount = dataClient.map((account)=>{ return account.cod_account} )
    
    const [payments] = useRequestData(`${BASE_URL}/payments/mypayments/${getCodAccount}`)

    const [codBars, setCodBars] = useState('')
    const [renderBillet, setRenderBillet] = useState([])

    const getBillet = (ev)=>{
        ev.preventDefault();

        const body = {
            codBars
        }

        axios
            .post(`${BASE_URL}/billets/getBillet`, body)
            .then((res)=>{setRenderBillet(res.data)})
            .catch((err)=>{toast.info(err.response.data)})
    }

    const makePayment = (codBars)=>{
        const body = {
            codBars
        }

        axios
            .post(`${BASE_URL}/payments/makePayment/${getCodAccount}`, body)
            .then((res)=>{
                toast.info(res.data.message)
            })
            .catch((err)=>{
                toast.error(err.response.data)
            })
    }

    const billet = renderBillet.map((billet,key)=>{
        return(
            <section key={key}>
                <div>
                    <label>Codigo de barras:</label>
                    <span>{billet.cod_bars_billet}</span>
                </div>
                <div>
                    <label>Valor Boleto:</label>
                    <span> R$ {Number(billet.value_billet).toFixed(2)}</span>
                </div>
                <div>
                    <label>descrição do boleto:</label>
                    <span>{billet.description_billets}</span>
                </div>
                <div>
                    <button onClick={()=>{makePayment(billet.cod_bars_billet)}}>Pagar conta</button>
                </div>
            </section>
        )
    })
 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerPayment>
                <form onSubmit={getBillet}>
                <h2>Realizar pagamentos</h2>
                
                    <div>
                        <label>Digite o código de barras: </label>
                        <input
                            type='text'
                            value={codBars}
                            onChange={(ev)=>{setCodBars(ev.target.value)}}
                            placeholder='Codigo de barras'
                        />
                    </div>
                    <button>Consultar</button>
                </form>
                <ContainerInfoBillet>
                    {billet}
                </ContainerInfoBillet>
            </ContainerPayment>
            <NavBar/>
        </ContainerMobile>
        <ToastContainer/>
    </ContainerBase>
 );
}