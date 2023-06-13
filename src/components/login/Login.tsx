import React, { useState } from 'react'
import '../../styles/css/Login.css'
import PABLOSVG from '../../assets/svg/login/pablo.svg'
import UNION from '../../assets/svg/login/union.svg'
import LENDSQR from '../../assets/svg/login/lendsqr.svg'
import { useAuthContext } from '../../hooks/useAuthContext'
import { useNavigate } from 'react-router-dom'



export const Login: React.FC = () => {
    const [email, setEmail] = useState<any>('')
    const [password, setPassword] = useState<any>('')
    const [error, setError] = useState<String>('')
    const {login} = useAuthContext()

    const emailCheck: string = 'adeji@gmail.com'
    const passwordCheck: string = '12345678'

    const navigate = useNavigate()


    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (email === emailCheck && password === passwordCheck) {
            login()
            return navigate('/')
        } else {
            setError('invalid credentials')
            console.log(error)
        }
    }

    return (
        <div className='log-in-page'>

            <section className="logo-section">
                <span className='logo'>
                    <img className='union' src={UNION} alt="logo-1" />
                    <img className='lendsqr' src={LENDSQR} alt="logo-2" />
                </span>
                <img src={PABLOSVG} alt="background-img" />
            </section>



            <section className="form-section">
                
            <span className='logo'>
                    <img className='union' src={UNION} alt="" />
                    <img className='lendsqr' src={LENDSQR} alt="" />
                </span>

                <div className="container">
                    <h1>
                        Welcome!
                    </h1>

                    <span className="login-details-note">
                        Enter details to Login
                    </span>

                    {/* form */}

                    <form onSubmit={handleSubmit}>
                        <div>
                            <input placeholder='Email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <input placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <span className='forgot-password'>
                            FORGOT PASSWORD?
                        </span>
                        <button disabled={(!email || !password)}>
                            <span>LOG IN</span>
                        </button>
                    </form>

                </div>

            </section>


        </div>
    )
}
