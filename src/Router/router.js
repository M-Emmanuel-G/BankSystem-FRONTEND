import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AccountPage from '../pages/AccountPage/accountpage';
import DepositPage from '../pages/DepositPage/deposit';
import Homepage from '../pages/Homepage/homepage';
import LoadingPage from '../pages/LoadingPage/loadingPage';
import LoginPage from '../pages/LoginPage/loginpage';
import MyAccountPage from '../pages/MyAccountPage/myAccount';
import MyBilletsPage from '../pages/MyBilletsPage/myBillets';
import PaymentPage from '../pages/PaymentPage/payment';
import ProcessPage from '../pages/ProcessPage/process';
import ProfilePage from '../pages/ProfilePage/profile';
import SignupPage from '../pages/SignupPage/Signup';
import TransferPage from '../pages/TransferPage/transferPage';

export default function Router() {
 return (
    <BrowserRouter>
        <Routes>
            <Route index element={<LoginPage/>}/>
            <Route path='Login' element={<LoginPage/>}/>
            <Route path='signup' element={<SignupPage/>}/>
            <Route path='Conta' element={<AccountPage/>}/>
            <Route path='Homepage' element={<Homepage/>}/>
            <Route path='Transfer' element={<TransferPage/>}/>
            <Route path='Profile' element={<ProfilePage/>}/>
            <Route path='MinhaConta' element={<MyAccountPage/>}/>
            <Route path='Deposito' element={<DepositPage/>}/>
            <Route path='Pagamentos' element={<PaymentPage/>}/>
            <Route path='MeusBoletos' element={<MyBilletsPage/>}/>
            <Route path='Processando' element={<ProcessPage/>}/>
            <Route path='Loading' element={<LoadingPage/>}/>
        </Routes>
    </BrowserRouter>
 );
}