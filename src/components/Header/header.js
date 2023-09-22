import React from 'react';
import { ContainerHeader } from './style';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../URL/url';

export default function Header() {

    const [ profile ] = useRequestData(`${BASE_URL}/clients/getProfile`, {headers:{ authorization: localStorage.getItem('token')}})
    const [ dataClient, isLoading ] = useRequestData(`${BASE_URL}/accounts/myAccountClient/${profile.id_user}`)

    const getClient = dataClient.map((client, key)=>{
        return(
            <div key={key}>
                <span>{client.name_client},</span>
                <span>Conta: {client.cod_account} / {client.type_account} </span>
            </div>
        )
    })
    
    return (
        <ContainerHeader>
        {isLoading && 'Carregando..'}
        {!isLoading && getClient}
        <img src='https://cdn3d.iconscout.com/3d/premium/thumb/profile-6073860-4996977.png' alt='Foto Perfil'/>
    </ContainerHeader>
 );
}