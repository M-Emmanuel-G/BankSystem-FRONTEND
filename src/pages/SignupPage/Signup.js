import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/header';
import { ContainerBase, ContainerMobile } from '../../styles/styleGlobal';
import { BASE_URL } from '../../URL/url';
import { ContainerAction, ContainerError, ContainerInputs, ContainerSignup } from './style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function SignupPage() {
 
    const navigate = useNavigate()

    const [error, setError] = useState('')
    const [nameClient, setNameClient] = useState("")
    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const registerClient = (ev)=>{
        ev.preventDefault()

        const body = {
            nameClient,
            cpf,
            password,
            email,
            phone
        }

        axios
            .post(`${BASE_URL}/clients/signup`, body)
            .then((res)=>{
                localStorage.setItem('idClient', res.data.result.idClient)
                toast.success(res.data.message)
                navigate('/Conta')
            })
            .catch((err)=>{setError(err.response.data);})
    }

 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerSignup onSubmit={registerClient}>
                <ContainerInputs>
                    <div>
                        <h3>Informe seus dados</h3>
                    </div>
                    <div>
                        <input
                            placeholder='Nome Completo'
                            value={nameClient}
                            onChange={(ev)=>{setNameClient(ev.target.value)}}
                        />  
                    </div>
                    <div>
                        <input
                            maxLength={11}
                            placeholder='CPF'
                            value={cpf}
                            onChange={(ev)=>{setCpf(ev.target.value)}}
                        />
                    </div>
                    <div>
                        <input
                            maxLength={6}
                            placeholder='Senha'
                            value={password}
                            onChange={(ev)=>{setPassword(ev.target.value)}}
                        />
                    </div>
                    <div>
                        <input
                            placeholder='Telefone'
                            value={phone}
                            onChange={(ev)=>{setPhone(ev.target.value)}}
                            type='tel'
                        />
                    </div>
                    <div>
                        <input
                            placeholder='Email'
                            value={email}
                            onChange={(ev)=>{setEmail(ev.target.value)}}
                            type='email'
                        />
                    </div>
                </ContainerInputs>
                <ContainerError>
                    <span>{error}</span>
                </ContainerError>
                <ContainerAction>
                    <button>Criar conta</button> 
                    <button onClick={()=>{navigate('/login')}}>Voltar</button> 
                </ContainerAction>
            </ContainerSignup>
        </ContainerMobile>
        <ToastContainer />
    </ContainerBase>
 );
}