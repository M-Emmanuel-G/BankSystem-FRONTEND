import axios from 'axios';
import React, { useState } from 'react';
import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navBar';
import useRequestData from '../../hooks/useRequestData';
import { ContainerBase, ContainerMobile } from '../../styles/styleGlobal';
import { BASE_URL } from '../../URL/url';
import { ContainerDeposit } from './style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function DepositPage() {

    const navigate = useNavigate()

    const [value, setValue] = useState(0)

    const [ profile ] = useRequestData(`${BASE_URL}/clients/getProfile`, {headers:{ authorization: localStorage.getItem('token')}})
    const [dataClient] = useRequestData(`${BASE_URL}/accounts/myAccountClient/${profile.id_user}`)
    const getCodAccount = dataClient.map((client)=>{ return client.cod_account})
    
    const sendDeposit = (ev)=>{
        ev.preventDefault()

        const body = {
            deposit: value
        }
        axios
            .post(`${BASE_URL}/accounts/deposit/${getCodAccount}`, body)
            .then((res=>{
                navigate('/loading')
            }))
            .catch((err)=>{toast.info(err.response.data);})
        }

 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerDeposit>
                <h2>Depositar</h2>
                <form onSubmit={sendDeposit}>
                    <div>
                        <span>Valor para depositar: </span>
                        <input
                            value={value}
                            onChange={(ev)=>{setValue(ev.target.value)}}
                        />
                    </div>
                    <button>Depositar</button>
                </form>
            </ContainerDeposit>
            <NavBar/>
        </ContainerMobile>
        <ToastContainer/>
    </ContainerBase>
 );
}