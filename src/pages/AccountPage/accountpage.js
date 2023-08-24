import axios from 'axios';
import React from 'react';
import Header from '../../components/Header/header';
import useRequestData from '../../hooks/useRequestData';
import { ContainerBase, ContainerMobile } from '../../styles/styleGlobal';
import { BASE_URL } from '../../URL/url';
import { ContainerAccount } from './style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function AccountPage() {

    const navigate = useNavigate()

    const [client] = useRequestData(`${BASE_URL}/clients/getUser/${localStorage.getItem('idClient')}`);

    const createAccount = ()=>{
        axios
            .post(`${BASE_URL}/accounts/create/${localStorage.getItem('idClient')}`)
                .then((res)=>{
                    toast.success(res.data.message)
                    navigate('/processando')

                })
                .catch((err)=>{console.log(err.response.data)})
    }

    const renderClient = client.map((client, key)=>{
        return(
            <section key={key}>
                <div>
                    <label>Nome Completo:</label>
                    <span>{client.name_client}</span>
                </div>
                <div>
                    <label>CPF:</label>
                    <span>{client.cpf}</span>
                </div>
                <div>
                    <label>Telefone</label>
                    <span>{client.phone}</span>
                </div>
                <div>
                    <label>Email:</label>
                    <span>{client.email}</span>
                </div>
            </section>
        )
    })

 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerAccount>
                <h3>Confira seus dados antes de proseguir!</h3>
                {renderClient}
                <button onClick={createAccount}>Confirmar</button>
            </ContainerAccount>
        </ContainerMobile>
        <ToastContainer/>
    </ContainerBase>
 );
}