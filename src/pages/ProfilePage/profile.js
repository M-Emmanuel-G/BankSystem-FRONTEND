import React from 'react';
import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navBar';
import useRequestData from '../../hooks/useRequestData';
import { ContainerBase, ContainerMobile } from '../../styles/styleGlobal';
import { BASE_URL } from '../../URL/url';
import { ContainerProfile } from './style';

export default function ProfilePage() {

    const [ profile ] = useRequestData(`${BASE_URL}/clients/getProfile`, {headers:{ authorization: localStorage.getItem('token')}})
    const [dataClient] = useRequestData(`${BASE_URL}/accounts/myAccountClient/${profile.id_user}`)

    const getProfile = dataClient.map((profile, key)=>{
        return(
            <section key={key}>
                 <div>
                    <label>Nome completo:</label>
                    <span>{profile.name_client}</span>
                </div>
                <div>
                    <label>Email:</label>
                    <span>{profile.email}</span>
                </div>
                <div>
                    <label>Telefone:</label>
                    <span>{profile.phone}</span>
                </div>
                <div>
                    <label>CPF:</label>
                    <span>{profile.cpf}</span>
                </div>
                <div>
                    <label>Conta:</label>
                    <span>{profile.cod_account}</span>
                </div>
                <div>
                    <label>Tipo da conta:</label>
                    <span>{profile.type_account}</span>
                </div>
            </section>
        )
    })
 return (
    <ContainerBase>
        <ContainerMobile>
            <Header/>
            <ContainerProfile>
                <h2>Informações</h2>
                {getProfile}
            </ContainerProfile>
            <NavBar/>
        </ContainerMobile>
    </ContainerBase>
 );
}