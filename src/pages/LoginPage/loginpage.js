import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/Header/header';
import { Circle, ContainerBase, ContainerMobile } from '../../styles/styleGlobal';
import { BASE_URL } from '../../URL/url';
import { ContainerAction, ContainerError, ContainerInputs, ContainerLogin, ContainerLogo } from './style';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function LoginPage() {

    const navigate = useNavigate()

    const [error, setError] = useState("")
    const [cpf, setCpf] = useState("")
    const [password, setPassword] = useState("")

    const login = (ev)=>{
        ev.preventDefault()

        const body = {
            cpf,
            password
        }

        axios
            .post(`${BASE_URL}/clients/login`, body )
            .then((res)=>{
                localStorage.setItem('token', res.data.token)
                navigate('/HomePage')
            })
            .catch((err)=>{
                setError(err.response.data)
            })
    }

 return (
    <ContainerBase>
        <ContainerMobile>
            <ContainerLogin>
                <form onSubmit={login}>
                    <ContainerLogo>
                        <img src='https://play-lh.googleusercontent.com/lveOdB-DgeKN3SHHGJx0OxSPBvhLgUOeRW18rW96wTXHPEPGKgLLB4TnwDIZ2m5F1_E' alt="Logo do cartão"/>
                    </ContainerLogo>
                    <ContainerInputs>
                    <h3>Entrar em sua conta!</h3>
                    <div>
                        <label for='userName'></label>
                        <input
                            maxLength={11}
                            placeholder='CPF'
                            value={cpf}
                            onChange={(ev)=>{setCpf(ev.target.value)}}
                            name='userName'
                            required
                        />
                    </div>
                    <div>
                        <label for='password'></label>
                        <input
                            maxLength={6}
                            placeholder='Password'
                            value={password}
                            onChange={(ev)=>{setPassword(ev.target.value)}}
                            type='password'
                        />
                    </div>
                    </ContainerInputs>
                    <ContainerError>
                        <span>{error}</span>
                    </ContainerError>
                    <ContainerAction>
                        <button>Entrar</button> 
                        <button onClick={()=>{navigate('/signup')}}>Registre-se</button> 
                    </ContainerAction>
                {/* <h3>Entrar em sua conta!</h3>
                    <div>
                        <label for='userName'></label>
                        <input
                            maxLength={11}
                            placeholder='CPF'
                            value={cpf}
                            onChange={(ev)=>{setCpf(ev.target.value)}}
                            name='userName'
                            required
                        />
                    </div>
                    <div>
                        <label for='password'></label>
                        <input
                            maxLength={6}
                            placeholder='Password'
                            value={password}
                            onChange={(ev)=>{setPassword(ev.target.value)}}
                            type='password'
                        />
                    </div>
                    <ContainerError>

                    </ContainerError>
                    <section>
                        <button>Entrar</button> 
                        <button onClick={()=>{navigate('/signup')}}>Registre-se</button> 
                    </section> */}
                </form>
            </ContainerLogin>
        </ContainerMobile>
        <ToastContainer/>
    </ContainerBase>
 );
}