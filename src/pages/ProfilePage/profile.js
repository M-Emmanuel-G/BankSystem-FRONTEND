import React from 'react';
import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navBar';
import useRequestData from '../../hooks/useRequestData';
import { ContainerBase, ContainerMobile, Loading } from '../../styles/styleGlobal';
import { BASE_URL } from '../../URL/url';
import { ContainerAction, ContainerInfo, ContainerProfile } from './style';
import { useNavigate } from 'react-router-dom';

export default function ProfilePage() {

    const [ profile, isLoading ] = useRequestData(`${BASE_URL}/clients/getProfile`, {headers:{ authorization: localStorage.getItem('token')}})
    const [dataClient] = useRequestData(`${BASE_URL}/accounts/myAccountClient/${profile.id_user}`)

    const navigate = useNavigate()

    const getProfile = dataClient.map((profile, key)=>{
        return(
            <section key={key}>
                <div>
                    <img src={profile.img}/>
                </div>
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
            <ContainerProfile>
                <ContainerAction>
                    <h2>Meu Perfil...</h2>
                    <img onClick={()=>{navigate('/atualizarCadastro')}} src='https://cdn-icons-png.flaticon.com/128/9634/9634117.png'/>
                </ContainerAction>
                <ContainerInfo>
                    {isLoading && "Carregando..."}
                    {!isLoading && getProfile}
                </ContainerInfo>
            </ContainerProfile>
            <NavBar/>
        </ContainerMobile>
    </ContainerBase>
 );
}