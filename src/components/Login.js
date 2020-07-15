import React, { Fragment, useState } from 'react';
import './Login.css';
import { inject, observer } from 'mobx-react';
import firebase from '../firebase';

@inject('accountStore')
@observer
export default class Login extends React.Component {
    constructor(props) {
        super(props);
        const id = localStorage.getItem('orangeTools.id');
        const pw = localStorage.getItem('orangeTools.pw');
    
        if(id && pw) {
            this.onLogin(id, pw, false);
        }
    }

    login = () => {
        this.onLogin(this.props.accountStore.id, this.props.accountStore.pw);
    }

    onLogin = (id, pw, popup=true) => {
        firebase.database().ref('/').once('value')
        .then((res) => {
            const accounts = res.val().accounts;
            for(const account of accounts) {
                if(account.id === id
                    && account.pw === pw) {
                        this.props.accountStore.setLogin(true);
                        this.props.accountStore.setName(account.name);
                        if(popup)
                        alert(`로그인 했습니다. ${account.name}(${account.id})`);

                        localStorage.setItem('orangeTools.id', account.id);
                        localStorage.setItem('orangeTools.pw', account.pw);
                }
                else if (account.id === this.props.accountStore.id) {
                    if(popup)
                    alert('로그인 실패! (비밀번호 오류)');
                }
                else {
                    if(popup)
                    alert('로그인 실패! (없는 아이디)');
                }
            }
        })
    }

    logout = () => {
        this.props.accountStore.setPw('');
        this.props.accountStore.setName('');
        this.props.accountStore.setLogin(false);
        localStorage.removeItem('orangeTools.id');
        localStorage.removeItem('orangeTools.pw');
    }

    onInputID = (e) => {
        this.props.accountStore.setId(e.target.value);
    }
    onInputPW = (e) => {
        this.props.accountStore.setPw(e.target.value);
    }
    render() {
        return (
            <nav className='loginNav'>
                {(()=>{
                    if(this.props.accountStore.isLogin) {
                        return (
                        <Fragment>
                        <div>
                            <p className='accountInfo'><span style={{fontSize: '13px', fontWeight: 'bold' , color: '#89ff9d'}}>{this.props.accountStore.name}</span> 님 환영합니다.</p>
                        </div>
                        <p className='loginout' onClick={this.logout}>로그아웃</p>
                        </Fragment>
                        )
                    }
                    else {
                        return (
                            <div className='loginForm'>
                                <input value={this.props.accountStore.id} onChange={this.onInputID} className='input_id' placeholder='ID'/>
                                <input value={this.props.accountStore.pw} onChange={this.onInputPW} type='password' className='input_pw' placeholder='PW'/>
                                <p className='loginout' onClick={this.login}>로그인</p>
                            </div>
                        )
                    }
                })()}
            </nav>
        );
    }
}