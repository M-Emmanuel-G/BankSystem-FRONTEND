import React, { useState } from 'react';
import { ContainerBase, ContainerMobile } from '../../styles/styleGlobal';
import { ContainerAction, ContainerUpdate } from './style';
import Header from '../../components/Header/header';
import NavBar from '../../components/NavBar/navBar';
import axios from 'axios';
import { BASE_URL } from '../../URL/url';
import useRequestData from '../../hooks/useRequestData';

export default function UpdateProfile() {

    const [ profile ] = useRequestData(`${BASE_URL}/clients/getProfile`, {headers:{ authorization: localStorage.getItem('token')}})
    console.log(profile);

    const [linkImg, setLinkImg] = useState('')

    const updateProfile = (ev)=>{
        ev.preventDefault()
        const body = {
            img : linkImg
        }
        axios
            .patch(`${BASE_URL}/clients/update/${profile.id_user}`, body )
            .then((res)=>{alert(res.data.message)})
            .catch((err)=>{
                console.log(err);
                alert(err.response.data)})
    }

 return (
    <ContainerBase>
        <ContainerMobile>
            <ContainerUpdate>
                <form onSubmit={updateProfile}>
                    <h2>Atualize seu Cadastro...</h2>
                    <div>
                        <label>Link da imagem</label>
                        <input
                            type='text'
                            value={linkImg}
                            onChange={(ev)=>{setLinkImg(ev.target.value)}}
                        />
                    </div>
                <button> Atualizar</button>
                </form>
            </ContainerUpdate>
            <ContainerAction>
            </ContainerAction>
            <NavBar/>
        </ContainerMobile>
    </ContainerBase>
 );
}