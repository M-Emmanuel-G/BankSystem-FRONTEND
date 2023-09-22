import React, { useState } from 'react';
import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navBar';
import { ContainerBase, ContainerMobile } from '../../styles/styleGlobal';
import { ContainerError, ContainerInfoClient, ContainerTransfer} from './style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { BASE_URL } from '../../URL/url';
import { useNavigate } from 'react-router-dom';
import useRequestData from '../../hooks/useRequestData';
import { useEffect } from 'react';

export default function TransferPage() {
    const navigate = useNavigate()

    const [ value, setValue ] = useState(0)
    const [ account, setAccount ] = useState('')
    const [ error, setError ] = useState('')
    const [ destinyAccount, setDestinyAccount] = useState([])

    const [ profile ] = useRequestData(`${BASE_URL}/clients/getProfile`, {headers:{ authorization: localStorage.getItem('token')}})
    const [dataClient] = useRequestData(`${BASE_URL}/accounts/myAccountClient/${profile.id_user}`)
    const [dataClientTransfer, isLoading] = useRequestData(`${BASE_URL}/accounts/accountClient/${account}`)

    const getBalance = dataClient.map((client)=>{ return client.balance})
 
    const transfer = (ev)=>{
        ev.preventDefault()

        const body = {
            newBalance: Number(value),
            codTransfer: account
        }
        
        axios
            .post(`${BASE_URL}/accounts/transfer/${dataClient[0].cod_account}`, body)
            .then((res)=>{
                toast.success(res.data.message)
                navigate('/homepage')
            })
            .catch((err)=>{setError(err.response.data)})
        
    }

    const renderClientTransfer = dataClientTransfer.map((client)=>{
       return(
        <>
            <div>
                <strong>Cliente:</strong>
                <span>{client.name_client}</span>
            </div>
            <div>
                <strong>CPF:</strong>
                <span>{client.cpf}</span>
            </div>
        </>
       )
    })

    const clientExist = ()=>{
        if(renderClientTransfer.length === 0){
            return 'Conta não localizada.'
        } else {
            return renderClientTransfer
        }
    }

    return (
        <ContainerBase>
            <ContainerMobile>
                <Header/>
                <ContainerTransfer>
                    <h3>Realizar Transferencia</h3>
                    <ContainerInfoClient>
                            {isLoading && "Carregando"}
                            {!isLoading && clientExist()}
                    </ContainerInfoClient>
                    <form onSubmit={transfer}>
                        <div>
                            <span>Saldo da conta: </span>
                            <span>R$ {Number(getBalance).toFixed(2)}</span>
                        </div>
                        <div>
                            <span>Numero da conta</span>
                                <input
                                    maxLength={9}
                                    placeholder='EX: 00000-000'
                                    value={account}
                                    onChange={(ev)=>{setAccount(ev.target.value)}}
                                />
                        </div>
                        <div>
                            <span>Valor para depositar</span>
                            <input
                                value={value}
                                onChange={(ev)=>{setValue(ev.target.value)}}
                            />
                        </div>
                        <ContainerError>
                            <span>{error}</span>
                        </ContainerError>
                        <button>Tranferir</button>
                    </form>
                </ContainerTransfer>
                <NavBar/>
            </ContainerMobile>
            <ToastContainer/>
        </ContainerBase>
 );
}