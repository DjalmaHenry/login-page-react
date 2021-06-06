import React, { useState } from 'react'
import './login.css'
import { MdEmail, MdLock } from "react-icons/md";
import { HiEye, HiEyeOff } from "react-icons/hi";
import socialMediaAuth from './service/auth';
import { googleProvider } from './config/authMethods';

function Login() {
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [show, setShow] = useState(false)
const handleClick = (e) => {
    e.preventDefault()
    setShow(!show);
}
const handleOnClick = async(provider) => {
    const res = await socialMediaAuth(provider);
    console.log(res);
}

    return (
        <div className="login">
            <div className="login-logo">
                <img
                 src="https://i.pinimg.com/originals/32/9b/3e/329b3e4c3a1330480b8106ca83d1e187.png" 
                 alt="Login App"
                 />

                <div className="login-right">
                    <h1>Acessar APP</h1>

                    <div className="login-InputEmail">
                        <MdEmail />
                        <input 
                        type="email" 
                        placeholder="Digite um e-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="login-InputPassword">
                        <MdLock />
                        <input 
                        placeholder="Digite sua senha"
                        type={show ? "text" : "password"}
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        />
                        <div className="login-eye">
                            {show ? (
                                <HiEye 
                                size={20}
                                onClick={handleClick}
                                />
                            ) : (
                                <HiEyeOff 
                                size={20}
                                onClick={handleClick}
                                />
                            )}
                        </div>
                    </div>

                    <button type="submit">
                        Entrar
                    </button>

                    <button onClick={() => handleOnClick(googleProvider)}>
                        Entrar com o Google
                    </button>

                    <h4>Não tenho conta!</h4>

                    <button type="submit">
                        Cadastrar
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Login